import React from "react";
import { Button } from "../Components/Button";
import { Modal } from "../Components/Modal";
import { useModalStore } from "../Components/Modal/state/modalContext";
import "./style.css";

export const Layout: React.FC = ({ children }) => {
  const modalStore = useModalStore();

  return (
    <div className="container">
      <div className="header">
        <Button
          onClick={modalStore.setIsOpen(true)}
          color="primary"
          size="small"
        >
          Add New
        </Button>
      </div>
      <div>{children}</div>
      <Modal />
    </div>
  );
};
