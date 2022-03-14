import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type CardProps = {
  width: number;
  height: number;
  children?: React.ReactChild;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

type StyleProps = {
  width: number;
  height: number;
};

const Card = ({ width, height, children, onMouseOver, onMouseOut }: CardProps) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onMouseOver) return;
    onMouseOver();
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onMouseOut) return;
    onMouseOut();
  };

  return (
    <CardWrapper onMouseOver={e => handleOnMouseOver(e)} onMouseOut={e => handleOnMouseOut(e)}>
      <StyledCard width={width} height={height}>
        {children}
      </StyledCard>
      <AfterCard width={width} height={height} />
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
  background-color: ${themedPalette.component_2};
  border: 5px solid ${themedPalette.component_1};
  border-radius: 18px;
  position: relative;
  transition: 0.3s ease-in-out;

  :hover {
    transform: translate(10px, 10px);
  }
`;

const AfterCard = styled.div<StyleProps>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${themedPalette.component_2};
  border: 5px solid ${themedPalette.component_1};
  border-radius: 18px;
  z-index: -1;
  left: 10px;
  top: 10px;
`;

export { Card };
