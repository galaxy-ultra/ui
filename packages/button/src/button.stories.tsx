import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Button } from './button';
import { ButtonProps } from './button.type';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const ButtonComponent: Story<ComponentProps<typeof Button>> = (args: ButtonProps) => <Button {...args} />;

export const PrimaryButton = ButtonComponent.bind({});
PrimaryButton.storyName = 'Primary';
PrimaryButton.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const SuccessButton = ButtonComponent.bind({});
SuccessButton.storyName = 'Success';
SuccessButton.args = {
  children: 'Success Button',
  variant: 'success',
};

export const DangerButton = ButtonComponent.bind({});
DangerButton.storyName = 'Danger';
DangerButton.args = {
  children: 'Danger Button',
  variant: 'danger',
};

export const WarningButton = ButtonComponent.bind({});
WarningButton.storyName = 'Warning';
WarningButton.args = {
  children: 'Warning Button',
  variant: 'warning',
};

export const InfoButton = ButtonComponent.bind({});
InfoButton.storyName = 'Info';
InfoButton.args = {
  children: 'Info Button',
  variant: 'info',
};

export const DarkButton = ButtonComponent.bind({});
DarkButton.storyName = 'Dark';
DarkButton.args = {
  children: 'Dark Button',
  variant: 'dark',
};

export const CancelButton = ButtonComponent.bind({});
CancelButton.storyName = 'Cancel';
CancelButton.args = {
  children: 'Cancel Button',
  variant: 'cancel',
};
