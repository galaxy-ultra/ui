import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Tab } from './tab';
import { TabProps } from './tab.type';

export default {
  title: 'Tab',
  component: Tab,
} as Meta;

const TabComponent: Story<ComponentProps<typeof Tab>> = (args: TabProps) => <Tab defaultActiveKey='2' activeKey="1" {...args}>
  <Tab.Item tabKey="1" title="Tab 1">1</Tab.Item>
  <Tab.Item tabKey="2" title="Tab 2">2</Tab.Item>
  <Tab.Item tabKey="3" title="Tab 3" disabled>3</Tab.Item>
</Tab>;

export const PrimaryComponent = TabComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {};

export const BottomComponent = TabComponent.bind({});
BottomComponent.storyName = 'Bottom';
BottomComponent.args = {
  position: 'bottom'
};

export const LeftComponent = TabComponent.bind({});
LeftComponent.storyName = 'Left';
LeftComponent.args = {
  position: 'left'
};

export const RightComponent = TabComponent.bind({});
RightComponent.storyName = 'Right';
RightComponent.args = {
  position: 'right'
};

export const NoSeparatorComponent = TabComponent.bind({});
NoSeparatorComponent.storyName = 'No separator';
NoSeparatorComponent.args = {
  separator: false
};

export const WrapperComponent = TabComponent.bind({});
WrapperComponent.storyName = 'Wrapper';
WrapperComponent.args = {
  isWrapper: true
};
