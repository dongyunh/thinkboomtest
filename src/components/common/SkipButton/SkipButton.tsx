import React from 'react';
import { Card } from '../../common';
import styled from 'styled-components';

type SkipButton = {
  onClick?: () => void;
};

const SkipButton = ({ onClick }: SkipButton) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <Card width={600} height={80}>
      <Container onClick={handleOnClick}>SKIP</Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 26px;
`;

export { SkipButton };
