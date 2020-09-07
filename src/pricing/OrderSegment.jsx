import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { Segment, Message } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import OrderStep from './OrderStep';
import OrderForm from './OrderForm';
import ConfirmModal from './ConfirmModal';
import { EMAIL_REGEX, calcPrice, PRICING_MAX_PREC } from '../constants';
import { purchase } from '../apicall';

export default function OrderSegment({ quota }) {
  const [email, setEmail] = useState("simaoka@tutanota.com");
  const [creditOK, setCreditOK] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [purchaseOnGoing, setPurchaseOnGoing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();

  const onConfirmationCancel = () => setConfirmModalOpen(false);
  const onConfirmationOK = () => {
    const onPurchaseComplete = () => {
      setPurchaseOnGoing(false);
      setPurchaseComplete(true);
      const price = calcPrice();
      ReactGA.event({
        category: "purchase",
        action: "purchase",
        label: "purchase",
        value: price.toFixed(PRICING_MAX_PREC),
      });
    };
    const onPurchaseFailed = (err) => {
      setPurchaseOnGoing(false);
      setError(err);
    };

    setConfirmModalOpen(false);
    setPurchaseOnGoing(true);
    // this is async function
    purchase(
      stripe,
      elements.getElement(CardElement),
      email,
      quota,
    ).then((successful) => {
      if (successful) {
        onPurchaseComplete();
      } else {
        onPurchaseFailed("Failed, but details are unknown")
      }
    }).catch((err) => {
      onPurchaseFailed(err.toString());
    });
  };

  const priceStr = calcPrice(quota).toFixed(2);
  const quotaEmailOK = quota !== 0 && EMAIL_REGEX.test(email);
  const canProceed = quotaEmailOK && (stripe && elements) && creditOK;

  return (
    <>
      <OrderStep
        size="small"
        attached
        fluid
        emailCompleted={quotaEmailOK}
        creditCompleted={creditOK}
        purchaseCompleted={purchaseComplete}
      />
      <Segment attached padded loading={purchaseOnGoing}>
        <OrderForm
          quota={quota}
          email={email}
          setEmail={setEmail}
          setCreditOK={setCreditOK}
          canProceed={canProceed}
          openConfirmModal={() => setConfirmModalOpen(true)}
          error={error}
        />
        <Message
          positive
          icon="checkmark"
          header={t('order.paymentsuccess.title')}
          content={t('order.paymentsuccess.detail')}
          hidden={!purchaseComplete}
        />
        <ConfirmModal
          priceStr={priceStr}
          open={confirmModalOpen}
          onCancel={onConfirmationCancel}
          onOK={onConfirmationOK}
        />
      </Segment>
    </>
  )
}