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
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Price/GB</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          PRICING.map((e, classIndex) => {
            let name;
            if (classIndex === 0) {
              name = `First ${e.end}GB`;
            } else if (classIndex === PRICING.length - 1) {
              name = `From ${PRICING[classIndex - 1].end + 1}GB`;
            } else {
              name = `${PRICING[classIndex - 1].end + 1}GB to ${e.end}GB`;
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
