import React from 'react';
import { StartPage, InteractivePage } from '../../src/component/common';
import { SelectWord } from '../../src/component/layout/RandomWord/SelectWord';

const RandomWord = () => {
  const pages = [
    {
      component: (
        <StartPage
          title="Six Thinking Hat"
          desc="학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는"
        />
      ),
    },
    {
      component: (
        <SelectWord/>
      ),
    },
  ];

  return <InteractivePage pages={pages} currentPage={1} />;
};

export default RandomWord;
