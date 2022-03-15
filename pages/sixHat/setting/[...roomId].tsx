import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
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

type SettingPageProps = {
  userId: string;
};

const SettingPage = ({ userId }: SettingPageProps) => {
  const router = useRouter();
  const { roomId } = router.query;
  const [_nickname, setNickname] = useState<string>();
  // const [senderId, setSenderId] = useState();
  const senderId = localStorage.getItem('senderId');

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
          `/sub/api/sixHat/room/${roomId}`,
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

  // roomId:String
  // hat:String
  // senderId:Long,
  // sender:String
  // message:String,

  // 웹소켓이 연결될 때 까지 실행하는 함수
  // const waitForConnection = (ws, callback) => {
  //   setTimeout(() => {
  //     if (ws.ws.readyState === 1) {
  //       callback();
  //     } else {
  //       waitForConnection(ws, callback);
  //     }
  //   }, 0.1);
  // };

  // const sendContents = (contents: string | number) => {
  //   try {
  //     // send할 데이터
  //     const data = {
  //       type: 'TALK',
  //       roomId: room_id,
  //       sender: sender_nick,
  //       senderImg: sender_profile,
  //       senderId: sender_id,
  //       message: new_message,
  //     };
  //     waitForConnection(ws, () => {
  //       ws.debug = null;

  //       stompClient.send('/pub/message', { token: token }, JSON.stringify(data));
  //       logger('메세지보내기 상태', ws.ws.readyState);
  //     });
  //   } catch (e) {
  //     logger('message 소켓 함수 에러', e);
  //     logger('메세지보내기 상태', ws.ws.readyState);
  //   }
  // };

  return (
    <>
      <InteractivePage pages={pages} currentPage={currentPage} />
      {!nickname && <NicknameModal title="항해7팀" onClick={handleUpdateNickname} />}
    </>
  );
};

export default SettingPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { roomId } = query;
  return {
    props: {
      roomId,
    },
  };
};
