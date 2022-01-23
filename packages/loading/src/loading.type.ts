type LoadingType = 'circle' | 'spin' | 'ripple' | 'ellipsis';

export interface LoadingProps {
  color?: string;
  type?: LoadingType;
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
  strokeWidth?: number;
}
