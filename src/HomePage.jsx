import React from 'react';
import { Header, Divider, Container, Segment, Label } from 'semantic-ui-react';

import PlayGround from './components/PlayGround';
import Statistics from './components/Statistics';
import Features from './components/Features';
import Supported from './components/Supported';
import Machinegun from './components/Machinegun';
import OrderForm from './components/OrderForm';

export default function HomePage() {
  return (
    <div>
      <Container text textAlign="center">
        <Header as="h1" style={{ marginTop: '2em', fontSize: '3em' }}>
          Replay Cryptocurrency Historical Market Data
        </Header>
        <p className="bigger-text" style={{marginBottom: '2em'}}>
          Liberating access to historical market data
        </p>
        <div>
          <Label size="large" content="Tick-level" />
          <Label size="large" content="Orderbook" />
          <Label size="large" content="Trade" />
          <Label size="large" content="Funding" />
          <Label size="large" content="Libraries" />
          <Label size="large" content="Pay-by-transfer" />
        </div>
      </Container>
      <PlayGround style={{ padding: '6em 0' }} />
      <Statistics style={{ padding: "6em 0" }} />
      <Features style={{ padding: '6em 0' }} />
      <div style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content="Supported Platform" /></Divider>
        <Supported />
      </div>
      <div style={{ padding: '2em 0'}}>
        <Container style={{ padding: '2em 0' }} textAlign="center">
          <Segment raised style={{ padding: '1em' }}>
            <Header size="huge" content="Get Your API-key" />
            <OrderForm />
          </Segment>
        </Container>
      </div>
      <div style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content="There is More" /></Divider>
        <Machinegun />
      </div>
    </div>
  );
};
