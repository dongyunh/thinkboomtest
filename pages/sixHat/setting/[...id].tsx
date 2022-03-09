import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import { InteractivePage, WaitingRoom } from '../../../src/component/common';
import { SelectHat } from '../../../src/component/layout/SixHat';
import { useAppDispatch, useAppSelector } from '../../../src/redux/hooks';
import { updateCurrentPage, sixHatSelector } from '../../../src/redux/modules/sixHat';

const SetNickName = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState<string>('');
  const did = router.query;

  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(sixHatSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  const handleSignUp = () => {
    axios.post('http://3.38.151.99/api/nickname', { nickname: nickName }).then(res => {
      localStorage.setItem('nickName', res.data.token);
      router.push('/sixHat/setting/asdasd');
    });
  };

  const pages = [
    {
      component: <WaitingRoom onClick={() => handleNextPage(1)} />,
    },
    {
      component: <SelectHat onClick={() => handleRouting(`/sixHat/devating/${did}`)} />,
    },
  ];

  return <InteractivePage pages={pages} currentPage={currentPage} />;
};

export default SetNickName;
