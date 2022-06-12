import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'semantic-ui-react';

import { PRICING } from '../constants';

export default function (props) {
  const { t } = useTranslation();

  return (
    <Table celled {...props}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t('pricedetail.class')}</Table.HeaderCell>
          <Table.HeaderCell>{t('pricedetail.pricepergb')}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          PRICING.map((e, classIndex) => {
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
            const classPrice = PRICING[classIndex].price;

            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>${classPrice}</Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
    </Table>
  )
}
