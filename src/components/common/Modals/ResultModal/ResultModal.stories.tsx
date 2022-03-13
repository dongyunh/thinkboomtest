import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { S_ResultModal } from './S_ResultModal';
export default {
  title: 'Common/ResultModal',
  component: S_ResultModal,
  parameters: {
    docs: {
      description: {
        component: 'ResultModal 컴포넌트',
      },
    },
  },
  argTypes: {
    // title: {
    //   description: '제목',
    //   control: { type: 'string' },
    // },
    // height: {
    //   description: '초대한 사람',
    //   control: { type: 'string' },
    // },
  },
} as ComponentMeta<typeof S_ResultModal>;
const Template: ComponentStory<typeof S_ResultModal> = args => <S_ResultModal {...args} />;
export const DefaultCard = Template.bind({});
