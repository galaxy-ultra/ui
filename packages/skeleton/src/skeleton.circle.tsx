import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonCircleProps } from './skeleton.type';

export const SkeletonCircle: React.FC<SkeletonCircleProps> = (props) => {
  const { size = 50, backgroundColor = '#E6E6E6' } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor,
      }}
      className={getClass({
        'inline-block relative overflow-hidden rounded-full': true,
        'gu-skeleton-square': !!animate,
        'w-full h-full': !size,
      })}
    />
  );
};
