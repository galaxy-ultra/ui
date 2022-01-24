import { createContext } from 'react';
import { Title } from './tab.type';

export type ContextType = {
  activeKey?: string;
  onChange?: (key: string) => void;
  dataList?: {
    title: Title;
    tabKey?: string;
  }[];
  onUpdateTitle?: (data: { title: Title; tabKey?: string }) => void;
  onChangeTab?: (tabKey?: string) => void;
};

export const defaultContext: ContextType = {};

const Context = createContext<ContextType>(defaultContext);

export default Context;
