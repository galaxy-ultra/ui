import { Children, cloneElement, Fragment, isValidElement, ReactNode, useState } from 'react';
import { getClass } from './helper';
import { RadioGroupProps } from './radio.type';

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { children, value, type = 'vertical', onChange } = props;
  const [currentValue, setCurrentValue] = useState<any>(value);

  const WapperChildren = (children: ReactNode) => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return null;
      }
      return (
        <Fragment>
          {cloneElement(child, {
            valueFromGroup: currentValue,
            onChange: (checked: boolean, value?: any) => {
              setCurrentValue(value);
              onChange && onChange(value);
            },
          })}
        </Fragment>
      );
    });
  };

  return (
    <div
      className={getClass({
        'flex items-start flew-wrap': type === 'horizontal',
      })}
    >
      {WapperChildren(children)}
    </div>
  );
};
