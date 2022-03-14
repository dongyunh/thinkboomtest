import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type TextFieldProps = {
  isError?: boolean;
  errorText?: string;
  onChange?: (arg: any) => void;
};

type StyleProps = {
  isError?: boolean;
};

const TextField = ({ isError, errorText, onChange }: TextFieldProps) => {
  const handleOnChange = (e: any) => {
    if (!onChange) return;
    onChange(e);
  };

  return (
    <InputWrapper>
      {isError && <ErrorText>{errorText}</ErrorText>}
      <Input isError={isError} onChange={e => handleOnChange(e.target.value)} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<StyleProps>`
  width: 432px;
  height: 40px;
  border: 5px solid ${themedPalette.button_2};
  border-radius: 12px;
  font-size: 18px;
  padding: 0 10px 0 10px;
  transition: 0.3s ease-in-out;
  ${props => props.isError && `border: 5px solid ${themedPalette.red}`};
  :focus {
    outline: none !important;
    border: 5px solid ${themedPalette.button_1};
  }
`;

const ErrorText = styled.span`
  color: ${themedPalette.red};
  font-size: 14px;
  padding: 0 0 8px 8px;
`;

export { TextField };
