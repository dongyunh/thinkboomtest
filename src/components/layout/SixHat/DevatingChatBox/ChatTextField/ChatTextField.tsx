import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../../theme/styleTheme';

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
  height: 98px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const Button = styled.button`
  width: 90px;
  height: 42px;
  position: absolute;
  right: 30px;
  background-color: ${themedPalette.border_1};
  border-radius: 9px;
  border: none;
  color: ${themedPalette.main_text2};
  cursor: pointer;
`;

export { ChatTextField };
