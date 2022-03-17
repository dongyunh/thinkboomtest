import React, { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { InteractivePage, WaitingRoom } from '../../../src/components/common';
import { SelectHat } from '../../../src/components/layout/SixHat';
import { useAppDispatch, useAppSelector } from '../../../src/redux/hooks';
import {
  updateCurrentPage,
  updateNickname,
  sixHatSelector,
} from '../../../src/redux/modules/sixHat';
import { NicknameModal } from '../../../src/components/common';
import { ChattingRoom } from '../../../src/components/common';
import axios from 'axios';
import CommentIcon from '@mui/icons-material/Comment';
import styled from 'styled-components';
import useSocketHook from '../../../src/hooks/useSocketHook';

//TODO : any 수정하기
export const WaitingRoomContext = createContext<any>(null);

export type message = {
  nickname: string;
  content: string;
};

type SettingPageProps = {
  roomId: string;
};

let ConnectedSocket: any;

const SettingPage = ({ roomId }: SettingPageProps) => {
  const dispatch = useAppDispatch();
  const { currentPage, nickname, chatHistory } = useAppSelector(sixHatSelector);
  const [_nickname, setNickname] = useState<string>();
  const [subject, setSubject] = useState();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const localSenderId = localStorage.getItem('senderId');
  const [senderId, setSenderId] = useState(localSenderId ? Number(localSenderId) : null);
  const HandleSocket = useSocketHook('sixhat');
  const router = useRouter();

  useEffect(() => {
    if (nickname) {
      ConnectedSocket = new HandleSocket('http://3.38.151.99/websocket');
      ConnectedSocket.connectSH(senderId, roomId);
    }
  }, [nickname]);

  const sendHatData = (hat: string) => {
    ConnectedSocket.sendHatData(nickname, hat);
  };

  const handleNextPage = (pageNum: number) => {
    dispatch(updateCurrentPage(pageNum));
  };

  const handleSubmitSubject = () => {
    ConnectedSocket.sendSubject('주제입력');
  };

  const handleUpdateNickname = async (enteredName: string) => {
    await axios
      .post('http://3.38.151.99/api/sixHat/user/nickname', {
        shRoomId: Number(roomId),
        nickname: enteredName,
      })
      .then(res => {
        localStorage.setItem('senderId', res.data.userId);
        setSenderId(res.data.userId);
        dispatch(updateNickname(enteredName));
      });
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  const pages = [
    {
      component: <WaitingRoom onClickSubmit={handleSubmitSubject} />,
    },
    {
      component: <SelectHat onClick={sendHatData} />,
    },
  ];

  const contextValue = {
    setSubject: setSubject,
  };

  return (
    <WaitingRoomContext.Provider value={contextValue}>
      <InteractivePage pages={pages} currentPage={currentPage} />
      {/* {!nickname && <NicknameModal title="항해7팀" onClick={handleUpdateNickname} />} */}
      <ChatIcon onClick={() => setIsChatOpen(!isChatOpen)}>
        <CommentIcon />
      </ChatIcon>
      {isChatOpen && (
        <ChattingContainer>
          <ChattingRoom
            myNickname={nickname}
            chatHistory={chatHistory}
            onClick={() => setIsChatOpen(!isChatOpen)}
          />
        </ChattingContainer>
      )}
    </WaitingRoomContext.Provider>
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
