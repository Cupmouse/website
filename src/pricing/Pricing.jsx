import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import OrderForm from "./OrderForm";
import Suggested from './Suggested';
import QuotaInput from './QuotaInput';
import QAA from './QAA';
import OrderStep from './OrderStep';

export default function () {
  const { t } = useTranslation();

  return (
    <>
      <Container style={{ padding: "2em 0" }}>
        <Header size="huge" content={t('price.suggestions.title')} />
        <Suggested />
      </Container>
      <Container text style={{ padding: "2em 0" }}>
        <QAA />
      </Container>
      <Container textAlign="center" style={{ padding: "2em 0" }}>
        <Header size="large" content={t('price.pickquota.title')} />
        <p>Type in how much quota you need in GB. We recommend you to have a little margin.</p>
        <QuotaInput />
      </Container>
      <Container>
        <Header size="huge" content={t('order.title')} />
        <OrderStep />
        <OrderForm />
      </Container>
    </>
  )
}
