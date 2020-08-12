import React from 'react';
import { Container, GridRow, GridColumn, Grid } from 'semantic-ui-react';
import { ReactComponent as LogoNodeJS } from '../logos/nodejs.svg';
import { ReactComponent as LogoPython } from '../logos/python.svg';

import { ReactComponent as LogoBitmex } from '../logos/bitmex.svg';
import { ReactComponent as LogoBitfinex } from '../logos/bitfinex.svg';
import { ReactComponent as LogoBitflyer } from '../logos/bitflyer.svg';

export default function Supported() {
  return (
    <Container style={{ padding: '2em 0' }} textAlign="center">
      <Grid columns={2} stackable divided>
        <GridRow>
          <GridColumn>
            <LogoNodeJS width="auto" height="7em" />
          </GridColumn>
          <GridColumn>
            <LogoPython width="auto" height="7em" />
          </GridColumn>
        </GridRow>
      </Grid>
      <Grid columns={3} stackable divided>
        <GridRow>
          <GridColumn>
            <LogoBitmex width="auto" height="2em" />
          </GridColumn>
          <GridColumn>
            <LogoBitfinex width="auto" height="2em" />
          </GridColumn>
          <GridColumn>
            <LogoBitflyer width="auto" height="2em" />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};
