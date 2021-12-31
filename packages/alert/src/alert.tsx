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
  const { type = 'primary', size = 'md', label, content, icon } = props;

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
      <div
        className={getClass({
          'flex items-center justify-center w-12 bg-blue-500': true,
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

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
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
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};
