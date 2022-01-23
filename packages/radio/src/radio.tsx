import { useEffect, useState } from 'react';
import { getClass, makeId } from './helper';
import './radio.css';
import { RadioGroup } from './radio.group';
import { RadioProps } from './radio.type';

const RadioUI: React.FC<RadioProps> = (props) => {
  const {
    size = 'normal',
    label,
    checked = false,
    onChange,
    valueFromGroup,
    value,
    children,
    wrapperClassName,
  } = props;
  const [radioChecked, setRadioChecked] = useState<boolean>(checked);
  const radioId = `gu-radio-${makeId(5)}`;

  useEffect(() => {
    if (valueFromGroup) {
      setRadioChecked(valueFromGroup === value);
    }
  }, [valueFromGroup, value]);

  return (
    <div
      className={
        `${wrapperClassName} ` +
        getClass({
          'flex items-center': !!(
            (label && (!label.position || label.position === 'left' || label.position === 'right')) ||
            children
          ),
        })
      }
    >
      {label && (label.position === 'left' || label.position === 'top') && (
        <label
          htmlFor={radioId}
          className={getClass({
            block: true,
            'mr-2': label.position === 'left',
            'mb-1': label.position === 'top' && (size === 'large' || size === 'normal'),
          })}
        >
          {label.content}
        </label>
      )}

      <input
        id={radioId}
        type="radio"
        className={getClass({
          'gu-radio-h-small gu-radio-w-small': size === 'small',
          'gu-radio-h-normal gu-radio-w-normal': size === 'normal',
          'gu-radio-h-large gu-radio-w-large': size === 'large',
        })}
        checked={radioChecked}
        onChange={(e) => {
          setRadioChecked(e.target.checked);
          onChange && onChange(e.target.checked, value);
        }}
      />

      {children ? (
        <label className="ml-2 block" htmlFor={radioId}>
          {children}
        </label>
      ) : (
        <>
          {label && (!label.position || label.position === 'right' || label.position === 'bottom') && (
            <label
              htmlFor={radioId}
              className={getClass({
                block: true,
                'ml-2': !label.position || label.position === 'right',
              })}
            >
              {label.content}
            </label>
          )}
        </>
      )}
    </div>
  );
};

export const Radio = Object.assign(RadioUI, {
  Group: RadioGroup,
});
