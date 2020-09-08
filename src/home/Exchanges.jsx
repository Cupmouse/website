import React from 'react';
import { Grid, GridRow, GridColumn, Label } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LogoBitmex } from '../logos/bitmex.svg';
import { ReactComponent as LogoBitfinex } from '../logos/bitfinex.svg';
import { ReactComponent as LogoBitflyer } from '../logos/bitflyer.svg';


export default function Exchanges(props) {
  const { t } = useTranslation()

  const exchanges = [
    {
      tname: "bitmex",
      logo: LogoBitmex,
      alt: "Bitmex",
      channels: ["trade", "orderbookl2", "insurance", "liquidation", "settlement"],
    },
    {
      tname: "bitfinex",
      logo: LogoBitfinex,
      alt: "Bitfinex",
      channels: ["trade", "book"],
    },
    {
      tname: "bitflyer",
      logo: LogoBitflyer,
      alt: "Bitflyer",
      channels: ["trade", "book", "booksnapshot", "ticker"],
    }
  ]

  return (
    <Grid columns={2} verticalAlign="middle" stackable divided padded>
      {exchanges.map((exc) => (
        <GridRow key={exc.tname}>
          <GridColumn>
            <exc.logo alt={exc.alt} width="auto" height="2em" />
          </GridColumn>
          <GridColumn>
            {
              exc.channels.map((ch) =>
                <Label key={ch} style={{ margin: "0.2em" }}
                  content={t(`exchanges.${exc.tname}.${ch}.name`)}
                  detail={t(`exchanges.${exc.tname}.${ch}.detail`)}
                />
              )
            }
          </GridColumn>
        </GridRow>
      ))}
    </Grid>
  );
};
