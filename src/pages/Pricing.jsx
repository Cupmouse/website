import React from 'react';
import { Container, Table } from 'semantic-ui-react';

export default function Pricing() {
  return (
    <div style={{ margin: '4em 0' }}>
      <Container text textAlign="center">
      </Container>
      <Container text textAlign="center">
        <p className="bigger-text">
          Our price structure is based on "Tickets" which is similar to prepaid card and has "Quota" and "Expiry Date".
        </p>
        <p className="bigger-text">
          Quota is consumed by the amount of data transferred or scanned by calling our API.
        </p>
        <p className="bigger-text">
          In terms of transferred amount, even if a response is compressed, it will always be calculated based on the raw data size.
        </p>
        <p className="bigger-text">
          Once you buy tickets, it will be attached to your API-key and you can immidiately interact with our API.
        </p>
        <p className="bigger-text">
          All tickets will expire in 30 days (a month) including the day of purchase.
        </p>
      </Container>
      <Container style={{ margin: '2em 0' }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Class</Table.HeaderCell>
              <Table.HeaderCell>Price Per GB</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>0 to 10GB</Table.Cell>
              <Table.Cell>$1.5</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>10 to 50GB</Table.Cell>
              <Table.Cell>$1.4</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>50 to 100GB</Table.Cell>
              <Table.Cell>$1.35</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>More than 100GB</Table.Cell>
              <Table.Cell>$1.3</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};
