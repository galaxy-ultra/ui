import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonImageProps } from './skeleton.type';

export const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const { width = '8rem', height = '6rem', rounded = 'sm', backgroundColor = '#E6E6E6' } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height,
        width,
        backgroundColor,
      }}
      className={getClass({
        'relative overflow-hidden flex items-center justify-center': true,
        'gu-skeleton-image': !!animate,
        'w-full': !width,
        'rounded-sm': rounded === 'sm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-xl': rounded === 'xl',
        'rounded-full': rounded === 'full',
      })}
    >
      <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2">
        <path
          d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"
          className="opacity-20"
        ></path>
      </svg>
    </div>
  );
};
