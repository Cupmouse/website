import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';

export default function Statistics() {
  return (
    <Grid container columns={3} divided stackable textAlign="center">
      <Grid.Row verticalAlign='bottom'>
        <Grid.Column>
          <Statistic>
            <Statistic.Label>Accumulated</Statistic.Label>
            <Statistic.Value>7TB+</Statistic.Value>
          </Statistic>
          <p>of raw data for over a year</p>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="large">
            <Statistic.Label>Starts From</Statistic.Label>
            <Statistic.Value>$10</Statistic.Value>
          </Statistic>
          <p>/ month</p>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Label>Supporting</Statistic.Label>
            <Statistic.Value>3</Statistic.Value>
          </Statistic>
          <p>exchanges</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
