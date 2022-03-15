import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme';

type MessageProps = {
  isMe: boolean;
  message: string;
  nickname: string;
};

type StyleProps = {
  isMe: boolean;
};

const Message = ({ isMe, message, nickname }: MessageProps) => {
  return (
    <MessageBox isMe={isMe}>
      {isMe ? (
        <MyBox>{message}</MyBox>
      ) : (
        <OtherMessageBox>
          <ProfileBox>
            <HatName>{nickname}</HatName>
          </ProfileBox>
          <Box>{message}</Box>
        </OtherMessageBox>
      )}
    </MessageBox>
  );
};

const MessageBox = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.isMe ? `flex-end` : 'flex-start')};
  align-items: flex-start;
  margin-bottom: 16px;
`;

const OtherMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const HatImg = styled.img`
  width: 50px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HatName = styled.span``;

const Box = styled.div`
  background-color: ${themedPalette.bg_page2};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  padding: 12px 24px;
`;

const MyBox = styled.div`
  background-color: ${themedPalette.component_1};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  padding: 12px 24px;
  color: ${themedPalette.main_text2};
`;

export { Message };
