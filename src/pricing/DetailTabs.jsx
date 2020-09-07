import React from 'react';
import { Tab, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import QuotaDetail from './QuotaDetail';
import PriceDetail from './PriceDetail';
import { calcPrice, PRICING_MAX_PREC } from '../constants';

export default function DetailTabs({ quota }) {
  const { t } = useTranslation();
  const price = calcPrice(quota);

  const tabPanes = [
    {
      menuItem: t('order.tabpane.pricedetail'), render: () => (
        <Tab.Pane>
          <p style={{ fontSize: "3em" }} >
            ${price.toFixed(PRICING_MAX_PREC)} {t('order.tabpane.permonth')}
          </p>
          <Header content={t('order.tabpane.pricedetail')} />
          <PriceDetail quota={quota} />
        </Tab.Pane>
      )
    },
    {
      menuItem: t('order.tabpane.transferestimate'), render: () => (
        <Tab.Pane>
          <Header content={t('order.tabpane.transferestimate')} />
          <QuotaDetail quota={quota} />
        </Tab.Pane>
      )
    },
  ]
  return (
    <Tab panes={tabPanes} />
  )
}
