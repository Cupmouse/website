import React from 'react';
import { Message, Segment, Header, Icon, Button, Input, Modal, Step, Container, Grid, Label, Tab } from 'semantic-ui-react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import ReactGA from 'react-ga';
import { withTranslation } from 'react-i18next';

import { NUMBER_REGEX, EMAIL_REGEX, calcPrice } from './constants';
import OrderModal from './OrderModal';
import PriceDetail from './PriceDetail';
import QuotaDetail from './QuotaDetail';

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
    const price = isNumber ? calcPrice(quota).reduce((p, c) => p+c) : 0;
    const isEmail = EMAIL_REGEX.test(email);

    const { t } = this.props

    const suggested = [
      {
        recommend: {
          color: "blue",
          type: t('order.suggestions.tradedata'),
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
          type: t('order.suggestions.recommended'),
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
          type: t('order.suggestions.enterprise'),
        },
        quota: 3000,
      },
    ]
    
    const tabPanes = [
      { menuItem: t('order.tabpane.pricedetail'), render: () => (
        <Tab.Pane>
          <p style={{fontSize: "3em"}} >
            ${price.toFixed(2)} {t('order.tabpane.permonth')}
          </p>
          <Header content={t('order.tabpane.pricedetail')} />
          <PriceDetail quota={quota} />
        </Tab.Pane>
      )},
      { menuItem: t('order.tabpane.transferestimate'), render: () => (
        <Tab.Pane>
          <Header content={t('order.tabpane.transferestimate')} />
          <QuotaDetail quota={quota} />
        </Tab.Pane>
      )},
    ]

    return (
      <Container {...this.props} textAlign="center">
        <Header size="huge" content={t('order.title')} />
        <Step.Group>
          <Step>
            <Icon name='mail' />
            <Step.Content>
              <Step.Title>{t('order.step.1.title')}</Step.Title>
              <Step.Description>{t('order.step.1.detail')}</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='credit card' />
            <Step.Content>
              <Step.Title>{t('order.step.2.title')}</Step.Title>
              <Step.Description>{t('order.step.2.detail')}</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='cart' />
            <Step.Content>
              <Step.Title>{t('order.step.3.title')}</Step.Title>
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
                    <p><span style={{fontSize: "2em"}}>${calcPrice(sugg.quota).reduce((p, c) => p+c)}</span>{t('order.suggestions.permonth')}</p>
                    <span>{t('order.suggestions.quota')}</span>
                    <p style={{fontSize: "2em"}}>{sugg.quota} GB</p>
                    <span>{t('order.suggestions.apicall')}</span>
                    <p style={{fontSize: "2em"}}>{t('order.suggestions.unlimited')}</p>
                    <span>{t('order.suggestions.access')}</span>
                    <p style={{fontSize: "2em"}}>{t('order.suggestions.unlimited')}</p>
                    <Button primary content={t('order.suggestions.choose')} onClick={() => this.setState({ quotaStr: sugg.quota.toString() })}/>
                  </Segment>
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
        <Header size="large" content={t('order.choosequota')} />
        <Input
          size="large"
          placeholder={t('order.gbplaceholder')}
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
        <Tab panes={tabPanes} />
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
