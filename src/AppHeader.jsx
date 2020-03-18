import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

import TopMenu from './TopMenu';

export default function AppHeader() {
  return (
    <header>
      <TopMenu />
      <Container text textAlign="center">
        <Header as="h1" style={{ margin: '2em 0', fontSize: '3em' }}>Tick-by-Tick Replayable Historical Cryptocurrency Market Data</Header>
        <p className="bigger-text">
          We provide one of the best data for customers who want historical market data with high precision.
        </p>
        <Button primary size="big" style={{ margin: '2em 0' }}>Try our API</Button>
      </Container>
    </header>
  )
};
