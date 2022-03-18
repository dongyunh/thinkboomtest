import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';
export default {
  title: 'Common/DarkModeToggle',
  component: DarkModeToggle,
  parameters: {
    docs: {
      description: {
        component: 'DarkModeToggle 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof DarkModeToggle>;
const Template: ComponentStory<typeof DarkModeToggle> = args => <DarkModeToggle {...args} />;
export const DefaultDropdown = Template.bind({});
