import React from 'react';
import { Header, Divider } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import PlayGround from './PlayGround';
import Statistics from './Statistics';
import Features from './Features';
import Supported from './Supported';
import Machinegun from './Machinegun';
import OrderForm from './OrderForm';
import Exchanges from './Exchanges';
import Title from './Title';

export default function HomePage() {
  const { t } = useTranslation()
  
  return (
    <div>
      <Title />
      <Statistics style={{ padding: "6em 0" }} />
      <PlayGround style={{ padding: '6em 0' }} />
      <Features style={{ padding: '6em 0' }} />
      <Exchanges style={{ padding: '2em 0' }} />
      <Supported style={{ padding: '2em 0' }} />
      <div style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content={t('machinegun.title')} /></Divider>
        <Machinegun />
      </div>
      <OrderForm style={{ padding: '2em 0 1vh 0' }} />
    </div>
  );
};
