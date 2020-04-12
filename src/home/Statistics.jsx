import React from 'react';
import { Container, Grid, Statistic } from 'semantic-ui-react';

export default function Statistics() {
  return (
    <Container style={{ paddingTop: "2em" }}>
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
              <Statistic.Label>Starts from</Statistic.Label>
              <Statistic.Value>$1.5</Statistic.Value>
            </Statistic>
            <p>/GB month</p>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Average API Response Time</Statistic.Label>
              <Statistic.Value>~2000ms</Statistic.Value>
            </Statistic>
            <p>API based on robust AWS platform</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
