import React, { useState } from 'react';
import { Placeholder, Grid, List, Header, Icon, Container } from 'semantic-ui-react';
import Runkit from 'react-runkit';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function PlayGround(props) {
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(0)
  const { t } = useTranslation()

  const sources = [
    {
      name: t('demo.1.title'),
      source: `const { createClient } = require('exchangedataset-node');
  
const client = createClient({
  apikey: "demo"
});
    
const stream = async () => {
  const req = client.replay({
    filter: {
      bitmex: ['orderBookL2_XBTUSD'],
    },
    start: '2020/1/1 00:00:00Z',
    end: '2020/1/1 00:01:00Z',
  });

  // ${t('demo.1.comment')}
  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
  },
  {
    name: t('demo.2.title'),
    source: `const { createClient } = require('exchangedataset-node');

const client = createClient({
  apikey: "demo"
});
    
const stream = async () => {
  const req = client.replay({
    filter: {
      bitflyer: [
        'lightning_board_FX_BTC_JPY',
        'lightning_board_snapshot_FX_BTC_JPY',
      ],
    },
    start: '2020/1/1 00:00:00Z',
    end: '2020/1/1 00:01:00Z',
  });

  // ${t('demo.2.comment')}
  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
  },
  {
    name: t('demo.3.title'),
    source: `const { createClient, replay } = require('exchangedataset-node');

const client = createClient({
  apikey: "demo"
});

const stream = async () => {
  const req = client.replay({
    filter: {
      bitmex: ['trade_XBTUSD'],
      bitflyer: ['lightning_executions_FX_BTC_JPY'],
    },
    start: '2020/1/1 00:0:00Z',
    end: '2020/1/1 00:01:00Z',
  });

  // ${t('demo.3.comment')}
  for await (const line of req.stream()) {
    console.log(line);
  }
}

stream()`,
    },
  ]
  
  return (
    <Container {...props}>
      <Header size="large" textAlign="center" icon="terminal" />
      <Header size="large" textAlign="center" content={t('demo.title')} />
      <Container fluid text textAlign="center">
        <p>{t('demo.detail.1')}</p>
        <p>{t('demo.detail.2')}</p>
      </Container>
      <Grid stackable columns={2}>
        <Grid.Column textAlign="right">
          <div style={{ textAlign: "center" }}>
          </div>
          <List id="test-api-list">
            {
              sources.map((obj, i) => (
                <List.Item
                  key={i}
                  className={classNames({
                    "normal-text": true,
                    "selected-item": selected === i,
                  })}
                  onClick={() => setSelected(i)}
                >
                  {obj.name}
                </List.Item>
              ))
            }
          </List>
        </Grid.Column>
        <Grid.Column>
          {
            loading ? (
              <Placeholder style={{ height: "400px", margin: "0 auto" }}>
                <Placeholder.Image />
              </Placeholder>
            ) : ""
          }
          <Runkit
            minHeight="400px"
            source={sources[selected].source}
            nodeVersion="13"
            onLoad={() => setLoading(false)}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
