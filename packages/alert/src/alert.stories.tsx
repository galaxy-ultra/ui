import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Alert } from './alert';
import { AlertProps } from './alert.type';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

const AlertComponent: Story<ComponentProps<typeof Alert>> = (args: AlertProps) => <Alert {...args} />;

export const PrimaryComponent = AlertComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {
  content: 'Your content in here!',
  label: 'Primary'
};

export const SuccessComponent = AlertComponent.bind({});
SuccessComponent.storyName = 'Success';
SuccessComponent.args = {
  type: 'success',
  content: 'Your content in here!',
  label: 'Success'
};

export const DangerComponent = AlertComponent.bind({});
DangerComponent.storyName = 'Danger';
DangerComponent.args = {
  type: 'danger',
  content: 'Your content in here!',
  label: 'Danger'
};

export const WarningComponent = AlertComponent.bind({});
WarningComponent.storyName = 'Warning';
WarningComponent.args = {
  type: 'warning',
  content: 'Your content in here!',
  label: 'Warning'
};

export const InfoComponent = AlertComponent.bind({});
InfoComponent.storyName = 'Info';
InfoComponent.args = {
  type: 'info',
  content: 'Your content in here!',
  label: 'Info'
};

export const DarkComponent = AlertComponent.bind({});
DarkComponent.storyName = 'Dark';
DarkComponent.args = {
  type: 'dark',
  content: 'Your content in here!',
  label: 'Dark'
};

export const LightComponent = AlertComponent.bind({});
LightComponent.storyName = 'Light';
LightComponent.args = {
  type: 'light',
  content: 'Your content in here!',
  label: 'Light'
};

export const SmComponent = AlertComponent.bind({});
SmComponent.storyName = 'Size SM';
SmComponent.args = {
  size: 'sm',
  content: 'Your content in here!',
  label: 'SM size'
};

export const MdComponent = AlertComponent.bind({});
MdComponent.storyName = 'Size MD';
MdComponent.args = {
  content: 'Your content in here!',
  label: 'MD size'
};

export const LgComponent = AlertComponent.bind({});
LgComponent.storyName = 'Size LG';
LgComponent.args = {
  size: 'lg',
  content: 'Your content in here!',
  label: 'LG size'
};

export const XlComponent = AlertComponent.bind({});
XlComponent.storyName = 'Size XL';
XlComponent.args = {
  size: 'xl',
  content: 'Your content in here!',
  label: 'XL size'
};

export const FullComponent = AlertComponent.bind({});
FullComponent.storyName = 'Size FULL';
FullComponent.args = {
  size: 'full',
  content: 'Your content in here!',
  label: 'FULL size'
};
