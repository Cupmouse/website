import React from 'react';
import { Container, Header, Label, Divider, Button, Table } from 'semantic-ui-react';

// function getTable() {
//   return (
//     <Table fixed celled>
//       <Table.Body>
//         <Table.Row>
//           {plans.map((plan) => 
//             <Table.Cell>{plan.recommended ? <Label color='red' content="Recommended" /> : ""}</Table.Cell>
//           )}
//         </Table.Row>
//         <Table.Row>
//           {plans.map((plan) => 
//             <Table.Cell>
//               <Header style={{ marginBottom: '1em' }} size="huge" content="Nano" />
//               <p><span style={{ fontSize: '2em' }}>{plan.quota}GB</span>/month</p>
//               <p>of transfer quota</p>
//             </Table.Cell>
//           )}
//         </Table.Row>
//       </Table.Body>
//     </Table>
//   )
// }

export default function PriceTable() {
  return (
    <div style={{ margin: '4em 0' }}>
      <Container text textAlign="center">
        <p className="bigger-text">
          All plan has access to all data as long as you don't run out of quota.
        </p>
      </Container>
      <Container style={{ margin: '2em 0' }}>
        {/* {getTable()} */}
        <Table fixed celled>
          <Table.Body>
            <Table.Row textAlign="center">
              <Table.Cell>
                <Divider horizontal content="Quota equivalent to*" />
                <p>3 weeks of all raw trading data of a single exchange</p>
                <p>or</p>
                <p>L2 orderbook data of a single exchange</p>
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
                <p><span style={{ fontSize: '2em' }}>$15</span>/month**</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$60</span>/month**</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$220</span>/month**</p>
                <Button primary>Choose</Button>
              </Table.Cell>
              <Table.Cell>
                <p><span style={{ fontSize: '2em' }}>$400</span>/month**</p>
                <Button secondary>Choose</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <p>*This figure may varies with different exchange and frequency of trading etc.</p>
          <p>**VAT will be applied if you live in Japan.</p>
        </div>
      </Container>
      <Container text textAlign="center">
        <Header size="huge" content="Needs More Quota?" />
        If you need more quota, please contact us.
      </Container>
    </div>
  );
};
