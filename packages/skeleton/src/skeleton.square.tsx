import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonSquareProps } from './skeleton.type';

export const SkeletonSquare: React.FC<SkeletonSquareProps> = (props) => {
  const { size, borderRadius = 5, backgroundColor = '#E6E6E6', className = '', style } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height: size && size !== 'full' ? size : size !== 'full' ? 50 : undefined,
        width: size && size !== 'full' ? size : size !== 'full' ? 50 : undefined,
        backgroundColor,
        borderRadius,
        ...style,
      }}
      className={
        `${className} ` +
        getClass({
          'relative overflow-hidden': true,
          'gu-skeleton-square': !!animate,
          'w-full h-full': size === 'full',
        })
      }
    />
  );
};
