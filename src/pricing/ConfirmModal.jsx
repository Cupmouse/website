import React from 'react'
import { Modal, Button } from 'semantic-ui-react';

export default function ConfirmModal({ priceStr, open, onOK, onCancel }) {
  return (
    <Modal open={open} >
      <Modal.Header content="Confirm Payment?" />
      <Modal.Content>
        <p>You are about to confirm the payment of ${priceStr}.</p>
        <p style={{ fontWeight: 'bold' }}>Payment procedure will immidiately start and can not be cancelled. Please note that we don't accept any cancels or refunds.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          primary
          content="Confirm Payment"
          onClick={onOK}
        />
        <Button
          content="Cancel"
          onClick={onCancel}
        />
      </Modal.Actions>
    </Modal>
  );
}

