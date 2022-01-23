import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Loading } from './loading';
import { LoadingProps } from './loading.type';

export default {
  title: 'Loading',
  component: Loading,
} as Meta;

const LoadingComponent: Story<ComponentProps<typeof Loading>> = (args: LoadingProps) => <Loading {...args} />;

export const CircleComponent = LoadingComponent.bind({});
CircleComponent.storyName = 'Circle';
CircleComponent.args = {};

export const RippleComponent = LoadingComponent.bind({});
RippleComponent.storyName = 'Ripple';
RippleComponent.args = {
  type: "ripple"
};

export const EllipsisComponent = LoadingComponent.bind({});
EllipsisComponent.storyName = 'Ellipsis';
EllipsisComponent.args = {
  type: "ellipsis",
};


export const SpinComponent = LoadingComponent.bind({});
SpinComponent.storyName = 'Spin';
SpinComponent.args = {
  type: "spin",
};
