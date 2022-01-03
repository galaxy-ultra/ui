import { useState } from 'react';
import { getClass } from './helper';
import './switch.css';
import { SwitchProps } from './switch.type';

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    size = 'normal',
    disabled,
    onChange,
    checkedColor = 'bg-blue-500',
    unCheckedColor = 'bg-gray-300',
    label,
    cursor = 'pointer',
  } = props;
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div
      className={getClass({
        'flex items-center': !!(label && (!label.position || label.position === 'left' || label.position === 'right')),
      })}
    >
      {label && (label.position === 'left' || label.position === 'top') && (
        <div
          className={getClass({
            'mr-2.5': label.position === 'left',
            'mb-1': label.position === 'top',
          })}
        >
          {checked ? label.checked : label.unChecked}
        </div>
      )}

      <button
        disabled={disabled}
        onClick={() => {
          setChecked(!checked);
          onChange && onChange(!checked);
        }}
        className={
          `${cursor && cursor === 'auto' ? 'cursor-auto' : ''} ` +
          `${checked ? checkedColor : unCheckedColor} ` +
          getClass({
            'flex items-center rounded-full p-1 duration-300': true,
            'w-12 h-7': size === 'small',
            'w-15 h-8': size === 'normal',
            'w-18 h-9': size === 'large',
            'opacity-70 cursor-not-allowed': !!disabled,
          })
        }
      >
        <span
          className={getClass({
            'bg-white rounded-full shadow-md transform duration-300': true,
            'translate-x-5': checked && size === 'small',
            'translate-x-7': checked && size === 'normal',
            'translate-x-9': checked && size === 'large',
            'w-5 h-5': size === 'small',
            'w-6 h-6': size === 'normal',
            'w-7 h-7': size === 'large',
          })}
        />
      </button>

      {label && (!label.position || label.position === 'right' || label.position === 'bottom') && (
        <div
          className={getClass({
            'ml-3': !label.position || label.position === 'right',
            'mt-1': label.position === 'bottom',
          })}
        >
          {checked ? label.checked : label.unChecked}
        </div>
      )}
    </div>
  );
};
