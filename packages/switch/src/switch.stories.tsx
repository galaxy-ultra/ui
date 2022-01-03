import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Switch } from './switch';
import { SwitchProps } from './switch.type';

export default {
  title: 'Switch',
  component: Switch,
} as Meta;

const SwitchComponent: Story<ComponentProps<typeof Switch>> = (args: SwitchProps) => <Switch {...args} />;

export const SmallComponent = SwitchComponent.bind({});
SmallComponent.storyName = 'Small size';
SmallComponent.args = {
  size: 'small'
};

export const NormalComponent = SwitchComponent.bind({});
NormalComponent.storyName = 'Normal size';
NormalComponent.args = {};

export const LargeComponent = SwitchComponent.bind({});
LargeComponent.storyName = 'Large size';
LargeComponent.args = {
  size: 'large'
};

export const CustomColorComponent = SwitchComponent.bind({});
CustomColorComponent.storyName = 'Custom color';
CustomColorComponent.args = {
  checkedColor: 'bg-red-500',
  unCheckedColor: 'bg-green-500'
};

export const LabelComponent = SwitchComponent.bind({});
LabelComponent.storyName = 'Label';
LabelComponent.args = {
  label: {
    checked: 'Active',
    unChecked: 'Inactive',
    position: 'right'
  }
};

export const CursorComponent = SwitchComponent.bind({});
CursorComponent.storyName = 'Cursor auto';
CursorComponent.args = {
  cursor: 'auto'
};

export const DisabledComponent = SwitchComponent.bind({});
DisabledComponent.storyName = 'Disabled';
DisabledComponent.args = {
  disabled: true
};
