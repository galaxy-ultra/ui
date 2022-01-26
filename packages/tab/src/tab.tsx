import { useCallback, useEffect, useState } from 'react';
import { getClass } from './helper';
import Context from './tab.context';
import { TabItem } from './tab.item';
import { Data, TabProps } from './tab.type';

const TabUI: React.FC<TabProps> = (props) => {
  const {
    defaultActiveKey,
    activeKey,
    onChange,
    children,
    position = 'top',
    separator = true,
    isWrapper = false,
  } = props;

  const [dataList, setDataList] = useState<Data[]>([]);
  const [currentKey, setCurrentKey] = useState(defaultActiveKey);

  useEffect(() => {
    if (activeKey) {
      setCurrentKey(activeKey);
    }
  }, [activeKey]);

  const onUpdateTitle = useCallback(
    (data: Data) => {
      const x = dataList.find((item) => item.tabKey === data.tabKey);
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
      <div
        className={getClass({
          'flex items-start justify-between': position === 'left' || position === 'right',
        })}
      >
        {position === 'bottom' && <div className="mb-5">{children}</div>}
        {position === 'right' && <div className="mr-5 w-full">{children}</div>}

        <ul
          className={getClass({
            'border-r': position === 'left',
            'flex items-center flex-wrap border-b': position === 'top',
            'flex items-center flex-wrap border-t': position === 'bottom',
            'border-l': position === 'right',
            'border-none': !separator,
          })}
        >
          {dataList &&
            dataList.map((item, index) => {
              return (
                <li
                  className={getClass({
                    'border-b-2 mr-7': position === 'top' && !isWrapper,
                    'border-t-2 mr-7': position === 'bottom' && !isWrapper,
                    'border-r-2 mb-3': position === 'left' && !isWrapper,
                    'border-l-2 mb-3': position === 'right' && !isWrapper,
                    'border-blue-500 text-blue-600': currentKey === item.tabKey && !isWrapper,
                    'text-gray-700 border-white hover:text-blue-600':
                      currentKey !== item.tabKey && !isWrapper && !item.disabled,
                    'text-gray-700 border-white': currentKey !== item.tabKey && !isWrapper && !!item.disabled,
                    'border rounded-t-sm relative': !!isWrapper,
                    'top-px': !!isWrapper && position === 'top',
                    '-top-px': !!isWrapper && position === 'bottom',
                    '-right-px': !!isWrapper && position === 'left',
                    'right-px': !!isWrapper && position === 'right',
                    'border-r': !!isWrapper && index === dataList.length - 1,
                    'border-r-0':
                      !!isWrapper && index !== dataList.length - 1 && (position === 'bottom' || position === 'top'),
                    'border-b-0':
                      !!isWrapper && index !== dataList.length - 1 && (position === 'left' || position === 'right'),
                    'border-b-white': position === 'top' && currentKey === item.tabKey && !!isWrapper,
                    'border-t-white': position === 'bottom' && currentKey === item.tabKey && !!isWrapper,
                    'border-r-white': position === 'left' && currentKey === item.tabKey && !!isWrapper,
                    'border-l-white': position === 'right' && currentKey === item.tabKey && !!isWrapper,
                    'text-blue-600': currentKey === item.tabKey && !!isWrapper,
                    'bg-gray-50': currentKey !== item.tabKey && !!isWrapper,
                  })}
                  key={item.tabKey}
                  onClick={() => {
                    if (item.disabled) {
                      return;
                    }
                    setCurrentKey(item.tabKey);
                  }}
                >
                  <button
                    className={getClass({
                      'outline-none whitespace-nowrap': true,
                      'opacity-20': !!item.disabled,
                      'py-2 px-3': position === 'top' || position === 'bottom',
                      'py-2.5 pl-3 pr-4': position === 'left' || position === 'right',
                      'py-2 px-5': !!isWrapper,
                    })}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
        </ul>

        {position === 'top' && <div className="mt-5">{children}</div>}
        {position === 'left' && <div className="ml-5 w-full">{children}</div>}
      </div>
    </Context.Provider>
  );
};

export const Tab = Object.assign(TabUI, {
  Item: TabItem,
});
