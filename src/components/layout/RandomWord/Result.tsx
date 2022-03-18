import React, { useState } from 'react';
import { ResultModal } from '../../common/Modals';
import { Button } from '@mui/material';
import { CenterLayout } from '@components/common';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';
import { useAppSelector } from '@redux/hooks';
import { selectRandomWord } from '@redux/modules/randomWord';

const Result = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pickedWordList } = useAppSelector(selectRandomWord);

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log('여기에는 공유를 취소하는 api가 들어올 것입니다. ');
  };

  return (
    <CenterLayout>
      <>
        <Title>선택된 단어</Title>
        <ResultGrid>
          {pickedWordList.map(word => {
            return <Word>{word}</Word>;
          })}
        </ResultGrid>
        {isOpen && <ResultModal onClickBtn1={handleCancel} onClickBtn2={handleConfirm} />}
      </>
    </CenterLayout>
  );
};

const Title = styled.h1`
  color: ${themedPalette.main_text1};
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 80px;
  row-gap: 66px;
`;

const Word = styled.div`
  width: 318px;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Result };
