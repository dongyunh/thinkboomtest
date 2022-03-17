import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme';

type MessageProps = {
  isMe: boolean;
  message: string | null;
  nickname: string | null;
};

type StyleProps = {
  isMe: boolean;
};

const Message = ({ isMe, message, nickname }: MessageProps) => {
  return (
    <MessageBox isMe={isMe}>
      {isMe ? (
        <MyBox>
          {message}
          <Corner />
        </MyBox>
      ) : (
        <OtherMessageBox>
          <ProfileBox>
            <HatName>{nickname}</HatName>
          </ProfileBox>
          <Box>
            {message}
            <OtherBoxCorner />
          </Box>
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
  position: relative;
`;

const OtherBoxCorner = styled.div`
  position: absolute;
  left: 0;
  top: 9.5px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: ${themedPalette.bg_page2};
  border-left: 0;
  border-top: 0;
  margin-top: -9.5px;
  margin-left: -10.5px;
`;

const MyBox = styled.div`
  position: relative;
  background-color: ${themedPalette.component_1};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  padding: 12px 24px;
  margin-right: 19px;
  color: ${themedPalette.main_text2};
`;

const Corner = styled.div`
  position: absolute;
  right: 0;
  top: 9.5px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: ${themedPalette.component_1};
  border-right: 0;
  border-top: 0;
  margin-top: -9.5px;
  margin-right: -10.5px;
`;

export { Message };
