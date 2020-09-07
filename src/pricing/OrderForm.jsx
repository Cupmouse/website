import React, { useState } from 'react';
import { Message, Form, Segment } from 'semantic-ui-react';
import { CardElement } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

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
          <label>Total</label>
          <p>${price.toFixed(PRICING_MAX_PREC)}</p>
        </Form.Field>
        <Form.Field>
          <label>Quota</label>
          <p>{quota}GB</p>
        </Form.Field>
      </Form.Group>
      <Form.Input
        label="Email Address"
        type="email"
        placeholder={t('order.email.placeholder')}
        error={!emailOK}
        value={email}
        onChange={handleChange}
      />
      <p>{t('order.email.detail')}</p>
      <Form.Field error={cardError}>
        <label>Credit Card Information</label>
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
        <label>Terms of Services</label>
        <p>Please read our <a href={AGREEMENT_URL}>Terms of Services</a> before the purchase.</p>
        <Form.Checkbox label="I have read and agree to the Terms of Services." checked={termsChecked} onChange={handleTermChange} />
      </Form.Field>
      <Message
        error
        icon="cogs"
        header="The purchase has not been completed"
        content={error}
      />
      <Form.Button
        primary
        icon='cart'
        size="large"
        content={t('order.email.proceed')}
        disabled={!canProceed}
        onClick={openConfirmModal}
      />
    </Form>
  );
}
