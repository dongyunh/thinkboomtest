import React, { useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type HatchCardProps = {
  width: number;
  height: number;
  children?: React.ReactChild;
  onMouseUp?: () => void;
};

type StyleProps = {
  width?: number;
  height?: number;
  isMouseOver?: boolean;
};

const HatchCard = ({ width, height, children, onMouseUp }: HatchCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleOnMouseUp = () => {
    if (!onMouseUp) {
      setIsMouseOver(true);
    } else {
      onMouseUp();
      setIsMouseOver(true);
    }
  };

  return (
    <CardWrapper
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
      onMouseDown={() => setIsMouseOver(false)}
      onMouseUp={handleOnMouseUp}
    >
      <StyledCard width={width} height={height}>
        {children}
      </StyledCard>
      <AfterCard width={width} height={height} isMouseOver={isMouseOver} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledCard = styled.div<StyleProps>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${themedPalette.card_bg_normal};
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
  position: relative;
  transition: 0.05s ease-in-out;

  :active {
    transform: translate(8px, 8px);
  }
`;

const AfterCard = styled.div<StyleProps>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
  z-index: -1;
  left: 8px;
  top: 8px;

  ${props => props.isMouseOver && `box-shadow: 0 3px 0 #000, 0 3px 0px 3px #FF6B6B;`}
`;

export { HatchCard };
