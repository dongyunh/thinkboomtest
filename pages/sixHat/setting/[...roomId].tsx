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
import CommentIcon from '@mui/icons-material/Comment';
import styled from 'styled-components';
import { messageData } from 'src/mock/messageData';
import { HandleSocket } from '../../../src/utils/socketHelper';

const ConnectedSocket = new HandleSocket('http://3.34.99.231/websocket');

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
  const [subject, setSubject] = useState();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const dispatch = useAppDispatch();

  const localSenderId = localStorage.getItem('senderId');
  const [senderId, setSenderId] = useState(localSenderId ? Number(localSenderId) : null);

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
        localStorage.setItem('senderId', res.data);
        setSenderId(res.data);
        dispatch(updateNickname(enteredName));
      });
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (nickname) {
      ConnectedSocket.connect(senderId, roomId);
    }
  }, [nickname]);

  const sendHatData = (hat: string) => {
    ConnectedSocket.sendHatData(nickname, hat);
  };

  const pages = [
    {
      component: (
        <WaitingRoom onClick={() => nickname && ConnectedSocket.sendMessage(nickname, '안녕')} />
      ),
    },
    {
      component: <SelectHat onClick={sendHatData} />,
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
