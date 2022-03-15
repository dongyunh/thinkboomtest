import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { InteractivePage, WaitingRoom } from '@components/common';
import { SelectHat } from '@components/layout/SixHat';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { updateCurrentPage, updateNickname, sixHatSelector } from '@redux/modules/sixHat';
import { NicknameModal } from '@components/common/Modals';
import { ChattingRoom } from '@components/common/ChattingRoom';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import CommentIcon from '@mui/icons-material/Comment';
import styled from 'styled-components';
import { messageData } from 'src/mock/messageData';

let sockJS = new SockJS('http://3.34.99.231/websocket');
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = () => {};

export type message = {
  nickname: string;
  content: string;
};

type SettingPageProps = {
  roomId: string;
};

const SettingPage = ({ roomId }: SettingPageProps) => {
  const router = useRouter();
  const [_nickname, setNickname] = useState<string>();
  // const [senderId, setSenderId] = useState();
  const senderId = Number(localStorage.getItem('senderId'));
  const [subject, setSubject] = useState();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { currentPage, nickname } = useAppSelector(sixHatSelector);

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const handleUpdateNickname = async (enteredName: string) => {
    await axios
      .post('http://3.34.99.231/nickname/member', {
        nickname: enteredName,
      })
      .then(res => {
        // setSenderId(res.data);
        localStorage.setItem('senderId', res.data);
        dispatch(updateNickname(enteredName));
      });
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (nickname) {
      console.log('연결시도');
      console.log(senderId);
      stompClient.connect({ senderId }, () => {
        stompClient.subscribe(
          `/sub/api/sixHat/rooms/${roomId}`,
          data => {
            const newMessage: message = JSON.parse(data.body) as message;
            console.log(newMessage);
            //   addMessage(newMessage);
          },
          { senderId },
        );
      });
    }
  }, [nickname]);

  // 웹소켓이 연결될 때 까지 실행하는 함수
  const waitForConnection = (ws: any, callback: any) => {
    setTimeout(() => {
      if (ws.ws.readyState === 1) {
        callback();
      } else {
        waitForConnection(ws, callback);
      }
    }, 0.1);
  };

  const sendContents = () => {
    try {
      // send할 데이터
      const data = {
        type: 'TALK',
        roomId: roomId,
        sender: '코끼리아저씨',
        senderId: senderId,
        hat: 'red',
        message: '재밌다야',
      };
      waitForConnection(stompClient, () => {
        stompClient.debug = () => {};
        console.log(data);
        stompClient.send('/pub/api/sixHat/chat/message', { senderId }, JSON.stringify(data));
      });
    } catch (e) {
      console.log('message 소켓 함수 에러', e);
    }
  };

  const pages = [
    {
      component: <WaitingRoom onClick={sendContents} />,
    },
    {
      component: <SelectHat onClick={() => handleRouting(`/sixHat/devating/${roomId}`)} />,
    },
  ];

  return (
    <>
      <InteractivePage pages={pages} currentPage={currentPage} />
      {!nickname && <NicknameModal title="항해7팀" onClick={handleUpdateNickname} />}
      <ChatIcon onClick={() => setIsChatOpen(!isChatOpen)}>
        <CommentIcon />
      </ChatIcon>
      {isChatOpen && (
        <ChattingContainer>
          <ChattingRoom
            myNickname={nickname}
            chatHistory={messageData}
            onClick={() => setIsChatOpen(!isChatOpen)}
          />
        </ChattingContainer>
      )}
    </>
  );
};

export default SettingPage;

const ChatIcon = styled.div`
  position: fixed;
  right: 70px;
  bottom: 70px;
  cursor: pointer;
`;

const ChattingContainer = styled.div`
  position: fixed;
  right: 70px;
  bottom: 100px;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { roomId } = query;
  return {
    props: {
      roomId,
    },
  };
};
