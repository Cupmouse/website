import React from 'react';
import { Container, Grid, GridRow, GridColumn, Header, Label } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LogoBitmex } from './logos/bitmex.svg';
import { ReactComponent as LogoBitfinex } from './logos/bitfinex.svg';
import { ReactComponent as LogoBitflyer } from './logos/bitflyer.svg';


export default function Exchanges(props) {
  const { t } = useTranslation()

  const exchanges = [
    {
      tname: "bitmex",
      logo: LogoBitmex,
      channels: ["trade", "orderbookl2", "insurance", "liquidation", "settlement"],
    },
    {
      tname: "bitfinex",
      logo: LogoBitfinex,
      channels: ["trade", "book"],
    },
    {
      tname: "bitflyer",
      logo: LogoBitflyer,
      channels: ["trade", "book", "booksnapshot", "ticker"],
    }
  ]

  return (
    <Container {...props} textAlign="center">
      <Header size="large" content={t('exchanges.title')} />
      <Container fluid text textAlign="center">
        {t('exchanges.detail')}
      </Container>  
      <Grid columns={2} stackable divided verticalAlign="middle">
        {exchanges.map((exc) => (
          <GridRow key={exc.tname}>
            <GridColumn>
              <exc.logo width="auto" height="2em" />
            </GridColumn>
            <GridColumn>
              {
                exc.channels.map((ch) =>
                  <Label key={ch} style={{margin: "0.2em"}}
                    content={t(`exchanges.${exc.tname}.${ch}.name`)}
                    detail={t(`exchanges.${exc.tname}.${ch}.detail`)}
                  />
                )
              }
            </GridColumn>
          </GridRow>
        ))}
      </Grid>
    </Container>
  );
};
