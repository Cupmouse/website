import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

export default function Features(props) {
  return (
    <Container {...props}>
      <Grid rows={3} columns={2} stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={10} textAlign="right">
            <Header size="huge" content="Be Free From Datasets" />
            <p>
              There always is a hidden cost of maintaining datasets such as
              finding reliable storage, spending human resources in formatting data,
              ensuring access from multiple environments, e.g.
            </p>
            <p>
              Exchangedataset is an on-demand streaming service,
              whose high availability is backed by Amazon Web Service,
              so you can always rely on our infrastructure to take care of storage,
              formatting and consistency across the environments.
            </p>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Icon size="massive" name="fire" className="feature-fire" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign="right">
            <Icon size="massive" name="dollar" className="feature-dollar" />
          </Grid.Column>
          <Grid.Column width={10} textAlign="left">
            <Header size="huge">
              No Daily Limit,<br />
              No Plan Restriction,<br />
              Just Transfer Quota
            </Header>
            <p>
              Why spend extra for access to order book data, or pay annually for access to all data?
            </p>
            <p>
              As long as transfer quota* is available, customers are free to access any data we have, which includes trade, orderbook, ticker,
              and other data recorded from exchanges' public WebSocket in raw and JSON format if it is supported.
            </p>
            <p style={{fontSize: '0.8em'}}>
              *Snapshot endpoint consumes quota based on scanned bytes rather than transferred bytes.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10} textAlign="right">
            <Header size="huge" content="Libraries Available" />
            <p>
              Libraries are available for fast and easy development.
            </p>
            <p>
              We support Node.JS and Python3.
            </p>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Icon size="massive" name="book" className="feature-book" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
