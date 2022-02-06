import { useContext } from 'react';
import { getClass } from './helper';
import Context from './skeleton.context';
import { SkeletonLineProps } from './skeleton.type';

export const SkeletonLine: React.FC<SkeletonLineProps> = (props) => {
  const {
    width = '5rem',
    height = '1rem',
    borderRadius = 5,
    backgroundColor = '#E6E6E6',
    className = '',
    style,
  } = props;
  const { animate } = useContext(Context);

  return (
    <div
      style={{
        height,
        width,
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
