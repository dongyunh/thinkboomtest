import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { S_Modal } from './S_Modal';
export default {
  title: 'Common/Modal',
  component: S_Modal,
  parameters: {
    docs: {
      description: {
        component: 'Modal 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof S_Modal>;
const Template: ComponentStory<typeof S_Modal> = args => {
  return (
    <S_Modal {...args}>
      <div style={{ padding: '20px' }}>
        <h1>모든 모달의 근본</h1>
        <p>
          수 모래뿐일 영원히 미인을 대고, 끓는다. 피는 방지하는 피고 충분히 시들어 말이다. 위하여
          과실이 가치를 것이 영락과 위하여 아니한 얼마나 부패를 이것이다. 오아이스도 보는 장식하는
          창공에 이것이다. 힘차게 청춘 인생을 생명을 있는 이상이 따뜻한 황금시대다. 가진 뼈 위하여,
          실로 가장 길지 무엇이 청춘이 봄바람이다. 하였으며, 착목한는 발휘하기 청춘의 가치를 끓는
          인간이 끓는 약동하다. 넣는 끝까지 때까지 이것이다. 보는 그들은 능히 영락과 하는 운다.
          미묘한 인도하겠다는 힘차게 힘있다.
        </p>
      </div>
    </S_Modal>
  );
};
export const DefaultCard = Template.bind({});
