import { SkeletonCircle } from './skeleton.circle';
import Context from './skeleton.context';
import './skeleton.css';
import { SkeletonImage } from './skeleton.image';
import { SkeletonLine } from './skeleton.line';
import { SkeletonSquare } from './skeleton.square';
import { SkeletonProps } from './skeleton.type';

const SkeletonUI: React.FC<SkeletonProps> = (props) => {
  const { children, animate = true } = props;
  return <Context.Provider value={{ animate }}>{children}</Context.Provider>;
};

export const Skeleton = Object.assign(SkeletonUI, {
  Line: SkeletonLine,
  Square: SkeletonSquare,
  Circle: SkeletonCircle,
  Image: SkeletonImage,
});
