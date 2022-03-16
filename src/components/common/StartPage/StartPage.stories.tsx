import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { StartPage } from './StartPage';

export default {
  title: 'Common/StartPage',
  component: StartPage,
  parameters: {
    docs: {
      description: {
        component: 'StartPage 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof StartPage>;
const Template: ComponentStory<typeof StartPage> = args => <StartPage {...args} />;
export const DefaultSixHat = Template.bind({});
DefaultSixHat.args = {
  title: '6가지 모자',
  desc: '여섯가지 색상의 모자가 지닌 역할에 맞춰 생각함으로써 다양한 측면에서 폭넓은 사고를 할 수 있도록 도와주는 기법입니다.',
};

export const DefaultBrainWriting = Template.bind({});
DefaultBrainWriting.args = {
  title: '브레인 라이팅',
  desc: '각자 주제에 대해 생각나는 아이디어들을 적은뒤 서로 돌려가며 아이디어를 공유 및 투표합니다.',
};
