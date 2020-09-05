import React from 'react';
import { Label, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function Title() {
  const { t } = useTranslation();
  
  return (
    <Grid className="title-box" columns={1} padded verticalAlign="middle" textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <p id="title-text">{t('title.title')}</p>
          <p>{t('title.description')}</p>
          <Label size="large" content={t('title.label.ticklevel')} />
          <Label size="large" content={t('title.label.trade')} />
          <Label size="large" content={t('title.label.orderbook')} />
          <Label size="large" content={t('title.label.libraries')} />
          <Label size="large" content={t('title.label.paybytransfer')} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
