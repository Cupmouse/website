import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function Statistics() {
  const { t } = useTranslation();
  
  return (
    <Grid container columns={3} divided stackable textAlign="center">
      <Grid.Row verticalAlign='bottom'>
        <Grid.Column>
          <Statistic>
            <Statistic.Label>{t('stats.accumulated.top')}</Statistic.Label>
            <Statistic.Value>7TB+</Statistic.Value>
          </Statistic>
          <p>{t('stats.accumulated.bottom')}</p>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="large">
            <Statistic.Label>{t('stats.price.top')}</Statistic.Label>
            <Statistic.Value>$10</Statistic.Value>
          </Statistic>
          <p>{t('stats.price.bottom')}</p>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Label>{t('stats.exchanges.top')}</Statistic.Label>
            <Statistic.Value>3</Statistic.Value>
          </Statistic>
            <p>{t('stats.exchanges.bottom')}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
