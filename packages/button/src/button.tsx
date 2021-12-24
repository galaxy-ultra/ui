import { getClass } from '../utils/getClass';
import { ButtonProps } from './button.type';

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', children } = props;
  return (
    <button
      className={getClass({
        'px-4 py-2 duration-300 outline-none rounded': true,
        'bg-blue-600 hover:bg-blue-700 text-gray-50': variant === 'primary',
        'bg-green-600 hover:bg-green-700 text-gray-50': variant === 'success',
        'bg-red-600 hover:bg-red-700 text-gray-50': variant === 'danger',
        'bg-yellow-400 hover:bg-yellow-500': variant === 'warning',
        'bg-teal-600 hover:bg-teal-700 text-gray-50': variant === 'info',
        'bg-gray-700 hover:bg-gray-800 text-gray-50': variant === 'dark',
        'bg-white hover:bg-gray-50 border border-gray-200': variant === 'cancel',
      })}
    >
      {children}
    </button>
  );
};
