import React from 'react';
import { Header, Divider, Container, Segment } from 'semantic-ui-react';

import PlayGround from '../home/PlayGround';
import Statistics from '../home/Statistics';
import Features from '../home/Features';
import Supported from '../home/Supported';
import Machinegun from '../home/Machinegun';
import OrderForm from '../home/OrderForm';

export default function HomePage() {
  return (
    <div>
      <Container text textAlign="center">
        <Header as="h1" style={{ marginTop: '2em', fontSize: '3em' }}>
          Replay Cryptocurrency Historical Market Data
        </Header>
        <p className="bigger-text" style={{marginBottom: '2em'}}>
          We provide one of the most detailed and reliable historical data through intuitive API.
        </p>
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
