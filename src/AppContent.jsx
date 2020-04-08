import React from 'react';
import { Header, Divider } from 'semantic-ui-react';

import Pricing from './Pricing';
import Statistics from './Statistics';
import Features from './Features';
import Supports from './Supports';

export default function AppContent() {
  return (
    <div>
      <Statistics />
      <Divider horizontal><Header size="huge" content="Features" /></Divider>
      <Features />
      <Divider horizontal><Header size="huge" content="Supported Platform/Language" /></Divider>
      <Supports />
      <Divider horizontal style={{ marginTop: '5em' }}><Header size="huge" content="Pricing" /></Divider>
      <Pricing />
    </div>
  );
};
