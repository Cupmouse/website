import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

export default function Features() {
  return (
    <Container style={{ margin: '4em  0 6em 0' }}>
      <Grid rows={2} columns={2} textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Icon size="massive" name="fire" className="feature-fire" />
            <Header size="large" content="Never Mind About Datasets" />
            <p className="bigger-text">
              You never have to think about how data are stored, what format to use,
              cost to mantain those infrastructure anymore.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon size="massive" name="dollar" className="feature-dollar" />
            <Header size="large" content="Pay for Network Transfer" />
            <p className="bigger-text">
              You will pay for how much data you expect to fetch in a month.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Icon size="massive" name="book" className="feature-book" />
            <Header size="large" content="Intuitive API Libraries" />
            <p className="bigger-text">
              Libraries are available for fast and easy development.
            </p>
            <p className="bigger-text">
              Popular platform/language such as NodeJS, Python are supported.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon size="massive" name="file alternate outline" className="feature-file" />
            <Header size="large" content="Server Side Formatting" />
            <p className="bigger-text">
              Standard dataset formatting can be done in server side.
            </p>
            <p className="bigger-text">
              You never have to worry about performance of your favorite script language or of local computing resource used up by data formatting.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
