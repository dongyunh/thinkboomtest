import React, { useState } from 'react';
import { S_Modal } from '../Modal/S_Modal';
import { TextField, Button } from '../../../common';
import styled from 'styled-components';
import v8n from 'v8n';

type MakeRoomModalProps = {
  title: string;
  onClickDropdown1?: () => void;
  onClickDropdown2?: () => void;
  onClickButton: () => void;
};

const S_NicknameModal = ({
  title,
  onClickDropdown1,
  onClickDropdown2,
  onClickButton,
}: MakeRoomModalProps) => {
  const [nickname, setNickname] = useState<string>();
  const [isError, setIsError] = useState<boolean>();

  const validation = v8n().string().length(2, 6);

  const checkValidation = (_nickname: string) => {
    setNickname(_nickname);
    setIsError(!validation.test(_nickname));
  };

  return (
    <S_Modal>
      <MakeRoomContainer>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <TextFieldWrapper>
          <TextField
            label="사용자명"
            errorText="2~6자 이내로 설정해주세요"
            hintText="닉네임을 입력해주세요 (2~6자)"
            isError={isError}
            onChange={checkValidation}
          />
        </TextFieldWrapper>
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

const TitleWrapper = styled.div`
  padding-bottom: 70px;
`;

const TextFieldWrapper = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;

export { S_NicknameModal };
