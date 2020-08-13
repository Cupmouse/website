import React from 'react';
import { Container, GridRow, GridColumn, Grid, Header } from 'semantic-ui-react';
import { ReactComponent as LogoNodeJS } from './logos/nodejs.svg';
import { ReactComponent as LogoPython } from './logos/python.svg';

export default function Supported(props) {
  return (
    <Container {...props} textAlign="center">
      <Header size="large" content="Supported Programming Languages" />
      <Grid columns={2} stackable divided>
        <GridRow>
          <GridColumn>
            <LogoNodeJS width="auto" height="5em" />
          </GridColumn>
          <GridColumn>
            <LogoPython width="auto" height="5em" />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};
