import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme';

type ChatTextFieldProps = {
  onChange?: () => void;
};

const ChatTextField = ({ onChange }: ChatTextFieldProps) => {
  return (
    <TextFieldContainer>
      <TextField />
      <Button>입력</Button>
    </TextFieldContainer>
  );
};

const TextField = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 18px;
  height: 100%;
`;

const TextFieldContainer = styled.div`
  width: 100%;
  height: 60px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 40px;
  height: 20px;
  position: absolute;
  right: 15px;
  border: none;
  background-color: transparent;
  color: #8a8a8a;
  cursor: pointer;
`;

export { ChatTextField };
