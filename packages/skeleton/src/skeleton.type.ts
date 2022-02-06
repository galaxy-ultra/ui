import { CSSProperties } from 'react';

export interface SkeletonProps {
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonLineProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonImageProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonSquareProps {
  size?: number | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonCircleProps {
  size?: number | string;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}
