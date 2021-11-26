import { useObserver } from "mobx-react-lite";
import React from "react";
import ReactModal from "react-modal";
import { useModalStore } from "./state/modalContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export const Modal: React.FC = () => {
  const modalStore = useModalStore();
  return useObserver(() => (
    <ReactModal
      isOpen={modalStore.isOpen}
      style={customStyles}
      onRequestClose={modalStore.setIsOpen(false)}
    ></ReactModal>
  ));
};
