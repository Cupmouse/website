import React from 'react';
import { Container, Grid, Statistic } from 'semantic-ui-react';

export default function Statistics() {
  return (
    <Container style={{ margin: '4em 0' }}>
      <Grid columns={3} divided textAlign="center">
        <Grid.Row verticalAlign='bottom'>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Accumulated</Statistic.Label>
              <Statistic.Value>4TB+</Statistic.Value>
            </Statistic>
            <p>of raw data for over a one year</p>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="large">
              <Statistic.Label>Plan starts from</Statistic.Label>
              <Statistic.Value>$15</Statistic.Value>
            </Statistic>
            <p>per month</p>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Average API Latency</Statistic.Label>
              <Statistic.Value>100ms</Statistic.Value>
            </Statistic>
            <p>API based on robust AWS platform</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
