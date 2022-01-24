import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Tab } from './tab';
import { TabProps } from './tab.type';

export default {
  title: 'Tab',
  component: Tab,
} as Meta;

const TabComponent: Story<ComponentProps<typeof Tab>> = (args: TabProps) => <Tab activeKey="1" {...args}>
  <Tab.Item tabKey="1" title="Tab 1">1</Tab.Item>
  <Tab.Item tabKey="2" title="Tab 2">2</Tab.Item>
  <Tab.Item tabKey="3" title="Tab 3">3</Tab.Item>
</Tab>;

export const PrimaryComponent = TabComponent.bind({});
PrimaryComponent.storyName = 'Primary';
PrimaryComponent.args = {};
