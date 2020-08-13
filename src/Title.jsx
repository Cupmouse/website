import React from 'react';
import { Label, Grid } from 'semantic-ui-react';

export default function Title() {
  return (
    <Grid className="title-view" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <p id="title-text">Cryptocurrency Historical Market Data</p>
                <p>Reliable, highly detailed historical market data for everyone</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{margin: '1em'}}>
              <Grid.Column>
                <Label size="large" content="Tick-level" />
                <Label size="large" content="Trade" />
                <Label size="large" content="Orderbook" />
                <Label size="large" content="Libraries" />
                <Label size="large" content="Pay-by-transfer" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
