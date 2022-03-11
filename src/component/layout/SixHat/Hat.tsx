import React from 'react';
import styled from 'styled-components';

type HatType = 'red' | 'blue' | 'white' | 'yellow' | 'black' | 'green';

type HatProps = {
  width: number;
  height: number;
  hatType: HatType;
};

type StyleProps = {
  width: number;
  height: number;
};

const Hat = ({ width, height, hatType }: HatProps) => {
  const hatTypes = {
    red: 'redhat.png',
    blue: 'bluehat.png',
    white: 'whitehat.png',
    yellow: 'yellowhat.png',
    black: 'blackhat.png',
    green: 'greenhat.png',
  };

  return <HatImage src={hatTypes[hatType]} width={width} height={height} alt="모자 이미지" />;
};

const HatImage = styled.img<StyleProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: contain;
`;

export { Hat };
