import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type TextFieldProps = {
  text: string;
  onClick?: () => void;
};

type StyleProps = {
  isError?: boolean;
};

const Button = ({ text, onClick }: TextFieldProps) => {
  const handleOnClick = (e: any) => {
    if (!onClick) return;
    onClick();
  };

  return <StyledButton onClick={handleOnClick}>{text}</StyledButton>;
};

const StyledButton = styled.button<StyleProps>`
  border: none;
  align-items: center;
  border-radius: 12px;
  background-color: ${themedPalette.button_2};
  width: 432px;
  height: 60px;
  font-size: 26px;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${themedPalette.button_1};
    color: #ffffff;
  }
`;

export { Button };
