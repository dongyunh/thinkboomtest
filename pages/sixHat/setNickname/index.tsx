import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

const SetNickName = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState<string>('');

  const handleSignUp = () => {
    axios
      .post('http://3.38.151.99/api/nickname', { nickname: nickName })
      .then(res => {
        console.log(res);
        // localStorage.setItem('nickName', res.data.token)
        // router.push('/sixHat/waitingRoom/asdasd')
      });
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="닉네임"
        variant="outlined"
        onChange={e => setNickName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSignUp}>
        닉네임 설정하기
      </Button>
    </>
  );
};

export default SetNickName;
