import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { InteractivePage, WaitingRoom } from '../../../src/component/common';
import { SelectHat } from '../../../src/component/layout/SixHat';
import { useAppDispatch, useAppSelector } from '../../../src/redux/hooks';
import {
  updateCurrentPage,
  updateNickname,
  sixHatSelector,
} from '../../../src/redux/modules/sixHat';
import { NicknameModal } from '../../../src/component/common/Modal';

const SettingPage = () => {
  const router = useRouter();
  const did = router.query;
  const [_nickname, setNickname] = useState<string>();

  const dispatch = useAppDispatch();
  const { currentPage, nickname } = useAppSelector(sixHatSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const handleUpdateNickname = (nickname: string) => {
    dispatch(updateNickname(nickname));
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  const pages = [
    {
      component: <WaitingRoom onClick={() => handleNextPage(1)} />,
    },
    {
      component: <SelectHat onClick={() => handleRouting(`/sixHat/devating/${did}`)} />,
    },
  ];

  return (
    <>
      <InteractivePage pages={pages} currentPage={currentPage} />
      {!nickname && (
        <NicknameModal title="항해7팀" inviteMember="정현" onClick={handleUpdateNickname} />
      )}
    </>
  );
};

export default SettingPage;
