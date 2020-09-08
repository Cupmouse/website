import React from 'react';
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';

import { ReactComponent as LogoNodeJS } from '../logos/nodejs.svg';
import { ReactComponent as LogoPython } from '../logos/python.svg';

export default function Supported() {
  return (
    <Grid columns={2} textAlign="center" stackable divided padded>
      <GridRow>
        <GridColumn>
          <LogoNodeJS alt="Node.JS" width="auto" height="5em" />
        </GridColumn>
        <GridColumn>
          <LogoPython alt="Python3" width="auto" height="5em" />
        </GridColumn>
      </GridRow>
    </Grid>
  );
};
