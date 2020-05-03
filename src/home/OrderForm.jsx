import React from 'react';
import PropTypes from 'prop-types';
import { Message, Segment, Radio, Header, Table, Icon, Button, Input, Modal, Step } from 'semantic-ui-react';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { NUMBER_REGEX, EMAIL_REGEX, calcPrice, ORDER_URL, APIKEY_CONSOLE_URL } from '../constants';

const examples = [
  {
    exchange: "Bitmex",
    channel: "trade",
    minuteSize: 1.95087412269e-05,
    time: 70689,
  },
  {
    exchange: "Bitfinex",
    channel: "trades_tBTCUSD",
    minuteSize: 4.77597997006e-06,
    time: 58017,
  },
  {
    exchange: "Bitmex",
    channel: "orderBookL2",
    minuteSize: 0.00261229901064,
  },
  {
    exchange: "Bitfinex",
    channel: "book_tBTCUSD",
    minuteSize: 0.000956595562618,
    time: 200524,
  },
]

const suggested = [
  {
    quota: 30,
  },
  {
    quota: 200,
  },
  {
    quota: 1000,
  },
  {
    quota: 3000,
  },
  {
    quota: 10000,
  },
]

class OrderModal extends React.Component {
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
        throw new Error(result.error);
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
          <p className='bigger-text'>${calcPrice(quota).toString()}</p>
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

export default class OrderForm extends React.Component {
  state = {
    quotaStr: '1',
    email: '',
    error: null,
    modalOpen: false,
    successOpen: false,
  }

  render() {
    const { quotaStr, email, error, modalOpen, successOpen } = this.state;
    const isNumber = NUMBER_REGEX.test(quotaStr);
    const quota = Number.isNaN(+quotaStr) ? 0 : +quotaStr;
    const price = isNumber ? calcPrice(quota) : 0;
    const isEmail = EMAIL_REGEX.test(email);

    return (
      <div>
        <div style={{ padding: '3em 0 3em 0' }}>
          <Step.Group stackable>
            <Step>
              <Icon name='mail' />
              <Step.Content>
                <Step.Title>Enter</Step.Title>
                <Step.Description>Quota and email address</Step.Description>
              </Step.Content>
            </Step>
        
            <Step>
              <Icon name='credit card' />
              <Step.Content>
                <Step.Title>Payment</Step.Title>
                <Step.Description>Enter credit card information</Step.Description>
              </Step.Content>
            </Step>
        
            <Step>
              <Icon name='cart' />
              <Step.Content>
                <Step.Title>Checkout</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </div>
        <Message warning style={{ padding: '3em 0 3em 0' }} >
          <Icon name="warning"/>
          If you already have an account, you can make a new Ticket to an existing API-key by using <a href={APIKEY_CONSOLE_URL}>Exchangedataset API-key Console</a>.
        </Message>
        <p className="bigger-text">You can calculate how much it will cost by inputting the desirable quota amount.</p>
        <Segment.Group style={{ cursor: "pointer" }} horizontal>
          {
            suggested.map((sugg) => (
              <Segment key={sugg.quota} style={{ padding: '2em 0' }} onClick={() => this.setState({ quotaStr: sugg.quota.toString() })}>
                <Radio
                  style={{ fontSize: "2em", fontWeight: "bold" }}
                  label={`${sugg.quota}GB`}
                  checked={quota === sugg.quota}
                />
              </Segment>
            ))
          }
        </Segment.Group>
        <Header size="large" content="Or, how much are you planning to use?" />
        <Input
          size="huge"
          placeholder="Enter transfer amount in GB"
          label="GB"
          labelPosition="right"
          value={quotaStr}
          onChange={(_, { value }) => {
            this.setState({
              quotaStr: value,
            });
          }}
          error={!isNumber}
        />
        <p style={{margin: "1em 0", fontSize: "3em"}}>${price.toFixed(2)} /month</p>
        <Header size="large" content="You have access to all data we have, and can fetch..." />
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Exchange</Table.HeaderCell>
              <Table.HeaderCell>Channel</Table.HeaderCell>
              <Table.HeaderCell>Estimated days of formatted data you can fetch*</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              examples.map((exa) => {
                const days = quota / exa.minuteSize / 60 / 24;
                return (
                  <Table.Row key={exa.exchange+exa.channel}>
                    <Table.Cell>{exa.exchange}</Table.Cell>
                    <Table.Cell>{exa.channel}</Table.Cell>
                    <Table.Cell warning={days < 36} positive={days >= 36}>{days >= 36 ? <Icon name="check" /> : ""}{days.toFixed(2)} days**</Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
        </Table>
        <p style={{ textAlign: 'right' }}>*This is a estimate based on the size of sample datasets. The actual figure may vary.</p>
        <p style={{ textAlign: 'right' }}>**If you used all quota on this single channel by fetching data from the filter endpoint with "json" format.</p>
        <Header size="large" content="Enter Your E-mail Address" />
        <p>We will send you a email to this address with a API-key and a password neccesary to login to our API Management Console.</p>
        {
          error != null ? (
            <Message error>
              {error}
              If you already have an account, please login to API-Key Management Console.
            </Message>
          ) : ""
        }
        <Input
          size="huge"
          type="email"
          placeholder="Enter your email address"
          value={email}
          action={(
            <Button
              primary
              icon='cart'
              size="large"
              content="Proceed"
              disabled={!isNumber || !isEmail}
              onClick={() => this.setState({ modalOpen: true })}
            />
          )}
          onChange={(event, target) => {
            this.setState({
              email: target.value,
            });
          }}
        />
        <ElementsConsumer>
          {({stripe, elements}) => (
            <OrderModal
              stripe={stripe}
              elements={elements}
              email={email}
              quota={quota}
              modalOpen={modalOpen}
              onCancel={() => this.setState({ modalOpen: false })}
              onComplete={() => this.setState({
                modalOpen: false,
                successOpen: true,
              })}
            />
          )}
        </ElementsConsumer>
        <Modal open={successOpen}>
          <Modal.Header content="Thank you!" />
          <Modal.Content>
            <Message
              positive
              icon="checkmark"
              content="Thank you for purchasing our product! We will send you a email with your auto-generated password after the payment is captured."
            />
          </Modal.Content>
          <Modal.Actions>
            <Button content="OK" onClick={() => this.setState({ successOpen: false })} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
