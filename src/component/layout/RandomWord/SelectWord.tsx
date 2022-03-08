import React from 'react';
import styled from 'styled-components';
import { HeaderBar, Card } from '../../common';

const SelectWord = () => {
  const wordList = [
    '사과',
    '바나나',
    '조조',
    '메뚜기',
    '노션',
    '고양이',
    '지피지기',
    '노을',
  ];
  return (
    <>
      <HeaderBar>
        <h1>로고</h1>
      </HeaderBar>
      <Grid>
        <WordsWrapper>
          {wordList.map(word => {
            return (
              <Card width={100} height={70}>
                <TextBox>{word}</TextBox>
              </Card>
            );
          })}
        </WordsWrapper>
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

const WordsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { SelectWord };
