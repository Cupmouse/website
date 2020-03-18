import React from 'react';
import { Container, Grid, Header, Segment, Label, Divider, Button, Table } from 'semantic-ui-react';

export default function PriceTable() {
  return (
    <div style={{ margin: '4em 0' }}>
      <Container style={{ margin: '2em 0' }}>
        <Table fixed>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell><Label color='red' content="Recommended" /></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.Cell>
                <Header size="huge" content="Nano" />
                <p><span style={{ fontSize: '2em' }}>10GB</span>/month</p>
                <p>of transfer quota</p>
              </Table.Cell>
              <Table.Cell>
                <Header size="huge" content="Micro" />
                <Header size="large" content="50GB/Month" />
                <p>of transfer quota</p>
              </Table.Cell>
              <Table.Cell>
                <Header size="huge" content="Small" />
                <Header size="large" content="200/Month" />
                <p>of transfer quota</p>
              </Table.Cell>
              <Table.Cell>
                <Header size="huge" content="Medium" />
                <Header size="large" content="500GB/Month" />
                <p>of transfer quota</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Divider horizontal content="Quota equivalent to*" />
                <p>Streaming two months of raw data of a single exchange</p>
                <p>or</p>
                <p>Streaming two months of raw trading and L2 orderbook data of a single exchange</p>
                <Divider horizontal>
                  Best for
                </Divider>
                <p>Individuals who want high precision historical market data to backtest with</p>
              </Table.Cell>
              <Table.Cell>
                <Divider horizontal content="Quota equivalent to*" />
                <p>Streaming two months of raw data of a single exchange</p>
                <p>or</p>
                <p>Streaming two months of raw trading and L2 orderbook data of a single exchange</p>
                <Divider horizontal>
                  Best for
                </Divider>
                <p>Individuals who want high precision historical market data to backtest with</p>
              </Table.Cell>
              <Table.Cell>
                <Divider horizontal content="Quota equivalent to*" />
                <p>Streaming two months of raw data of a single exchange</p>
                <p>or</p>
                <p>Streaming two months of raw trading and L2 orderbook data of a single exchange</p>
                <Divider horizontal>
                  Best for
                </Divider>
                <p>Individuals who want high precision historical market data to backtest with</p>
              </Table.Cell>
              <Table.Cell>
                <Divider horizontal content="Quota equivalent to*" />
                <p>Streaming two months of raw data of a single exchange</p>
                <p>or</p>
                <p>Streaming two months of raw trading and L2 orderbook data of a single exchange</p>
                <Divider horizontal>
                  Best for
                </Divider>
                <p>Individuals who want high precision historical market data to backtest with</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$15</span>/month</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$45</span>/month</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$250</span>/month</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$400</span>/month</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>


        <Grid columns={4} stretched>
          <Grid.Row>
            <Grid.Column>
              <Segment tertiary style={{ verticalAlign: 'bottom' }}>
                <div style={{ textAlign: 'center' }}>
                  <Header size="huge" content="Nano" />
                  <Header size="large" content="10GB/Month" />
                  <p>of transfer quota</p>
                  <Divider horizontal style={{ marginTop: '3em' }}>
                    Quota equivalent to*
                  </Divider>
                  <p>Streaming two months of raw data of a single exchange</p>
                  <p>or</p>
                  <p>Streaming two months of raw trading and L2 orderbook data of a single exchange</p>
                  <Divider horizontal>
                    Best for
                  </Divider>
                  <p>Individuals who want high precision historical market data to backtest with</p>
                  <p style={{ fontSize: '2em' }}>$15/Month</p>
                  <Button secondary>Choose</Button>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment secondary style={{ verticalAlign: 'bottom' }}>
                <div style={{ textAlign: 'center' }}>
                  <Header size="huge" content="Micro" />
                  <Header size="large" content="50GB/Month" />
                  <p>of transfer quota</p>
                  <Divider horizontal style={{ marginTop: '3em' }}>
                    Quota equivalent to*
                  </Divider>
                  <p>Raw data for a month</p>
                  <Divider horizontal>
                    Best for
                  </Divider>
                  <p>Individuals who want high precision historical market data</p>
                  <p style={{ fontSize: '2em' }}>$45/Month</p>
                  <Button secondary>Choose</Button>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised style={{ verticalAlign: 'bottom' }}>
                <Label color='red' ribbon content="Recommended" />
                <div style={{ textAlign: 'center' }}>
                  <Header size="huge" content="Small" />
                  <Header size="large" content="100GB/Month" />
                  <p>of transfer quota</p>
                  <Divider horizontal style={{ marginTop: '3em' }}>
                    Quota equivalent to*
                  </Divider>
                  <p>Raw data for a month</p>
                  <Divider horizontal>
                    Best for
                  </Divider>
                  <p>Individuals who want high precision historical market data</p>
                  <p style={{ fontSize: '2em' }}>$9/Month</p>
                  <Button primary>Choose</Button>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment style={{ verticalAlign: 'bottom' }}>
                <div style={{ textAlign: 'center' }}>
                  <Header size="huge" content="Nano" />
                  <Header size="large" content="200GB/Month" />
                  <p>of transfer quota</p>
                  <Divider horizontal style={{ marginTop: '3em' }}>
                    Quota equivalent to*
                  </Divider>
                  <p>Raw data for a month</p>
                  <Divider horizontal>
                    Best for
                  </Divider>
                  <p>Individuals who want high precision historical market data</p>
                  <p style={{ fontSize: '2em' }}>$30/Month</p>
                  <Button secondary>Choose</Button>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        *This figure may varies with different exchange and frequency of trading.
      </Container>
      <Container text textAlign="center">
        <p className="bigger-text">
          Our price structure is best for small businesses and individuals
          who only needs small amount of data periodically,
          and flexible for customers running big businesses.
        </p>
        <p className="bigger-text">
          All plan has access to all data as long as you don't run out of quota.
        </p>
      </Container>
    </div>
  );
};
