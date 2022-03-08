import { createReducer } from '@reduxjs/toolkit';
import { updateCurrentPage } from './actions';

export type RandomWordState = {
  currentPage: number;
};

const initialState: RandomWordState = {
  currentPage: 0,
};

//createReducer로 reducer 생성.
export const randomWordReducer = createReducer(initialState, builder => {
  builder.addCase(updateCurrentPage, (state, action) => {
    state.currentPage = action.payload;
  });
});
