import React from 'react';
import { Container } from 'semantic-ui-react';
import { ReactComponent as LogoNodeJS } from './logos/nodejs.svg';
import { ReactComponent as LogoPython } from './logos/python.svg';

import { ReactComponent as LogoBitmex } from './logos/bitmex.svg';
import { ReactComponent as LogoBitfinex } from './logos/bitfinex.svg';
import { ReactComponent as LogoBitflyer } from './logos/bitflyer.svg';

export default function Supports() {
  return (
    <div style={{ margin: '4em 0' }}>
      <Container style={{ margin: '2em 0' }} textAlign="center">
        <LogoNodeJS width="auto" height="7em" />
        <LogoPython width="auto" height="7em" />
      </Container>
      <Container style={{ margin: '2em 0' }} textAlign="center">
        <LogoBitmex width="auto" height="3em" />
        <LogoBitfinex width="auto" height="3em" />
        <LogoBitflyer width="auto" height="3em" />
      </Container>
    </div>
  );
};
