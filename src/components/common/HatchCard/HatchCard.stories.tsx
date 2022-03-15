import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HatchCard } from './HatchCard';

export default {
  title: 'Common/HatchCard',
  component: HatchCard,
  parameters: {
    docs: {
      description: {
        component: 'HatchCard 컴포넌트',
      },
    },
  },
  argTypes: {
    width: {
      description: '너비',
      control: { type: 'number' },
    },
    height: {
      description: '높이',
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof HatchCard>;
const Template: ComponentStory<typeof HatchCard> = args => <HatchCard {...args} />;
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  width: 100,
  height: 100,
};
