import { makeAutoObservable } from "mobx";

export interface ModalStoreI {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => () => void;
}

class ModalStore {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setIsOpen(isOpenP: boolean) {
    return () => {
      this.isOpen = isOpenP;
    };
  }
}

export const modalStore = new ModalStore();
