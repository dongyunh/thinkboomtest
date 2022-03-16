import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { S_MakeRoomModal } from './S_MakeRoomModal';
export default {
  title: 'Common/MakeRoomModal',
  component: S_MakeRoomModal,
  parameters: {
    docs: {
      description: {
        component: 'MakeRoomModal 컴포넌트',
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
} as ComponentMeta<typeof S_MakeRoomModal>;
const Template: ComponentStory<typeof S_MakeRoomModal> = args => <S_MakeRoomModal {...args} />;
export const DefaultButton = Template.bind({});
// DefaultButton.args = {
//   text: '입장하기',
// };
