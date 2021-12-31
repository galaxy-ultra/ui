import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Component } from './component';
import { ComponentUIProps } from './component.type';

export default {
  title: 'Component',
  component: Component,
} as Meta;

const UIComponent: Story<ComponentProps<typeof Component>> = (args: ComponentUIProps) => <Component {...args} />;

export const PrimaryComponent = UIComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {};
