export interface SkeletonProps {
  animate?: boolean;
}

export interface SkeletonLineProps {
  width?: number | string;
  height?: number | string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor?: string;
}

export interface SkeletonImageProps {
  width?: number | string;
  height?: number | string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor?: string;
}

export interface SkeletonSquareProps {
  size?: number | string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor?: string;
}

export interface SkeletonCircleProps {
  size?: number | string;
  backgroundColor?: string;
}
