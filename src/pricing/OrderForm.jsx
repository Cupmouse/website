import React from 'react';
import { Message, Header, Button, Input, Modal, Container } from 'semantic-ui-react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import ReactGA from 'react-ga';
import { withTranslation } from 'react-i18next';

import { NUMBER_REGEX, EMAIL_REGEX, calcPrice } from '../constants';
import OrderModal from './OrderModal';

class OrderForm extends React.Component {
  state = {
    quotaStr: '1',
    email: '',
    modalOpen: false,
    successOpen: false,
  }

  render() {
    const { quotaStr, email, modalOpen, successOpen } = this.state;
    const isNumber = NUMBER_REGEX.test(quotaStr);
    const quota = Number.isNaN(+quotaStr) ? 0 : +quotaStr;
    const price = isNumber ? calcPrice(quota).reduce((p, c) => p + c) : 0;
    const isEmail = EMAIL_REGEX.test(email);

    const { t } = this.props

    return (
      <Container {...this.props} textAlign="center">
        <Header size="large" content={t('order.email.title')} />
        <p>{t('order.email.detail')}</p>
        <Input
          size="large"
          type="email"
          placeholder={t('order.email.placeholder')}
          value={email}
          action={(
            <Button
              primary
              icon='cart'
              size="large"
              content={t('order.email.proceed')}
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
          {({ stripe, elements }) => (
            <OrderModal
              stripe={stripe}
              elements={elements}
              email={email}
              quota={quota}
              modalOpen={modalOpen}
              onCancel={() => this.setState({ modalOpen: false })}
              onComplete={() => {
                this.setState({
                  modalOpen: false,
                  successOpen: true,
                });
                ReactGA.event({
                  category: "purchase",
                  action: "purchase",
                  label: "purchase",
                  value: price,
                });
              }
              }
            />
          )}
        </ElementsConsumer>
        <Modal open={successOpen}>
          <Modal.Header content={t('order.paymentsuccess.title')} />
          <Modal.Content>
            <Message
              positive
              icon="checkmark"
              content={t('order.paymentsuccess.detail')}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button content="OK" onClick={() => this.setState({ successOpen: false })} />
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}

export default withTranslation()(OrderForm);
