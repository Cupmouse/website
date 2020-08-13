import React from "react"
import PropTypes from "prop-types"
import { Table, Icon } from "semantic-ui-react";

const dataSizes = [
  {
    exchange: "Bitmex",
    channel: "trade",
    minuteSize: 1.95087412269e-05,
    time: 70689,
  },
  {
    exchange: "Bitfinex",
    channel: "trades_tBTCUSD",
    minuteSize: 4.77597997006e-06,
    time: 58017,
  },
  {
    exchange: "Bitflyer",
    channel: "executions_FX_BTC_JPY",
    minuteSize: 0.000159854990327,
    time: 332546,
  },
  {
    exchange: "Bitmex",
    channel: "orderBookL2",
    minuteSize: 0.00261229901064,
  },
  {
    exchange: "Bitfinex",
    channel: "book_tBTCUSD",
    minuteSize: 0.000956595562618,
    time: 200524,
  },
  {
    exchange: "Bitflyer",
    channel: "board_FX_BTC_JPY",
    minuteSize: 0.0012000080654,
    time: 498695,
  },
]

export default function QuotaDetail(props) {
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Exchange</Table.HeaderCell>
            <Table.HeaderCell>Channel</Table.HeaderCell>
            <Table.HeaderCell>Estimated days of formatted data you can fetch*</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            dataSizes.map((exa) => {
              const days = props.quota / exa.minuteSize / 60 / 24;
              return (
                <Table.Row key={exa.exchange+exa.channel}>
                  <Table.Cell>{exa.exchange}</Table.Cell>
                  <Table.Cell>{exa.channel}</Table.Cell>
                  <Table.Cell warning={days < 36} positive={days >= 36}>
                    {days >= 36 ? <Icon name="check" /> : ""}
                    {days.toFixed(2)} days**
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
      <p style={{ textAlign: 'right' }}>*This is a estimate based on the size of sample datasets. The actual figure may vary.</p>
      <p style={{ textAlign: 'right' }}>**If you used all quota on this single channel by fetching data from the filter endpoint with "json" format.</p>
    </div>
  )
}

QuotaDetail.propTypes = {
  quota: PropTypes.number.isRequired,
}
