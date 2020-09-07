import React from "react";
import { Step, Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

export default function OrderStep() {
  const { t } = useTranslation();
  return (
    <Step.Group>
      <Step>
        <Icon name='mail' />
        <Step.Content>
          <Step.Title>{t('order.step.1.title')}</Step.Title>
          <Step.Description>{t('order.step.1.detail')}</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name='credit card' />
        <Step.Content>
          <Step.Title>{t('order.step.2.title')}</Step.Title>
          <Step.Description>{t('order.step.2.detail')}</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name='cart' />
        <Step.Content>
          <Step.Title>{t('order.step.3.title')}</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}