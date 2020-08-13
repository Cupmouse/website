import React from 'react';
import { Message, Segment, Header, Icon, Button, Input, Modal, Step, Container, Grid, Label, Tab } from 'semantic-ui-react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import ReactGA from 'react-ga';

import { NUMBER_REGEX, EMAIL_REGEX, calcPrice } from './constants';
import OrderModal from './OrderModal';
import PriceDetail from './PriceDetail';
import QuotaDetail from './QuotaDetail';

const suggested = [
  {
    recommend: {
      color: "blue",
      type: "Trade Data"
    },
    quota: 30,
  },
  {
    recommend: null,
    quota: 200,
  },
  {
    recommend: {
      color: "red",
      type: "Recommended",
    },
    quota: 500,
  },
  {
    recommend: null,
    quota: 1000,
  },
  {
    recommend: {
      color: "violet",
      type: "ENTERPRISE",
    },
    quota: 3000,
  },
]

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
    const price = isNumber ? calcPrice(quota).reduce((p, c) => p+c) : 0;
    const isEmail = EMAIL_REGEX.test(email);

    const tabPanes = [
      { menuItem: 'Price Detail', render: () => (
        <Tab.Pane>
          <Header content="Price Detail" />
          <PriceDetail quota={quota} />
        </Tab.Pane>
      )},
      { menuItem: 'Price Detail', render: () => (
        <Tab.Pane>
          <Header content="Quota Estimate" />
          <QuotaDetail quota={quota} />
        </Tab.Pane>
      )},
    ]

    return (
      <Container {...this.props} textAlign="center">
        <Header size="huge" content="Order Your API-key" />
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
        <Grid columns={suggested.length} textAlign="center" stackable>
          <Grid.Row stretched>
            {
              suggested.map((sugg) => (
                <Grid.Column>
                  <Segment key={sugg.quota} shadowed>
                    <div style={{height: "3em"}}>
                      {
                        sugg.recommend ? <Label color={sugg.recommend.color} content={sugg.recommend.type} /> : ""
                      }
                    </div>
                    <p><span style={{fontSize: "2em"}}>${calcPrice(sugg.quota).reduce((p, c) => p+c)}</span>/month</p>
                    <span>Quota</span>
                    <p style={{fontSize: "2em"}}>{sugg.quota} GB</p>
                    <span>API Call</span>
                    <p style={{fontSize: "2em"}}>Unlimited</p>
                    <span>Access</span>
                    <p style={{fontSize: "2em"}}>Unlimited</p>
                    <Button primary content="Choose" onClick={() => this.setState({ quotaStr: sugg.quota.toString() })}/>
                  </Segment>
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
        <Header size="large" content="Or, you can choose how much you need" />
        <Input
          size="large"
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
        <Tab panes={tabPanes} />
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
          size="large"
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
      </Container>
    );
  }
}
