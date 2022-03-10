import { createReducer } from '@reduxjs/toolkit';
import { updateCurrentPage, updateNickname } from './actions';

export type SixHatState = {
  currentPage: number;
  nickname: string | null;
};

const initialState: SixHatState = {
  currentPage: 0,
  nickname: null,
};

//createReducer로 reducer 생성.
export const sixHatReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(updateNickname, (state, action) => {
      state.nickname = action.payload;
    });
});
