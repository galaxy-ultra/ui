export type Title = string | JSX.Element;

export interface Data {
  title: Title;
  tabKey?: string;
  disabled?: boolean;
}

export interface TabProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  isWrapper?: boolean; //
  position?: 'top' | 'bottom' | 'left' | 'right';
  separator?: boolean;
}

export interface TabItemProps {
  tabKey?: string;
  title?: Title;
  disabled?: boolean;
}
