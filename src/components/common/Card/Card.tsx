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
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.section<StyleProps>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${themedPalette.bg_page2};
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;

export { Card };
