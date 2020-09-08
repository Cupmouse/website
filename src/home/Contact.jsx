import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { SUPPORT_EMAIL } from '../constants';

export default function Contact(props) {
  const { t } = useTranslation();
 
  return (
    <Segment piled textAlign="center" {...props}>
      <Header content={t('contactus.title')} />
      <p>{t('contactus.1')}</p>
      <p>{t('contactus.2')}</p>
      <Button primary as="a" href={SUPPORT_EMAIL} content="Contact Us" />
    </Segment>
  )
}