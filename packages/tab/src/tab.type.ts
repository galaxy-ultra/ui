export type Title = string | JSX.Element;

export interface TabProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

export interface TabItemProps {
  tabKey?: string;
  title?: Title;
}
