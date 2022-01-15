import { createContext } from 'react';

export type ContextType = {
  showModal: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

export const defaultContext: ContextType = {
  showModal: false,
};

const Context = createContext<ContextType>(defaultContext);

export default Context;
