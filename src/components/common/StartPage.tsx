import React from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { HeaderBar, Card } from '.';

type StartProps = {
  title: string;
  desc: string;
  onClick?: () => void;
};

const StartPage = ({ title, desc, onClick }: StartProps) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <>
      <HeaderBar>
        <Button variant="text">로고</Button>
      </HeaderBar>
      <Grid>
        <ContentWrapper>
          <RightContent>
            <h1>{title}</h1>
            <p>{desc}</p>
            <Button variant="contained" onClick={handleOnClick}>
              시작하기
            </Button>
          </RightContent>
          <Card width={600} height={350} />
        </ContentWrapper>
      </Grid>
    </>
  );
};

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: space-evenly;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Empty = styled.div``;

export { StartPage };
