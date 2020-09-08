import React from 'react';
import { Container } from 'semantic-ui-react';

import PlayGround from './PlayGround';
import Statistics from './Statistics';
import Features from './Features';
import Supported from './Supported';
import Machinegun from './Machinegun';
import Exchanges from './Exchanges';
import Title from './Title';
import BriefDetail from './BriefDetail';
import Contact from './Contact';

export default function HomePage() {
  return (
    <>
      <Title />
      <Container text style={{ padding: "0 0 2em 0" }} >
        <BriefDetail />
      </Container>
      <Container style={{ padding: "2em 0" }}>
        <Statistics />
      </Container>
      <PlayGround style={{ padding: '6em 0' }} />
      <Features style={{ padding: '6em 0' }} />
      <Exchanges id="exchanges" style={{ padding: '4em 0' }} />
      <Supported style={{ padding: '4em 0' }} />
      <Machinegun style={{ padding: '2em 0' }} />
      <Container text style={{ padding: '20vh 0 20vh 0' }} >
        <Contact />
      </Container>
    </>
  );
};
