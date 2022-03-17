import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type PrimaryButtonProps = {
  buttonColor?: 'gray' | 'black';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

type StyleProps = {
  buttonColor: 'gray' | 'black';
};

const PrimaryButton = ({ buttonColor = 'black', text, disabled, onClick }: PrimaryButtonProps) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <ButtonWrapper>
      <StyledButton disabled={disabled} buttonColor={buttonColor}>
        {text}
      </StyledButton>
      <AfterButton buttonColor={buttonColor} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button<StyleProps>`
  height: 75px;
  width: 212px;
  background-color: ${props =>
    props.buttonColor === 'black' ? themedPalette.button_1 : themedPalette.button_2};
  color: ${props =>
    props.buttonColor === 'black' ? themedPalette.main_text2 : themedPalette.main_text1};
  border: 5px solid ${themedPalette.component_1};
  border-radius: 18px;
  position: relative;
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  cursor: pointer;

  :disabled {
    background-color: ${props =>
      props.buttonColor === 'black' ? themedPalette.button_1 : themedPalette.button_2};
  }

  :hover {
    transform: translate(8px, 8px);
  }
`;

const AfterButton = styled.button<StyleProps>`
  height: 75px;
  width: 212px;
  background-color: ${themedPalette.component_2};
  border: 5px solid ${themedPalette.component_1};
  position: absolute;
  border-radius: 18px;
  z-index: -1;
  left: 8px;
  top: 8px;
`;

export { PrimaryButton };
