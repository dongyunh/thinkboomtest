import React from 'react';
import { ChattingRoom } from '../../src/component/layout/ChattingRoom';
import { InteractivePage, StartPage } from '../../src/component/common';

const SixHat = () => {
  const pages = [
    {
      component: (
        <StartPage
          title="Six Thinking Hat"
          desc="학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는"
          // onClick={() => handleNextPage(1}
        />
      ),
    },
    // {
    //   component: <Setting onClick={() => handleNextPage(2)} />,
    // },
    // {
    //   component: <SelectWord />,
    // },
  ];

  return <InteractivePage pages={pages} currentPage={0} />;
};

export default SixHat;
