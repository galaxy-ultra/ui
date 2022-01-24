import { useCallback, useEffect, useState } from 'react';
import { getClass } from './helper';
import Context from './tab.context';
import { TabItem } from './tab.item';
import { TabProps, Title } from './tab.type';

const TabUI: React.FC<TabProps> = (props) => {
  const { defaultActiveKey, activeKey, onChange, children } = props;

  const [dataList, setDataList] = useState<{ title: Title; tabKey?: string }[]>([]);
  const [currentKey, setCurrentKey] = useState(defaultActiveKey);

  useEffect(() => {
    if (activeKey) {
      setCurrentKey(activeKey);
    }
  }, [activeKey]);

  const onUpdateTitle = useCallback(
    (data: { title: Title; tabKey?: string }) => {
      const x = dataList.find((item) => item.tabKey === data.tabKey);
      console.log('ducnh2', dataList, data);
      !x && setDataList([data, ...dataList]);
    },
    [dataList]
  );

  return (
    <Context.Provider
      value={{
        activeKey: currentKey,
        onChange,
        onUpdateTitle,
        onChangeTab: (newKey?: string) => setCurrentKey(newKey),
      }}
    >
      <div>
        {dataList &&
          dataList.map((item) => {
            return (
              <div
                key={item.tabKey}
                className={getClass({
                  'text-red-500': currentKey === item.tabKey,
                })}
                onClick={() => setCurrentKey(item.tabKey)}
              >
                {item.title}
              </div>
            );
          })}
      </div>
      <div className="mt-5">{children}</div>
    </Context.Provider>
  );
};

export const Tab = Object.assign(TabUI, {
  Item: TabItem,
});
