import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Modal, Table, Button } from "semantic-ui-react"
import { calcPrice, PRICING } from "./constants";

export default class PriceDetail extends Component {
  getTable(prices) {
    return (
      <Table.Body>
        {prices.map((price, classIndex) => {
          let name;
          if (classIndex === 0) {
            name = `First ${PRICING[classIndex].end}GB`;
          } else if (classIndex === PRICING.length - 1) {
            name = `From ${PRICING[classIndex - 1].end+1}GB`;
          } else {
            name = `${PRICING[classIndex - 1].end+1}GB to ${PRICING[classIndex].end}GB`;
          }
          const classPrice = PRICING[classIndex].price;

          return (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>${classPrice}</Table.Cell>
              <Table.Cell>${price}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    )
  }

  render() {
    const { open, quota, onCloseButton } = this.props;
    const prices = calcPrice(quota);
    
    return (
      <Modal open={open}>
        <Modal.Header>Price Detail</Modal.Header>
        <Modal.Content>
          <p>
            Our price structure is based on "Tickets" which is similar to prepaid card and has "Quota" and "Expiry Date".
          </p>
          <p>
            Quota is the balance of ticket which is consumed by the amount of data transferred or scanned by calling our API depending on endpoint.
          </p>
          <p>
            Transferred amount is always calculated based on the raw data size even if the response is compressed.
          </p>
          <p>
            Once you buy tickets, it will be attached to your API-key and you can immidiately interact with our API.
          </p>
          <p>
            All tickets will expire in 30 days (a month) including the day of purchase.
          </p>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Class</Table.HeaderCell>
                <Table.HeaderCell>Price/GB</Table.HeaderCell>
                <Table.HeaderCell>Applied</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.getTable(prices)}
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan={4}>Total: ${prices.reduce((p, c) => p+c)}</Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={onCloseButton}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

PriceDetail.propTypes = {
  quota: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  onCloseButton: PropTypes.func.isRequired,
}
