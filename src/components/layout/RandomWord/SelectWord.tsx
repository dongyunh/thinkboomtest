import React, { useEffect } from 'react';
import { CenterLayout } from '../../common';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { randomWordSelector, getRandomWord, selectWord } from '@redux/modules/randomWord';
import { SelectWordBox } from '../../layout/RandomWord/SelectWordBox';

const SelectWord = () => {
  const dispatch = useAppDispatch();
  const { randomWordList, pickedWordList } = useAppSelector(randomWordSelector);
  console.log(randomWordList);
  console.log(pickedWordList);

  useEffect(() => {
    dispatch(getRandomWord());
  }, []);

  return (
    <CenterLayout>
      <SelectWordBox />
    </CenterLayout>
  );
};

export { SelectWord };
