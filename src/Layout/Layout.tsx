import React from "react";
import { Button } from "../Components/Button";
import { CardFormContainer } from "../Components/CardForm/cardFormContainer";
import { Modal } from "../Components/Modal";
import { modalStore } from "../Components/Modal/modalStore";
import "./style.css";

export const Layout: React.FC = ({ children }) => {
  const { setIsOpen } = modalStore;

  return (
    <div className="container">
      <div className="header">
        <Button onClick={setIsOpen(true)} color="primary" size="small">
          Add New
        </Button>
      </div>
      <div>{children}</div>
      <Modal modalClass="modalContent">
        <CardFormContainer />
      </Modal>
    </div>
  );
};
