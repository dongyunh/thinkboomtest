import React from 'react';
import { SelectHatBox } from '../SixHat';
import { CenterLayout, HeaderBar } from '../../common';

type SelectHatProps = {
  onClick?: (hat: string) => void;
};

const SelectHat = ({ onClick }: SelectHatProps) => {
  const handeOnClick = (hat: string) => {
    if (!onClick) return;
    onClick(hat);
  };

  const tmpSubject = '점심 뭐먹을까?';
  const userList = ['점심', '고기', '좋아', '맛있다'];

  return (
    <>
      <HeaderBar>
        <h1>로고</h1>
      </HeaderBar>
      <CenterLayout>
        <SelectHatBox
          subject={tmpSubject}
          userList={userList}
          myHat="yellow"
          onClickHat={handeOnClick}
        />
      </CenterLayout>
    </>
  );
};

export { SelectHat };
