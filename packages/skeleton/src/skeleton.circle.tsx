import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonCircleProps } from './skeleton.type';

export const SkeletonCircle: React.FC<SkeletonCircleProps> = (props) => {
  const { size, backgroundColor = '#E6E6E6', className = '', style } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height: size || 50,
        width: size || 50,
        backgroundColor,
        ...style,
      }}
      className={
        `${className} ` +
        getClass({
          'relative overflow-hidden rounded-full': true,
          'gu-skeleton-circle': !!animate,
          'w-full h-full': !size,
        })
      }
    />
  );
};
