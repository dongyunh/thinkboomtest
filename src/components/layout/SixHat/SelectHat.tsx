import React from 'react';
import { SelectHatBox } from '../SixHat';
import { CenterLayout, HeaderBar, PrimaryButton } from '../../common';
import styled from 'styled-components';

type SelectHatProps = {
  onClick?: (hat: string) => void;
  onClickComplete: () => void;
};

const SelectHat = ({ onClick, onClickComplete }: SelectHatProps) => {
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
        <>
          <Empty />
          <SelectHatBox
            subject={tmpSubject}
            userList={userList}
            myHat="yellow"
            onClickHat={handeOnClick}
          />
          <PrimaryButton text="완료" onClick={onClickComplete} />
        </>
      </CenterLayout>
    </>
  );
};

const Empty = styled.div``;

// TODO : 유저 리스트에는 유저의 닉네임과 모자 정보가 담겨있어야한다. 해당 내용을 업데이트해주고, 관리하고 있는 상태가 있어야 한다.
