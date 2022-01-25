import { createContext } from 'react';
import { Data } from './tab.type';

export type ContextType = {
  activeKey?: string;
  onChange?: (key: string) => void;
  dataList?: Data[];
  onUpdateTitle?: (data: Data) => void;
  onChangeTab?: (tabKey?: string) => void;
};

export const defaultContext: ContextType = {};

const Context = createContext<ContextType>(defaultContext);

export default Context;
