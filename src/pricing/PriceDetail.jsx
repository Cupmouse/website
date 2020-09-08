import React from "react"
import PropTypes from 'prop-types'
import { Table } from "semantic-ui-react"
import { PRICING, calcPriceDetail, PRICING_MAX_PREC, calcPrice } from "../constants";
import { useTranslation } from "react-i18next";

export default function PriceDetail(props) {
  const { t } = useTranslation();

  const { quota } = props;
  const prices = calcPriceDetail(quota);
  const price = calcPrice(quota).toFixed(PRICING_MAX_PREC);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t('pricedetail.class')}</Table.HeaderCell>
          <Table.HeaderCell>{t('pricedetail.pricepergb')}</Table.HeaderCell>
          <Table.HeaderCell>{t('pricedetail.applied')}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          prices.map((price, classIndex) => {
            let name;
            if (classIndex === 0) {
              name = t('pricedetail.first', { start: PRICING[classIndex].end });
            } else if (classIndex === PRICING.length - 1) {
              name = t('pricedetail.from', { end: PRICING[classIndex - 1].end });
            } else {
              name = t('pricedetail.to', {
                start: PRICING[classIndex - 1].end + 1,
                end: PRICING[classIndex].end,
              });
            }
            const classPrice = PRICING[classIndex].price.toFixed(PRICING_MAX_PREC);

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
          <Table.HeaderCell colSpan={4}>{t('pricedetail.total', { total: price })}</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

PriceDetail.propTypes = {
  quota: PropTypes.number.isRequired,
}
