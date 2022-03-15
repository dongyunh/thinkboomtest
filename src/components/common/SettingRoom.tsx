import { Button } from '@mui/material';
import React from 'react';
import { MakeRoomModal } from '@components/common/Modals/MakeRoomModal';

type SettingRoomProps = {
  onClick?: () => void;
};

const SettingRoom = ({ onClick }: SettingRoomProps) => {
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return <MakeRoomModal onClickButton={handleClick} />;
};

export { SettingRoom };
