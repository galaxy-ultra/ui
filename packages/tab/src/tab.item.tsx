import { useContext, useEffect } from 'react';
import Context from './tab.context';
import { TabItemProps } from './tab.type';

export const TabItem: React.FC<TabItemProps> = (props) => {
  const { activeKey, dataList, onUpdateTitle, onChangeTab } = useContext(Context);

  const { title, children, tabKey } = props;

  useEffect(() => {
    if (title) {
      const x = dataList?.find((item) => item.tabKey === tabKey);
      !x && onUpdateTitle && onUpdateTitle({ title, tabKey });
    }
  }, [title, onUpdateTitle, dataList, tabKey]);

  if (activeKey !== tabKey) {
    return null;
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
