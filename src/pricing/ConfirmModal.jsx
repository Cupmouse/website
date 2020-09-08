import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function ConfirmModal({ priceStr, open, onOK, onCancel }) {
  const { t } = useTranslation();
  
  return (
    <Modal open={open} >
      <Modal.Header content={t('order.confirmmodal.title')} />
      <Modal.Content>
        <p>{t('order.confirmmodal.detail.1', { total: priceStr })}</p>
        <p style={{ fontWeight: 'bold' }}>{t('order.confirmmodal.detail.2')}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          primary
          content={t('order.confirmmodal.confirm')}
          onClick={onOK}
        />
        <Button
          content={t('order.confirmmodal.cancel')}
          onClick={onCancel}
        />
      </Modal.Actions>
    </Modal>
  );
}

