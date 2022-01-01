import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Card } from './card';
import { CardProps } from './card.type';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const CardComponent: Story<ComponentProps<typeof Card>> = (args: CardProps) => <Card {...args} />;

export const PrimaryComponent = CardComponent.bind({});
PrimaryComponent.storyName = 'Normal';
PrimaryComponent.args = {
  title: 'Card Title',
  children: <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}</p>,
};

export const ImageComponent = CardComponent.bind({});
ImageComponent.storyName = 'Image';
ImageComponent.args = {
  title: 'Card Title',
  children: <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}</p>,
  image: {
    src: 'http://www.etpgroup.com/vn/wp-content/uploads/2016/09/discovery.com_.jpg',
  },
};
