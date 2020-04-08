import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

import TopMenu from './TopMenu';

export default function AppHeader() {
  return (
    <header>
      <TopMenu />
      <Container text textAlign="center">
        <Header as="h1" style={{ margin: '2em 0', fontSize: '3em' }}>
          Replay Historical Cryptocurrency Market Data
        </Header>
        <p className="bigger-text">
          We provide one of the most detailed and reliable historical data through intuitive API.
        </p>
        <Button primary size="big" style={{ margin: '2em 0' }}>Try our API</Button>
      </Container>
    </header>
  )
};
