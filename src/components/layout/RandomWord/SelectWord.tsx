import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { CenterLayout } from '../../common';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { randomWordSelector, getRandomWord, selectWord } from '@redux/modules/randomWord';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SelectWordBox } from '../../layout/RandomWord/SelectWordBox';

const SelectWord = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { randomWordList, pickedWordList } = useAppSelector(randomWordSelector);
  console.log(randomWordList);
  console.log(pickedWordList);

  useEffect(() => {
    dispatch(getRandomWord());
  }, []);

  const handleSelectWord = (word: string, idx: number) => {
    dispatch(selectWord({ word, idx }));
  };

  const handlePostPickedWord = async () => {
    const res = await axios.post('http://c906-121-131-137-167.ngrok.io/randomword', {
      wordList: pickedWordList,
    });

    router.push(`/randomWord/result/${res.data.id}`);
  };

  return (
    <>
      <CenterLayout>
        <CenterBox>
          <Empty />
          <SelectWordBox />
        </CenterBox>
      </CenterLayout>
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
