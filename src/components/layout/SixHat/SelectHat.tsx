import React from 'react';
import { SelectHatBox } from '../SixHat';
import { CenterLayout, HeaderBar, PrimaryButton } from '../../common';
import styled from 'styled-components';
import userList from '../../../mock/userListData';

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

  return (
    <CenterLayout>
      <>
        <Empty />
        <SelectHatBox
          subject={tmpSubject}
          userList={userList}
          myHat="yellow"
          onClickHat={handeOnClick}
        />
        <ButtonWrapper>
          <PrimaryButton text="완료" onClick={onClickComplete} />
        </ButtonWrapper>
      </>
    </CenterLayout>
  );
};

export { SelectHat };

const Empty = styled.div`
  height: 40px;
`;

const ButtonWrapper = styled.div`
  padding-top: 10px;
`;

// TODO : 유저 리스트에는 유저의 닉네임과 모자 정보가 담겨있어야한다. 해당 내용을 업데이트해주고, 관리하고 있는 상태가 있어야 한다.
