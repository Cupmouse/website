import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <>
      <Title />

      <Container text style={{ padding: "0 0 2em 0" }} >
        <BriefDetail />
      </Container>

      <Container style={{ padding: "2em 0" }}>
        <Statistics />
      </Container>

      <Container fluid textAlign="center" style={{ padding: '6em 0' }}>
        <Header size="large" icon="terminal" />
        <Header size="large" content={t('demo.title')} />
        <Container text>
          <p>{t('demo.detail.1')}</p>
          <p>{t('demo.detail.2')}</p>
        </Container>
        <Container>
          <PlayGround />
        </Container>
      </Container>

      <Container id="features" fluid style={{ padding: '6em 0' }} >
        <Container>
          <Features />
        </Container>
      </Container>

      <Container id="exchanges" fluid textAlign="center" style={{ padding: '4em 0' }}>
        <Header size="large" content={t('exchanges.title')} />
        <Container text>
          <p>{t('exchanges.detail')}</p>
        </Container>
        <Container>
          <Exchanges />
        </Container>
      </Container>

      <Container id="libraries" text textAlign="center" style={{ padding: '4em 0' }}>
        <Header size="large" content={t('supported.title')} />
        <Container text>
          <p>{t('supported.detail')}</p>
        </Container>
        <Supported />
      </Container>

      <Container fluid style={{ padding: '2em 0' }}>
        <Divider horizontal><Header size="huge" content={t('machinegun.title')} /></Divider>
        <Container>
          <Machinegun style={{ padding: '2em 0' }} />
        </Container>
      </Container>

      <Container id="contactus" fluid style={{ padding: '20vh 0 20vh 0' }} >
        <Container text>
          <Contact />
        </Container>
      </Container>
    </>
  );
};
