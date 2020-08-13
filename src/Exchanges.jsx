import React from 'react';
import { Container, Grid, GridRow, GridColumn, Header, Label } from 'semantic-ui-react';

import { ReactComponent as LogoBitmex } from './logos/bitmex.svg';
import { ReactComponent as LogoBitfinex } from './logos/bitfinex.svg';
import { ReactComponent as LogoBitflyer } from './logos/bitflyer.svg';

const exchanges = [
  {
    logo: LogoBitmex,
    channels: [
      {
        name: "Trade",
        detail: "Market trade events",
      },
      {
        name: "OrderbookL2",
        detail: "Level-2 orderbook events",
      },
      {
        name: "insurance",
        detail: "Insurance change events",
      },
      {
        name: "Liquidation",
        detail: "Liquidation events",
      },
      {
        name: "settlement",
        detail: "Settlement events",
      },
    ]
  },
  {
    logo: LogoBitfinex,
    channels: [
      {
        name: "Trade",
        detail: "Market trade events"
      },
      {
        name: "OrderbookL2",
        detail: "Level-2 orderbook events",
      },
    ]
  },
  {
    logo: LogoBitflyer,
    channels: [
      {
        name: "Trade",
        detail: "Market trade/execution events"
      },
      {
        name: "OrderbookL2 Difference",
        detail: "Level-2 orderbook difference events",
      },
      {
        name: "OrderbookL2 Snapshot",
        detail: "Level-2 orderbook snapshot events",
      },
      {
        name: "Ticker",
        detail: "Highest detailed ticker available",
      },
    ]
  }
]

export default function Exchanges(props) {
  return (
    <Container {...props} textAlign="center">
      <Header size="large" content="Supported Exchanges" />
      <Grid columns={2} stackable divided verticalAlign="middle">
        {exchanges.map((exc) => (
          <GridRow>
            <GridColumn>
              <exc.logo width="auto" height="2em" />
            </GridColumn>
            <GridColumn>
              {exc.channels.map((ch) => <Label style={{margin: "0.2em"}} content={ch.name} detail={ch.detail} />)}
            </GridColumn>
          </GridRow>
        ))}
      </Grid>
    </Container>
  );
};
