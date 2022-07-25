import React from 'react';
import { Modal, Button } from "react-bootstrap";
import Translate from './translate';

const DeleteConfirmationModal = ({ showModal, hideModal, confirmModal, message, id }) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Translate id="delete.confirmation.modal.header" />
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">
          <Translate id="delete.confirmation.modal.body" message={message} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => confirmModal(id)}>
          <Translate id="buttons.delete.label" />
        </Button>
        <Button variant="default" onClick={hideModal}>
          <Translate id="buttons.cancel.label" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
