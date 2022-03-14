import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
export default {
  title: 'Common/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'Dropdown 컴포넌트',
      },
    },
  },
  argTypes: {
    text: {
      description: '텍스트',
      control: { type: 'text' },
    },
    onClick: {
      description: '클릭액션',
      control: { type: 'action' },
    },
  },
} as ComponentMeta<typeof Dropdown>;
const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;
export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  options: ['사과', '바나나', '딸기'],
};
