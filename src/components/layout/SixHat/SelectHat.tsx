import React from 'react';
import { SelectHatBox } from '@components/layout/SixHat';
import { CenterLayout, HeaderBar } from '@components/common';

type SelectHatProps = {
  onClick?: () => void;
};

const SelectHat = ({ onClick }: SelectHatProps) => {
  const handeOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  const tmpSubject = '점심 뭐먹을까?';
  const userList = ['점심', '고기', '좋아', '맛있다'];

  return (
    <>
      <HeaderBar><h1>로고</h1></HeaderBar>
      <CenterLayout>
        <SelectHatBox subject={tmpSubject} userList={userList} myHat="yellow" />
      </CenterLayout>
    </>
  );
};

export { SelectHat };
