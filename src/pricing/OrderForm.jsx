import React, { useState } from 'react';
import { Message, Form, Segment } from 'semantic-ui-react';
import { CardElement } from '@stripe/react-stripe-js';
import { useTranslation, Trans } from 'react-i18next';

import { calcPrice, AGREEMENT_URL, EMAIL_REGEX, PRICING_MAX_PREC } from '../constants';

export default function OrderForm({ quota, email, setEmail, setCreditOK, canProceed, openConfirmModal, error }) {
  const [cardError, setCardError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const { t } = useTranslation();

  const handleTermChange = (_, { checked }) => setTermsChecked(checked);
  const handleChange = (_, { value }) => setEmail(value);

  const emailOK = EMAIL_REGEX.test(email);
  canProceed = canProceed && termsChecked;
  const price = calcPrice(quota);

  return (
    <Form error={error !== null}>
      <Form.Group widths="equal">
        <Form.Field>
          <label>{t('order.total')}</label>
          <p>${price.toFixed(PRICING_MAX_PREC)}</p>
        </Form.Field>
        <Form.Field>
          <label>{t('order.quota')}</label>
          <p>{quota}GB</p>
        </Form.Field>
      </Form.Group>
      <Form.Input
        label={t('order.email.label')}
        type="email"
        placeholder={t('order.email.placeholder')}
        error={!emailOK}
        value={email}
        onChange={handleChange}
      />
      <p>{t('order.email.detail')}</p>
      <Form.Field error={cardError}>
        <label>{t('order.credit.title')}</label>
        <Segment>
          <CardElement
            onChange={(e) => {
              setCardError(!!e.error);
              setCreditOK(e.complete);
            }}
          />
        </Segment>
      </Form.Field>
      <Form.Field>
        <label>{t('order.terms.title')}</label>
        <p><Trans i18nKey="order.terms.detail">pre<a href={AGREEMENT_URL}>inner</a>after</Trans></p>
        <Form.Checkbox label={t('order.terms.label')} checked={termsChecked} onChange={handleTermChange} />
      </Form.Field>
      <Message
        error
        icon="cogs"
        header={t('order.error.title')}
        content={error}
      />
      <Form.Button
        primary
        icon='cart'
        size="large"
        content={t('order.proceed')}
        disabled={!canProceed}
        onClick={openConfirmModal}
      />
    </Form>
  );
}
