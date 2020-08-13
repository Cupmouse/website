import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const list = [
  [
    {
      title: "Full Access To Everyone",
      content: "Do not pay expensive yearly payment to get full access, you always get the full access to our service.",
    },
    {
      title: "Pay For Transfer",
      content: "Best for individuals and small business owners, flexible for customers running big businesses.",
    },
    {
      title: "High Avaiablility",
      content: "Amazon Web Service on which our service is based, helps running our service 24/7.",
    },
  ],
  [
    {
      title: "Server Side Formatting",
      content: "Standard formatting is done in server side, reducing client work load.",
    },
    {
      title: "Fast Snapshot",
      content: "Some channels needs a initial state. We provide the special endpoint to get a snapshot in ~10sec.",
    },
    {
      title: "Quick Data Avaiablility",
      content: "It takes 1-2 minutes for historical data to be available for query.",
    },
  ],
  [
    {
      title: "Formatted Data",
      content: "We provide formatted data for orderbook and trade channels.",
    },
    {
      title: "Raw Data",
      content: "We also provide raw WebSocket data native to exchanges including a partial support for a snapshot.",
    },
    {
      title: "Cut Fixed Cost",
      content: "Our service eliminates initial consts and cuts the fixed costs for maintenance.",
    },
  ],
]

export default function Machinegun() {
  return (
    <Container style={{ padding: '2em 0' }}>
      <Grid columns={3} stackable>
        {
          list.map((row, i) => (
            <Grid.Row key={i}>
              {row.map((col, j) => (
                <Grid.Column key={j}>
                  <p className="bigger-text">
                    <b>{col.title}</b>
                    {" "}-{" "}
                    {col.content}
                  </p>
                </Grid.Column>
              ))}
            </Grid.Row>
          ))
        }
      </Grid>
    </Container>
  );
};
