import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { useRouter } from 'next/router';

type SelectWordPayload = {
  word: string;
  idx: number;
};

type ResponseType = {
  data: {
    rwId: string;
    wordList: string[];
  };
};

const prefix = 'randomWord';

export const updateCurrentPage = createAction<number>(`${prefix}/UPDATE_CURRENT_PAGE`);
export const selectWord = createAction<SelectWordPayload>(`${prefix}/SELECT_WORD`);
export const getSubject = createAction<string>(`${prefix}/GET_SUBJECT`);

export const getRandomWord = createAsyncThunk(`${prefix}/GET_RANDOM_WORD`, async () => {
  const response = await axios.get('http://13.125.59.252/randomWord');
  return response.data;
});

export const postPickedWords = createAsyncThunk(
  `${prefix}/POST_PICKED_WORDS`,
  async (arg, { getState }) => {
    const { randomWord } = getState() as RootState;
    const { pickedWordList } = randomWord;

    const response: ResponseType = await axios.post('http://13.125.59.252/randomWord', {
      wordList: pickedWordList,
    });
    console.log(response.data.rwId);
    const router = useRouter();
    router.push(`/randomWord/result/${response.data.rwId}`);
  },
);
