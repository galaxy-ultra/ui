import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonLineProps } from './skeleton.type';

export const SkeletonLine: React.FC<SkeletonLineProps> = (props) => {
  const { width, height, borderRadius = 5, backgroundColor = '#E6E6E6', className = '', style } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height: height || '1rem',
        width: width || '5rem',
        backgroundColor,
        borderRadius,
        ...style,
      }}
      className={
        `${className} ` +
        getClass({
          'relative overflow-hidden': true,
          'gu-skeleton-line': !!animate,
          'w-full': !width,
        })
      }
    />
  );
};
