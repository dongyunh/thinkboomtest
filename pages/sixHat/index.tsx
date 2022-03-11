import React, {useEffect} from 'react';
import { InteractivePage, StartPage, SettingRoom } from '../../src/component/common';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import {
  updateCurrentPage,
  sixHatSelector,
  updateAdminState,
} from '../../src/redux/modules/sixHat';
import { useRouter } from 'next/router';

const SixHat = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(sixHatSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const handleMoveSettingPage = () => {
    router.push('/sixHat/setting/asdasd');
  };

  const handleUpdateAmdinState = () => {
    dispatch(updateAdminState(true));
  };

  const handleMakeNewPage = () => {
    handleMoveSettingPage();
    handleUpdateAmdinState();
  };

  useEffect(() => {
    return () => {
      dispatch(updateCurrentPage(0));
    };
  }, []);

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
      component: <SettingRoom onClick={handleMakeNewPage} />,
    },
  ];

  return <InteractivePage pages={pages} currentPage={currentPage} />;
};

export default SixHat;
