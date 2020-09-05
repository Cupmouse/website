import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function BriefDetail(props) {
  const { t } = useTranslation();
  
  return (
    <Container text textAlign="center" {...props}>
      <Header content={t('briefdetail.title')} />
      <p>{t('briefdetail.1')}</p>
      <p>{t('briefdetail.2')}</p>
    </Container>
  );
};
