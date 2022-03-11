import React from 'react';
import { Button, TextField } from '@mui/material';
import { HeaderBar, CenterLayout } from '@components/common';
import styled from 'styled-components';

type SettingProps = {
  onClick: () => void;
};

const Setting = ({ onClick }: SettingProps) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <>
      <HeaderBar>
        <h1>로고</h1>
      </HeaderBar>
      <CenterLayout>
        <SettingWrapper>
          <h1>랜덤워드</h1>
          <p style={{ textAlign: 'center' }}>
            학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는 공간.{' '}
            <br />
            소중한 단짝 친구들과 어울릴 수 있는 우리만의 공간.
          </p>
          <TextField />
          <Button variant="contained" onClick={handleOnClick}>
            SKIP
          </Button>
        </SettingWrapper>
      </CenterLayout>
    </>
  );
};

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export { Setting };
