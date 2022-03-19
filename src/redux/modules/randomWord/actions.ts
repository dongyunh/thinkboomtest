import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { useRouter } from 'next/router';

type SelectWordPayload = {
  word: string;
  idx: number;
};

type ResponseType = {
  rwId: string;
  wordList: string[];
};

const prefix = 'randomWord';

export const updateCurrentPage = createAction<number>(`${prefix}/UPDATE_CURRENT_PAGE`);
export const selectWord = createAction<SelectWordPayload>(`${prefix}/SELECT_WORD`);
export const getSubject = createAction<string>(`${prefix}/GET_SUBJECT`);

export const getRandomWord = createAsyncThunk(`${prefix}/GET_RANDOM_WORD`, async () => {
  const response = await axios.get('http://3.38.151.99/randomWord');
  const router = useRouter();
  await router.push(`/sixHat`);
  return response.data;
});

export const postPickedWords = createAsyncThunk(
  `${prefix}/POST_PICKED_WORDS`,
  async (arg, { getState }) => {
    const { randomWord } = getState() as RootState;
    const { pickedWordList } = randomWord;

    const response: ResponseType = await axios.post(
      'http://59f2-121-131-137-167.ngrok.io/randomWord',
      {
        wordList: pickedWordList,
      },
    );
    console.log(response);
    const router = useRouter();
    router.push(`/randomWord/result/${response.rwId}`);
  },
);
