import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TextField } from './TextField';
export default {
  title: 'Common/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'TextField 컴포넌트',
      },
    },
  },
  argTypes: {
    isError: {
      description: '에러여부',
      control: { type: 'boolean' },
    },
    errorText: {
      description: '에러문구',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof TextField>;
const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;
export const DefaultTextField = Template.bind({});
