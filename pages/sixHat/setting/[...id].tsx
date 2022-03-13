import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { InteractivePage, WaitingRoom } from '@components/common';
import { SelectHat } from '@components/layout/SixHat';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { updateCurrentPage, updateNickname, sixHatSelector } from '@redux/modules/sixHat';
import { NicknameModal } from '@components/common/Modals';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let sockJS = new SockJS('http://3.34.99.231/websocket');
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = () => {};

export type message = {
  nickname: string;
  content: string;
};

const SettingPage = () => {
  const router = useRouter();
  const roomId = router.query;
  const [_nickname, setNickname] = useState<string>();
  const [senderId, setSenderId] = useState();

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
        // console.log(res);
        setSenderId(res.data);
        dispatch(updateNickname(enteredName));
      });
  };

  const handleRouting = (path: string) => {
    router.push(path);
  };

  const pages = [
    {
      component: <WaitingRoom onClick={() => handleNextPage(1)} />,
    },
    {
      component: <SelectHat onClick={() => handleRouting(`/sixHat/devating/${roomId}`)} />,
    },
  ];

  useEffect(() => {
    if (nickname) {
      stompClient.connect({ senderId }, () => {
        stompClient.subscribe(
          `/sub/api/chat/room/${roomId}`,
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
