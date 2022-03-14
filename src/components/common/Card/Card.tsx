import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type CardProps = {
  width: number;
  height: number;
  children?: React.ReactChild;
};

type StyleProps = {
  width: number;
  height: number;
};

const Card = ({ width, height, children }: CardProps) => {
  return (
    <CardWrapper>
      <StyledCard width={width} height={height}>
        {children}
      </StyledCard>
      <AfterCard width={width} height={height} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
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
