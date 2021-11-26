import { useLocalStore } from "mobx-react-lite";
import React from "react";
import { ModalStoreI, createModalStore } from "./modalStore";

const BracketsContext = React.createContext<ModalStoreI>(createModalStore());

export const ModalProvider: React.FC = ({ children }) => {
  const modalStore = useLocalStore(createModalStore);
  return (
    <BracketsContext.Provider value={modalStore}>
      {children}
    </BracketsContext.Provider>
  );
};

export const useModalStore = () => React.useContext(BracketsContext);
