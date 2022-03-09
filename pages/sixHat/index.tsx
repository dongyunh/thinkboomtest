import React from 'react';
import { InteractivePage, StartPage, SettingRoom } from '../../src/component/common';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import { updateCurrentPage, sixHatSelector } from '../../src/redux/modules/sixHat';

const SixHat = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(sixHatSelector);

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
      component: <SettingRoom />,
    },
    // {
    //   component: <SelectWord />,
    // },
  ];

  return <InteractivePage pages={pages} currentPage={currentPage} />;
};

export default SixHat;
