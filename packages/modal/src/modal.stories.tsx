import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Modal } from './modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const ModalComponent: Story<ComponentProps<typeof Modal>> = (args: any) => <Modal {...args} />;

export const PrimaryModal = ModalComponent.bind({});
PrimaryModal.storyName = 'Size MD';
PrimaryModal.args = {
  show: false,
  children: 'Primary Modal',
  size: 'lg',
  header: 'Modal Title',
  closeButton: true,
};