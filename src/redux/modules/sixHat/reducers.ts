import { createReducer } from '@reduxjs/toolkit';
import { updateCurrentPage } from './actions';

export type SixHatState = {
  currentPage: number;
};

const initialState: SixHatState = {
  currentPage: 0,
};

//createReducer로 reducer 생성.
export const sixHatReducer = createReducer(initialState, builder => {
  builder.addCase(updateCurrentPage, (state, action) => {
    state.currentPage = action.payload;
  });
});
