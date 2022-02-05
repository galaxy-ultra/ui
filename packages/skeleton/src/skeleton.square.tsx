import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonSquareProps } from './skeleton.type';

export const SkeletonSquare: React.FC<SkeletonSquareProps> = (props) => {
  const { size = 50, rounded = 'sm', backgroundColor = '#E6E6E6' } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor,
      }}
      className={getClass({
        'inline-block relative overflow-hidden': true,
        'gu-skeleton-square': !!animate,
        'w-full h-full': !size,
        'rounded-sm': rounded === 'sm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-xl': rounded === 'xl',
        'rounded-full': rounded === 'full',
      })}
    />
  );
};
