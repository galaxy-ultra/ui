import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Radio } from './radio';
import { RadioProps } from './radio.type';

export default {
  title: 'Radio',
  component: Radio,
} as Meta;

const RadioComponent: Story<ComponentProps<typeof Radio>> = (args: RadioProps) => {
  return (
    <div>
      <Radio size='small' {...args} checked />
      <Radio size='normal' {...args} />
      <Radio size='large' {...args} />
    </div>
  )
};

const RadioGroupComponent: Story<ComponentProps<typeof Radio>> = (args: RadioProps) => {
  return (
    <div>
      <Radio.Group value={1} type="horizontal" onChange={(value: any) => console.log('ducnh4', value)}>
        <Radio value={1} {...args} wrapperClassName='mr-10'>1</Radio>
        <Radio value={2} {...args} wrapperClassName='mr-10'>2</Radio>
        <Radio value={3} {...args}>3</Radio>
      </Radio.Group>
    </div>
  )
};

export const PrimaryComponent = RadioComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {
  label: {
    content: 'Radio',
    position: 'right'
  }
};

export const LeftComponent = RadioComponent.bind({});
LeftComponent.storyName = 'Left';
LeftComponent.args = {
  label: {
    content: 'Radio',
    position: 'left'
  }
};

export const TopComponent = RadioComponent.bind({});
TopComponent.storyName = 'Top';
TopComponent.args = {
  label: {
    content: 'Radio',
    position: 'top'
  }
};

export const BottomComponent = RadioComponent.bind({});
BottomComponent.storyName = 'Bottom';
BottomComponent.args = {
  label: {
    content: 'Radio',
    position: 'bottom'
  }
};

export const GroupComponent = RadioGroupComponent.bind({});
GroupComponent.storyName = 'Group';
GroupComponent.args = {
  label: {
    content: 'Radio',
  }
};
