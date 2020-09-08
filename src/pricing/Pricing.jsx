import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import Suggested from './Suggested';
import QuotaInput from './QuotaInput';
import QAA from './QAA';
import DetailTabs from './DetailTabs';
import OrderSegment from './OrderSegment';

export default function Pricing() {
  const { t } = useTranslation();
  const [quota, setQuota] = useState(1);

  return (
    <>
      <Container style={{ padding: "2em 0" }}>
        <Header size="huge" content={t('price.suggestions.title')} />
        <Suggested quotaSetter={setQuota} />
      </Container>
      <Container fluid className="gray-background" style={{ padding: "2em 0" }}>
        <Container text>
          <QAA />
        </Container>
      </Container>
      <Container textAlign="center" style={{ padding: "2em 0 3em 0" }}>
        <Header size="large" content={t('price.pickquota.title')} />
        <p>{t('price.pickquota.detail')}</p>
        <QuotaInput quota={quota} quotaSetter={setQuota} />
        <DetailTabs quota={quota} />
      </Container>
      <Container text style={{ padding: "3em 0 30vh 0" }}>
        <Header size="huge" textAlign="center" content={t('order.title')} />
        <OrderSegment quota={quota} />
      </Container>
    </>
  )
}
