import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { S_NicknameModal } from './S_NicknameModal';
export default {
  title: 'Common/NicknameModal',
  component: S_NicknameModal,
  parameters: {
    docs: {
      description: {
        component: 'S_NicknameModal 컴포넌트',
      },
    },
  },
  argTypes: {
    title: {
      description: '제목',
      control: { type: 'string' },
    },
    height: {
      description: '초대한 사람',
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof S_NicknameModal>;
const Template: ComponentStory<typeof S_NicknameModal> = args => <S_NicknameModal {...args} />;
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: '띵크붐',
};

export const ExampleCard = Template.bind({});
ExampleCard.args = {
  title: '항해7팀',
};
