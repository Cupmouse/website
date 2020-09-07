import React from "react"
import PropTypes from 'prop-types'
import { Table } from "semantic-ui-react"
import { calcPrice, PRICING } from "../constants";

export default function PriceDetail(props) {
  const { quota } = props;
  const prices = calcPrice(quota);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Price/GB</Table.HeaderCell>
          <Table.HeaderCell>Applied</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          prices.map((price, classIndex) => {
            let name;
            if (classIndex === 0) {
              name = `First ${PRICING[classIndex].end}GB`;
            } else if (classIndex === PRICING.length - 1) {
              name = `From ${PRICING[classIndex - 1].end + 1}GB`;
            } else {
              name = `${PRICING[classIndex - 1].end + 1}GB to ${PRICING[classIndex].end}GB`;
            }
            const classPrice = PRICING[classIndex].price;

            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>${classPrice}</Table.Cell>
                <Table.Cell>${price}</Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={4}>Total: ${prices.reduce((p, c) => p + c)}</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

PriceDetail.propTypes = {
  quota: PropTypes.number.isRequired,
}
