import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectRandomWord = (state: RootState) => state.randomWord;

export const randomWordSelector = createSelector(selectRandomWord, state => state);
