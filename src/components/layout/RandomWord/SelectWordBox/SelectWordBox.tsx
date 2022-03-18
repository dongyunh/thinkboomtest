import React, { useEffect } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme/styleTheme';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import {
  randomWordSelector,
  getRandomWord,
  selectWord,
  postPickedWords,
} from '@redux/modules/randomWord';
import { Card, PrimaryButton } from '@components/common';

const SelectWordBox = () => {
  const dispatch = useAppDispatch();
  const { randomWordList, pickedWordList } = useAppSelector(randomWordSelector);

  const handleGetRandomWord = () => {
    dispatch(getRandomWord());
  };

  const handleComplete = () => {
    dispatch(postPickedWords());
  };

  useEffect(() => {
    handleGetRandomWord();
  }, []);

  return (
    <Container>
      <SubjectBox>주제어</SubjectBox>
      <DownBox>
        <LeftBox>
          <WordGrid>
            {randomWordList.map((word, idx) => {
              return (
                <Card width={350} height={110} key={word}>
                  <RandomWordBox onClick={() => selectWord({ word, idx })}>{word}</RandomWordBox>
                </Card>
              );
            })}
          </WordGrid>
          <RandomBoxWrapper>
            <PrimaryButton text="랜덤" width={90} height={70} onClick={handleGetRandomWord} />
          </RandomBoxWrapper>
        </LeftBox>
        <RightBox>
          <SelectedWords>
            {pickedWordList.map(word => {
              return <Word>{word}</Word>;
            })}
          </SelectedWords>
          <CompleteBox onClick={handleComplete}>완료</CompleteBox>
        </RightBox>
      </DownBox>
    </Container>
  );
};

const Container = styled.div`
  width: 1044px;
  height: 586px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
`;

const SubjectBox = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${themedPalette.box_subject};
  color: ${themedPalette.main_text2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

const DownBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const LeftBox = styled.div`
  display: flex;
`;

const RandomBoxWrapper = styled.div`
  padding-top: 10px;
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 508px;
  box-sizing: border-box;
  border-left: 5px solid ${themedPalette.border_1};
`;

const SelectedWords = styled.div`
  width: 320px;
  height: 100%;
  box-sizing: border-box;
`;

const Word = styled.div`
  color: ${themedPalette.main_text1};
`;

const CompleteBox = styled.div`
  background-color: ${themedPalette.box_complete};
  color: ${themedPalette.main_text2};
  width: 320px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  border-radius: 0 0 18px 0;
`;

const WordGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 28px;
`;

const RandomWordBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { SelectWordBox };
