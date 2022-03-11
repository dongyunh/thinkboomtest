import { Button } from '@mui/material';
import React from 'react';

type SettingRoomProps = {
  onClick?: () => void;
};

const SettingRoom = ({ onClick }: SettingRoomProps) => {

  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <>
      <h1>세팅페이지입니다!</h1>
      <Button variant="contained" onClick={handleClick}>
        방 만들기
      </Button>
    </>
  );
};

export { SettingRoom };
