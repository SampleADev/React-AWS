import { useObserver } from "mobx-react-lite";
import React from "react";
import ReactModal from "react-modal";
import { useModalStore } from "./state/modalContext";
import "./style.css";

ReactModal.setAppElement("#root");

interface ModalProps {
  modalClass: string;
}

export const Modal: React.FC<ModalProps> = ({ modalClass, children }) => {
  const modalStore = useModalStore();
  return useObserver(() => (
    <ReactModal
      isOpen={modalStore.isOpen}
      onRequestClose={modalStore.setIsOpen(false)}
      className={`Modal ${modalClass}`}
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  ));
};
