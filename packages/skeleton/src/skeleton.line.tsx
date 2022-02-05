import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonLineProps } from './skeleton.type';

export const SkeletonLine: React.FC<SkeletonLineProps> = (props) => {
  const { width = '5rem', height = '1rem', rounded = 'sm', backgroundColor = '#E6E6E6' } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height,
        width,
        backgroundColor,
      }}
      className={getClass({
        'inline-block relative overflow-hidden': true,
        'gu-skeleton-line': !!animate,
        'w-full': !width,
        'rounded-sm': rounded === 'sm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-xl': rounded === 'xl',
        'rounded-full': rounded === 'full',
      })}
    />
  );
};
