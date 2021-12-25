import { Meta, Story } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { Modal } from './modal';
import { ModalProps } from './modal.type';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const ModalComponent: Story<ComponentProps<typeof Modal>> = (args: ModalProps) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setShow(true)} className='px-4 py-2 rounded text-gray-50 bg-green-600 duration-300 hover:bg-green-700'>Open modal</button>
      <Modal {...args} show={show} onClose={() => setShow(false)} />
    </div>
  )
};

export const PrimaryModal = ModalComponent.bind({});
PrimaryModal.storyName = 'Size MD';
PrimaryModal.args = {
  children: <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
  header: 'Modal Title',
  closeButton: true,
};