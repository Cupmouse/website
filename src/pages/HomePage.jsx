import React from 'react';
import { Header, Divider, Container, Button } from 'semantic-ui-react';

import Statistics from '../home/Statistics';
import Features from '../home/Features';
import Supports from '../home/Supports';
import PriceCalc from '../home/PriceCalc';

export default function HomePage() {
  return (
    <div>
      <Container text textAlign="center">
        <Header as="h1" style={{ margin: '2em 0', fontSize: '3em' }}>
          Replay Historical Cryptocurrency Market Data
        </Header>
        <p className="bigger-text">
          We provide one of the most detailed and reliable historical data through intuitive API.
        </p>
        <Button
          primary
          size="big"
          style={{ margin: '2em 0' }}
          as="a"
          href="https://repl.it/@nozomushimaoka/exchangedataset-node-examples"
          target="_blank"
          content="Test our API"
        />
      </Container>
      <Statistics />
      <div style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content="Features" /></Divider>
        <Features />
      </div>
      <div style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content="Supported Platform/Language" /></Divider>
        <Supports />
      </div>
      <div style={{ padding: '2em 0'}}>
        <Divider horizontal><Header size="huge" content="Price Calculator" /></Divider>
        <PriceCalc />
      </div>
    </div>
  );
};
