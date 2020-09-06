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
            <Statistic.Value>7TB+</Statistic.Value>
            <Statistic.Label>{t('stats.accumulated.label')}</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="large">
            <Statistic.Value>$10</Statistic.Value>
            <Statistic.Label>{t('stats.price.label')}</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>3</Statistic.Value>
            <Statistic.Label>{t('stats.exchanges.label')}</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
