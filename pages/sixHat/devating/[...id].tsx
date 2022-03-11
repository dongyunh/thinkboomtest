import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { HeaderBar } from '@components/common/HeaderBar';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { ChattingRoom } from '@components/layout/ChattingRoom';
import { useRouter } from 'next/router';

export type message = {
  nickname: string;
  content: string;
};

let sockJS = new SockJS('http://3.38.151.99/websocket');
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = () => {};

const WaitingRoom = () => {
  const [contents, setContents] = React.useState<string>('날다람쥐가 왔다');
  const [nickname, setNickname] = React.useState('날다람쥐');
  const [message, setMessage] = React.useState('');
  const router = useRouter();
  const { id } = router.query;

  const token = typeof window !== 'undefined' ? localStorage.getItem('nickName') : null;

  console.log(token);

  useEffect(() => {
    stompClient.connect(
      {
        token: token,
      },
      () => {
        stompClient.subscribe('/sub/api/chat/room', data => {
          const newMessage: message = JSON.parse(data.body) as message;
          console.log(newMessage);
          //   addMessage(newMessage);
        });
      },
    );
  }, [token]);

  const handleEnter = (nickname: string, content: string) => {
    const newMessage: message = { nickname, content };
    console.log(newMessage);
    stompClient.send('/pub/api/chat/message', { token: token }, JSON.stringify(newMessage));
    setMessage('');
  };

  return (
    <>
      <HeaderBar>
        <Button variant="text">로고</Button>
      </HeaderBar>
      <Grid>
        <Empty />
        <TextFieldWrapper>
          <h2>회의 주제</h2>
          <TextField
            id="outlined-basic"
            label="주제를 입력해주세요"
            variant="outlined"
            onChange={e => setContents(e.target.value)}
          />
        </TextFieldWrapper>
        <Button variant="contained" onClick={() => handleEnter(nickname, contents)}>
          완료
        </Button>
      </Grid>
      <FixedChattingRoom>
        <ChattingRoom />
      </FixedChattingRoom>
    </>
  );
};

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Empty = styled.div``;

const FixedChattingRoom = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
`;

export default WaitingRoom;
