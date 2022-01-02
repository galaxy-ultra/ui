import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbProps } from './breadcrumb.type';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as Meta;

const BreadcrumbComponent: Story<ComponentProps<typeof Breadcrumb>> = (args: BreadcrumbProps) => <Breadcrumb {...args}>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>Category</Breadcrumb.Item>
  <Breadcrumb.Item active>Detail</Breadcrumb.Item>
</Breadcrumb>;

export const PrimaryComponent = BreadcrumbComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {};

export const CustomIconComponent = BreadcrumbComponent.bind({});
CustomIconComponent.storyName = 'Custom Icon';
CustomIconComponent.args = {
  separatorIcon: '/'
};
