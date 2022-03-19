import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const PrimaryButton = ({ text, disabled, onClick }: PrimaryButtonProps) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <ButtonWrapper>
      <StyledButton disabled={disabled} onClick={handleOnClick}>
        {text}
      </StyledButton>
      <AfterButton />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  height: 75px;
  width: 212px;
  background-color: ${themedPalette.cute_button_normal};
  color: ${themedPalette.main_text2};
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
  position: relative;
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  cursor: pointer;

  :disabled {
    background-color: ${themedPalette.cute_button_disabled};
    color: ${themedPalette.main_text1};
    cursor: not-allowed;
  }

  :hover {
    transform: translate(8px, 8px);
  }
`;

const AfterButton = styled.button`
  height: 75px;
  width: 212px;
  border: 5px solid ${themedPalette.component_1};
  background: transparent;
  position: absolute;
  border-radius: 18px;
  z-index: -1;
  left: 8px;
  top: 8px;
`;

export { PrimaryButton };
