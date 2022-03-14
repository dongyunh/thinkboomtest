import React, { useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme/styleTheme';
import { Card } from '../../../common';
const HatSrc = require('../../../../../public/hat.png');

type SelectHatBoxProps = {
  subject: string;
  myHat: string;
  userList: string[];
  onClickHat: (arg: any) => void;
  onClickRandom: () => void;
};

type StyleProps = {
  width?: number;
  height?: number;
  isMouseOver?: boolean;
};

const SelectHatBox = ({
  subject,
  myHat,
  userList,
  onClickHat,
  onClickRandom,
}: SelectHatBoxProps) => {
  return (
    <Container>
      <SubjectBox>
        {subject}
        <RandomButton onClick={onClickRandom}>랜덤</RandomButton>
      </SubjectBox>
      <DownBox>
        <UserListBox>
          <MyHatBox>
            <HatImg src={HatSrc} width={70} />
          </MyHatBox>
          <UserList>
            {userList.map(user => {
              return <User>{user}</User>;
            })}
          </UserList>
        </UserListBox>
        <ChatViewBox></ChatViewBox>
      </DownBox>
    </Container>
  );
};

const Container = styled.div`
  width: 1044px;
  height: 586px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
`;

const MyHatBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 18px;
  border: 5px solid ${themedPalette.border_1};
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubjectBox = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${themedPalette.black};
  color: ${themedPalette.main_text2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: relative;
`;

const RandomButton = styled.button`
  width: 70px;
  height: 45px;
  position: absolute;
  right: 70px;
  border: none;
  border-radius: 12px;
`;

const DownBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`;

const UserListBox = styled.div`
  width: 212px;
  height: 514px;
  border-right: 5px solid ${themedPalette.black};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const ChatViewBox = styled.div`
  width: 832px;
  height: 512px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 32px 48px;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  margin-bottom: 8px;
`;

const HatImg = styled.img<StyleProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 15px;
`;

export { SelectHatBox };

// NOTE : 이 페이지에서 처리해야 할 내용 1.모자선택시 로직 2.랜덤 로직
