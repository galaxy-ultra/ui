import { CSSProperties } from 'react';

export interface SkeletonProps {
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonLineProps {
  width?: number | 'full' | string;
  height?: number | 'full' | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonImageProps {
  width?: number | 'full' | string;
  height?: number | 'full' | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonSquareProps {
  size?: number | 'full' | string;
  borderRadius?: number;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonCircleProps {
  size?: number | 'full' | string;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}
