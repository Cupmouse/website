import React from 'react';
import { Tab, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import QuotaDetail from './QuotaDetail';
import PriceDetail from './PriceDetail';

export default function DetailTabs() {
  const { t } = useTranslation();

  const tabPanes = [
    {
      menuItem: t('order.tabpane.pricedetail'), render: () => (
        <Tab.Pane>
          <p style={{ fontSize: "3em" }} >
            ${price.toFixed(2)} {t('order.tabpane.permonth')}
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
