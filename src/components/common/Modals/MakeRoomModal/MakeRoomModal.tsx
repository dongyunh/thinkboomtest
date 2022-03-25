import React, { useState } from 'react';
import { Modal } from '../Modal';
import { TextField, Dropdown, Button } from '../../../common';
import styled from 'styled-components';
import v8n from 'v8n';
import { memberCount, timerOptions } from '../../../../mock/makeRoomData';
import { themedPalette } from '../../../../theme';

type MakeRoomModalProps = {
  onClickDropdown1?: () => void;
  onClickDropdown2?: () => void;
  onClickButton: (title: string, number: number, time: number) => void;
};

const MakeRoomModal = ({
  onClickDropdown1,
  onClickDropdown2,
  onClickButton,
}: MakeRoomModalProps) => {
  const [title, setTitle] = useState<string>('test');
  const [number, setNumber] = useState<number>(1);
  const [timer, setTimer] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>();

  const validation = v8n().not.null().string().length(2, 10);
  const [disabled, setDisabled] = useState(!validation.test(title));

  const checkValidation = (_title: string) => {
    setTitle(_title);
    setIsError(!validation.test(_title));
    setDisabled(!validation.test(_title));
  };

  const handleOnClickButton = (_title: string, _number: number, _time: number) => {
    if (!onClickButton) return;
    onClickButton(_title, _number, _time);
  };

  return (
    <Modal>
      <MakeRoomContainer>
        <Title>방 개설하기</Title>
        <SubText>아이디어 회의, 이젠 쉽게하세요!</SubText>
        <TextField
          label="방 제목"
          errorText="방 제목은 2~10자로 이내로 설정해주세요"
          hintText="제목을 입력해주세요"
          isError={isError}
          onChange={checkValidation}
        />
        <DropDownWrapper>
          <Dropdown options={memberCount} onClick={setNumber} />
          <Dropdown options={timerOptions} onClick={setTimer} />
        </DropDownWrapper>
        <Button
          text="개설하기"
          onClick={() => handleOnClickButton(title, number, timer)}
          disabled={disabled}
        />
      </MakeRoomContainer>
    </Modal>
  );
};

const MakeRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 38px;
  box-sizing: border-box;
  width: 100%;
  background-color: ${themedPalette.bg_page3};
  border-radius: 18px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-bottom: 22px;
  color: ${themedPalette.main_text1};
`;

const SubText = styled.p`
  text-align: center;
  margin: 0;
  padding-bottom: 46px;
  color: ${themedPalette.main_text1};
`;

const DropDownWrapper = styled.div`
  padding: 16px 0px;
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export { MakeRoomModal };

/**
 * TODO : 1.모든 요소 입력 안되었을 때, 버튼 diabled 처리하기
 */
