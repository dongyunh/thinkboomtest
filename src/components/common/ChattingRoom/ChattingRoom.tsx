import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme';
import CloseIcon from '@mui/icons-material/Close';
import { Message } from './Message';
import { ChatTextField } from './ChatTextField';

type MessageType = {
  nickname: string;
  message: string;
};

type ChattingRoomType = {
  chatHistory: MessageType[];
  myNickname: string;
};

const ChattingRoom = ({ chatHistory, myNickname }: ChattingRoomType) => {
  return (
    <Container>
      <ChattingHeader>
        <Empty />
        <IconBox>
          <CloseIcon style={{ color: 'white' }} />
        </IconBox>
      </ChattingHeader>
      <MessageBox>
        {chatHistory.reverse().map(data => {
          return (
            <Message
              isMe={myNickname == data.nickname}
              message={data.message}
              nickname={data.nickname}
            />
          );
        })}
      </MessageBox>
      <ChatTextField />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 600px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 5px;
  background-color: ${themedPalette.bg_page1};
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const ChattingHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Empty = styled.div``;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${themedPalette.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 480px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;

export { ChattingRoom };
