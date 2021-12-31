import { useState } from 'react';
import { DangerIcon, DarkIcon, InfoIcon, LightIcon, PrimaryIcon, SuccessIcon, WarningIcon } from './alert.data';
import { AlertProps } from './alert.type';
import { getClass } from './helper';

const getIcon = (type: string) => {
  switch (type) {
    case 'success':
      return SuccessIcon;

    case 'danger':
      return DangerIcon;

    case 'warning':
      return WarningIcon;

    case 'info':
      return InfoIcon;

    case 'dark':
      return DarkIcon;

    case 'light':
      return LightIcon;

    default:
      return PrimaryIcon;
  }
};

export const Alert: React.FC<AlertProps> = (props) => {
  const { type = 'primary', size = 'md', label, content, icon, closeIcon = false, onClose } = props;
  const [show, setShow] = useState<boolean>(true);

  if (!show) {
    return null;
  }

  return (
    <div
      className={getClass({
        'flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow': true,
        'max-w-sm': size === 'sm',
        'max-w-md': size === 'md',
        'max-w-lg': size === 'lg',
        'max-w-xl': size === 'xl',
      })}
    >
      <div className="w-full flex mx-auto">
        <div
          className={getClass({
            'flex items-center justify-center p-5': true,
            'bg-blue-500': type === 'primary',
            'bg-green-500': type === 'success',
            'bg-red-500': type === 'danger',
            'bg-yellow-500': type === 'warning',
            'bg-teal-600': type === 'info',
            'bg-gray-700': type === 'dark',
            'bg-gray-100': type === 'light',
          })}
        >
          {icon || (
            <span
              className={getClass({
                'text-gray-600': type === 'light',
                'text-gray-50': type !== 'light',
              })}
            >
              {getIcon(type)}
            </span>
          )}
        </div>

        <div className="px-4 py-2">
          <span
            className={getClass({
              'font-semibold': true,
              'text-blue-500': type === 'primary',
              'text-green-500': type === 'success',
              'text-red-500': type === 'danger',
              'text-yellow-500': type === 'warning',
              'text-teal-600': type === 'info',
              'text-gray-700': type === 'dark',
              'text-gray-800': type === 'light',
            })}
          >
            {label}
          </span>
          <div className="mt-1">{content}</div>
        </div>
      </div>

      {closeIcon && (
        <div>
          <button
            className="outline-none text-gray-500 p-1 duration-300 hover:text-gray-600"
            onClick={() => {
              setShow(false);
              onClose && onClose();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
