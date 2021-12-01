import { observer } from "mobx-react-lite";
import React from "react";
import ReactModal from "react-modal";
import { modalStore } from "./modalStore";
import "./style.css";

ReactModal.setAppElement("#root");

interface ModalProps {
  modalClass: string;
}

export const Modal: React.FC<ModalProps> = observer(
  ({ modalClass, children }) => {
    const { isOpen, setIsOpen } = modalStore;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={setIsOpen(false)}
        className={`Modal ${modalClass}`}
        overlayClassName="Overlay"
      >
        {children}
      </ReactModal>
    );
  }
);
