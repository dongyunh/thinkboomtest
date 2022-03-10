import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import { InteractivePage, WaitingRoom } from '../../../src/component/common';
import { SelectHat } from '../../../src/component/layout/SixHat';
import { useAppDispatch, useAppSelector } from '../../../src/redux/hooks';
import {
  updateCurrentPage,
  updateNickname,
  sixHatSelector,
} from '../../../src/redux/modules/sixHat';

const SettingPage = () => {
  const router = useRouter();
  const did = router.query;
  const [_nickname, setNickname] = useState<string>();

  const dispatch = useAppDispatch();
  const { currentPage, nickname } = useAppSelector(sixHatSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
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

  if (!nickname) {
    return (
      <>
        <h1>닉네임 설정을 먼저하세요!</h1>
        <TextField onChange={e => setNickname(e.target.value)} />
        <Button onClick={() => _nickname && dispatch(updateNickname(_nickname))}>
          닉네임설정하기
        </Button>
      </>
    );
  }

  return <InteractivePage pages={pages} currentPage={currentPage} />;
};

export default SettingPage;
