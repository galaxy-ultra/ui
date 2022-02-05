import { createContext } from 'react';

export type ContextType = {
  animate?: boolean;
};

export const defaultContext: ContextType = {};

const Context = createContext<ContextType>(defaultContext);

export default Context;
