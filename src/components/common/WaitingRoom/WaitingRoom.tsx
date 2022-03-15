import React from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { HeaderBar } from '../HeaderBar';
import { SubjectTextField } from '@components/common';

type WaitingRoomProps = {
  onClick?: () => void;
};

const WaitingRoom = ({ onClick }: WaitingRoomProps) => {
  const handleOnclick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <>
      <HeaderBar>
        <Button variant="text">로고</Button>
      </HeaderBar>
      <Grid>
        <Empty />
        <TextFieldWrapper>
          <h2>회의 주제</h2>
          <SubjectTextField />
        </TextFieldWrapper>
        <Button variant="contained" onClick={handleOnclick}>
          완료
        </Button>
      </Grid>
    </>
  );
};

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Empty = styled.div``;

export { WaitingRoom };
