import React from 'react';
import { StartPage, InteractivePage } from '../../src/component/common';
import { SelectWord, Setting } from '../../src/component/layout/RandomWord';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import { updateCurrentPage, randomWordSelector } from '../../src/redux/modules/randomWord';

const RandomWord = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(randomWordSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const pages = [
    {
      component: (
        <StartPage
          title="Six Thinking Hat"
          desc="학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는"
          onClick={() => handleNextPage(1)}
        />
      ),
    },
    {
      component: <Setting onClick={() => handleNextPage(2)} />,
    },
    {
      component: <SelectWord />,
    },
  ];

  return <InteractivePage pages={pages} currentPage={currentPage} />;
};

export default RandomWord;
