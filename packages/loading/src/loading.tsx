import { Circle, Ellipsis, Ripple, Spin } from './loading.item';
import { LoadingProps } from './loading.type';

export const Loading: React.FC<LoadingProps> = (props) => {
  const { color = '#6b7280', className = '', width = 50, height = 50, duration, strokeWidth, type = 'circle' } = props;

  if (type === 'ripple') {
    return (
      <Ripple
        color={color}
        className={className}
        width={width}
        height={height}
        duration={duration}
        strokeWidth={strokeWidth}
      />
    );
  }

  if (type === 'ellipsis') {
    return (
      <Ellipsis
        color={color}
        className={className}
        width={width}
        height={height}
        duration={duration}
        strokeWidth={strokeWidth}
      />
    );
  }

  if (type === 'spin') {
    return (
      <Spin
        color={color}
        className={className}
        width={width}
        height={height}
        duration={duration}
        strokeWidth={strokeWidth}
      />
    );
  }

  return (
    <Circle
      color={color}
      className={className}
      width={width}
      height={height}
      duration={duration}
      strokeWidth={strokeWidth}
    />
  );
};
