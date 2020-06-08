import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

export default function Features(props) {
  return (
    <Container {...props}>
      <Grid columns={3} stackable textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Icon size="massive" name="fire" className="feature-fire" />
            <Header size="large" content="Never Mind About Datasets" />
            <p className="bigger-text">
              Never think about how data are stored, what format to use,
              cost to mantain those infrastructure anymore.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon size="massive" name="dollar" className="feature-dollar" />
            <Header size="large" content="Pay for Network Transfer" />
            <p className="bigger-text">
              You will pay for how much data you expect to fetch in a month*.
            </p>
            <p>
              *Snapshot endpoint consume quota based on scanned bytes rather than transferred bytes.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon size="massive" name="book" className="feature-book" />
            <Header size="large" content="Intuitive API Libraries" />
            <p className="bigger-text">
              Libraries are available for fast and easy development.
            </p>
            <p className="bigger-text">
              Currently, we only support Node.JS.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
