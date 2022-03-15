import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SubjectTextField } from './SubjectTextField';
export default {
  title: 'Common/SubjectTextField',
  component: SubjectTextField,
  parameters: {
    docs: {
      description: {
        component: 'SubjectTextField 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof SubjectTextField>;
const Template: ComponentStory<typeof SubjectTextField> = args => <SubjectTextField {...args} />;
export const DefaultSubjectTextField = Template.bind({});
DefaultSubjectTextField.args = {};
