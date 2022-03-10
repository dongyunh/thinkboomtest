import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { HeaderBar, Card, CenterLayout } from '../../common';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { randomWordSelector, getRandomWord, selectWord } from '../../../redux/modules/randomWord';
import axios from 'axios';
import { useRouter } from 'next/router';

type WordType = {
  word: string;
  contents: string;
};

const SelectWord = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { randomWordList, pickedWordList } = useAppSelector(randomWordSelector);
  console.log(randomWordList);
  console.log(pickedWordList);

  useEffect(() => {
    dispatch(getRandomWord());
  }, []);

  const handleSelectWord = (word: WordType, idx: number) => {
    dispatch(selectWord({ word, idx }));
  };

  const handlePostPickedWord = async () => {
    const res = await axios.post('http://c906-121-131-137-167.ngrok.io/randomword', {
      wordList: pickedWordList,
    });

    // router.push(`/randomWord/result/${res.id}`);
  };

  return (
    <>
      <HeaderBar>
        <h1>로고</h1>
      </HeaderBar>
      <CenterLayout>
        <CenterBox>
          <Empty />
          <WordsWrapper>
            {randomWordList?.map((item, idx) => {
              return (
                <Card key={idx} width={100} height={70}>
                  <TextBox onClick={() => handleSelectWord(item, idx)}>{item.word}</TextBox>
                </Card>
              );
            })}
          </WordsWrapper>
          <Card width={300} height={700}>
            <>
              {pickedWordList?.map((item, idx) => {
                return <div key={idx}>{item.word}</div>;
              })}
            </>
          </Card>
        </CenterBox>
      </CenterLayout>
      <Button onClick={handlePostPickedWord}>보내기</Button>
    </>
  );
};

const Empty = styled.div``;

const WordsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

const CenterBox = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { SelectWord };
