import React from 'react';
import { Component } from 'react';
import { Placeholder, Grid, List, Header, Icon } from 'semantic-ui-react';
import Runkit from 'react-runkit';
import classNames from 'classnames';

const sources = [
  {
    name: "Stream Bitmex 'XBTUSD' orderbook from 2020-1-1",
    source: `const { createClient, LineType } = require('exchangedataset-node');

const client = createClient({
  apikey: "demo"
});
    
const stream = async () => {
  const req = client.replay()
    .bitmex(["orderBookL2_XBTUSD"])
    .start("2020/1/1 00:00:00Z")
    .end("2020/1/1 00:01:00Z")
    .build();

  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
  },
  {
    name: "Stream Bitflyer 'FX_BTC_USD' orderbook from 2020-1-1",
    source: `const { createClient, LineType } = require('exchangedataset-node');

const client = createClient({
  apikey: "demo"
});
    
const stream = async () => {
  const req = client.replay()
    .bitflyer([
      "lightning_board_FX_BTC_JPY",
      "lightning_board_snapshot_FX_BTC_JPY"
    ])
    .start("2020/1/1 00:00:00Z")
    .end("2020/1/1 00:01:00Z")
    .build();

  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
  },
  {
    name: "Stream Bitmex 'XBTUSD' trade and Bitflyer 'FX_BTC_JPY' executions from 2020-1-1",
    source: `const { createClient, replay, LineType } = require('exchangedataset-node');

const client = createClient({
  apikey: "demo"
});

const stream = async () => {
  const req = client.replay()
    .bitmex(
      replay.bitmex()
        .trade(["XBTUSD"])
        .build()
    )
    .bitflyer(
      replay.bitflyer()
        .executions(["FX_BTC_JPY"])
        .build()
    )
    .start("2020/1/1 00:30:00Z")
    .end("2020/1/1 00:31:00Z")
    .build();

  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
  },
]

export default class PlayGround extends Component {
  state = {
    loading: true,
    selected: 0,
  };

  onSourceChange = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    return (
      <Grid container stackable columns={2} {...this.props}>
        <Grid.Column textAlign="right">
          <div style={{ textAlign: "center" }}>
            <Header size="huge">
              <Icon name="terminal" />
              Test our API
            </Header>
          </div>
          <List id="test-api-list">
            {
              sources.map((obj, i) => (
                <List.Item
                  key={i}
                  className={classNames({
                    "normal-text": true,
                    "selected-item": selected === i
                  })}
                  onClick={() => this.onSourceChange(i)}
                >
                  {obj.name}
                </List.Item>
              ))
            }
          </List>
        </Grid.Column>
        <Grid.Column>
          {
            this.state.loading ? (
              <Placeholder style={{ height: "400px", margin: "0 auto" }}>
                <Placeholder.Image />
              </Placeholder>
            ) : ""
          }
          <Runkit
            minHeight="400px"
            source={sources[selected].source}
            nodeVersion="13"
            onLoad={() => this.setState({ loading: false })}
          />
        </Grid.Column>
      </Grid>
    );
  }
};
