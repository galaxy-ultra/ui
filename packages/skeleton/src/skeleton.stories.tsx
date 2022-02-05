import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Skeleton } from './skeleton';
import { SkeletonProps } from './skeleton.type';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta;

const SkeletonLineComponent: Story<ComponentProps<typeof Skeleton>> = (args: SkeletonProps) => <Skeleton {...args}>
  <div className='w-40'><Skeleton.Line /></div>
  <div className='mt-3'><Skeleton.Line width={300} /></div>
</Skeleton>;

const SkeletonSquareComponent: Story<ComponentProps<typeof Skeleton>> = (args: SkeletonProps) => <Skeleton {...args}>
  <div><Skeleton.Square size={100} /></div>
</Skeleton>;

const SkeletonCircleComponent: Story<ComponentProps<typeof Skeleton>> = (args: SkeletonProps) => <Skeleton {...args}>
  <div><Skeleton.Circle /></div>
</Skeleton>;

const SkeletonImageComponent: Story<ComponentProps<typeof Skeleton>> = (args: SkeletonProps) => <Skeleton {...args}>
  <div><Skeleton.Image /></div>
</Skeleton>;

export const LineComponent = SkeletonLineComponent.bind({});
LineComponent.storyName = 'Line';
LineComponent.args = {};

export const SquareComponent = SkeletonSquareComponent.bind({});
SquareComponent.storyName = 'Square';
SquareComponent.args = {};

export const CircleComponent = SkeletonCircleComponent.bind({});
CircleComponent.storyName = 'Circle';
CircleComponent.args = {};

export const ImageComponent = SkeletonImageComponent.bind({});
ImageComponent.storyName = 'Image';
ImageComponent.args = {};