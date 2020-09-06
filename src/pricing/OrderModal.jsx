import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CardElement } from '@stripe/react-stripe-js';
import { ORDER_URL, calcPrice } from '../constants';
import { Modal, Message, Segment, Button } from 'semantic-ui-react';

export default class OrderModal extends Component {
  state = {
    error: null,
    loading: false,
    modalOpen: false,
  }

  handleSubmit = async () => {
    try {
      const { stripe, elements, email, quota, onComplete } = this.props;

      if (!stripe || !elements) {
        return;
      }
  
      this.setState({
        loading: true,
      });
  
      // request the begin of payment
      const response = await window.fetch(ORDER_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'error',
        body: JSON.stringify({
          email,
          quota: quota.toString(),
        }),
      }).then((res) => res.json());
      if ('error' in response) {
        throw new Error(response.error);
      }
  
      // approve payment intent
      const result = await stripe.confirmCardPayment(response.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });
  
      if (result.error) {
        throw result.error;
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          this.setState({
            error: null,
            loading: false,
          });
          onComplete();
        }
      }
    } catch (e) {
      this.setState({
        error: e.message,
        loading: false,
      })
    }
  };
  
  render() {
    const { stripe, elements, modalOpen, quota, onCancel } = this.props;
    const { error, loading } = this.state;
    const okDisabled = stripe === null || elements === null || loading;

    return (
      <Modal open={modalOpen}>
        <Modal.Header content="Place An Order" />
        <Modal.Content>
          {
            error !== null ? (
              <Message
                negative
                content={error}
              />
            ) : ''
          }
          <p>You are ordering a new API-key with {quota}GB of quota.</p>
          <p>And we are charging you:</p>
          <p className='bigger-text'>${calcPrice(quota).reduce((p, c) => p+c).toString()}</p>
          <p>To complete the purchase, enter your credit card number below and click the button "Confirm Payment".</p>
          <p style={{ fontWeight: 'bold' }}>Payment procedure will immidiately start and can not be cancelled.</p>
          <p>Please note that we don't accept any cancels or refunds.</p>
          <Segment>
            <CardElement />
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            content="Confirm Payment"
            disabled={okDisabled}
            loading={loading}
            onClick={this.handleSubmit}
          />
          <Button
            content="Cancel"
            disabled={loading}
            onClick={onCancel}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

OrderModal.propTypes = {
  stripe: PropTypes.object,
  elements: PropTypes.object,
  email: PropTypes.string.isRequired,
  quota: PropTypes.number.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

OrderModal.defaultProps = {
  stripe: null,
  elements: null,
}
