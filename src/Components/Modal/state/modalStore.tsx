export interface ModalStoreI {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => () => void;
}

export function createModalStore(): ModalStoreI {
  return {
    isOpen: false,
    setIsOpen(isOpenP) {
      return () => {
        this.isOpen = isOpenP;
      };
    },
  };
}
