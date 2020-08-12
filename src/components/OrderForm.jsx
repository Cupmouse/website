import React from 'react';
import { Message, Segment, Radio, Header, Table, Icon, Button, Input, Modal, Step } from 'semantic-ui-react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import ReactGA from 'react-ga';

import { NUMBER_REGEX, EMAIL_REGEX, calcPrice, APIKEY_CONSOLE_URL } from '../constants';
import OrderModal from '../OrderModal';
import PriceDetail from './PriceDetail';

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
    exchange: "Bitflyer",
    channel: "executions_FX_BTC_JPY",
    minuteSize: 0.000159854990327,
    time: 332546,
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
  {
    exchange: "Bitflyer",
    channel: "board_FX_BTC_JPY",
    minuteSize: 0.0012000080654,
    time: 498695,
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

export default class OrderForm extends React.Component {
  state = {
    quotaStr: '1',
    email: '',
    error: null,
    modalOpen: false,
    successOpen: false,
    priceDetailOpen: false,
  }

  render() {
    const { quotaStr, email, error, modalOpen, successOpen, priceDetailOpen } = this.state;
    const isNumber = NUMBER_REGEX.test(quotaStr);
    const quota = Number.isNaN(+quotaStr) ? 0 : +quotaStr;
    const price = isNumber ? calcPrice(quota).reduce((p, c) => p+c) : 0;
    const isEmail = EMAIL_REGEX.test(email);

    return (
      <div>
        <div style={{ padding: '3em 0 3em 0' }}>
          <Step.Group>
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
        <p
          style={{
            margin: "1em 0",
            fontSize: "3em",
            cursor: "pointer",
            borderBottom: "dotted 1px",
          }}
          onClick={() => this.setState({ priceDetailOpen: true })}
        >
          ${price.toFixed(2)} /month
        </p>
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
        <PriceDetail
          quota={quota}
          open={priceDetailOpen}
          onCloseButton={() => this.setState({ priceDetailOpen: false })}
        />
      </div>
    );
  }
}
