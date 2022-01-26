import { useContext, useEffect } from 'react';
import Context from './tab.context';
import { TabItemProps } from './tab.type';

export const TabItem: React.FC<TabItemProps> = (props) => {
  const { activeKey, dataList, onUpdateTitle } = useContext(Context);

  const { title, children, tabKey, disabled } = props;

  useEffect(() => {
    if (title) {
      const x = dataList?.find((item) => item.tabKey === tabKey);
      !x && onUpdateTitle && onUpdateTitle({ title, tabKey, disabled });
    }
  }, [title, onUpdateTitle, dataList, tabKey, disabled]);

  if (activeKey !== tabKey) {
    return null;
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
