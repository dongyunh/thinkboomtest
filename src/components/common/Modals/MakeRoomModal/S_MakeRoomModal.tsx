import React from 'react';
import { S_Modal } from '../Modal/S_Modal';
import { TextField, Dropdown, Button } from '../../../common';
import styled from 'styled-components';

type MakeRoomModalProps = {
  onClickDropdown1?: () => void;
  onClickDropdown2?: () => void;
  onClickButton: () => void;
};

const S_MakeRoomModal = ({
  onClickDropdown1,
  onClickDropdown2,
  onClickButton,
}: MakeRoomModalProps) => {
  const memberCount = ['1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명'];
  const timerOptions = ['1분', '2분', '3분', '4분', '5분'];

  return (
    <S_Modal>
      <MakeRoomContainer>
        <Title>방 개설하기</Title>
        <SubText>아이디어 회의, 이젠 쉽게하세요!</SubText>
        <TextField
          label="방 제목"
          errorText="방 제목 - 2~10자로 이내로 설정해주세요"
          hintText="제목을 입력해주세요"
        />
        <DropDownWrapper>
          <Dropdown options={memberCount} />
          <Dropdown options={timerOptions} />
        </DropDownWrapper>
        <Button text="개설하기" />
      </MakeRoomContainer>
    </S_Modal>
  );
};

const MakeRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 38px;
  box-sizing: border-box;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-bottom: 22px;
`;

const SubText = styled.p`
  text-align: center;
  margin: 0;
  padding-bottom: 46px;
`;

const DropDownWrapper = styled.div`
  padding: 16px 0px;
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
`;

export { S_MakeRoomModal };
