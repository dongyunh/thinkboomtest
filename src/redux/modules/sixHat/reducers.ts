import { createReducer } from '@reduxjs/toolkit';
import {
  updateCurrentPage,
  updateNickname,
  updateAdminState,
  changeIsSubmitState,
  getMessages,
} from './actions';
import { SixHatState } from './types';

const initialState: SixHatState = {
  currentPage: 0,
  nickname: null,
  isAdmin: false,
  isSubmit: false,
  chatHistory: [],
};

//createReducer로 reducer 생성.
export const sixHatReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(updateNickname, (state, action) => {
      state.nickname = action.payload;
    })
    .addCase(updateAdminState, (state, action) => {
      state.isAdmin = action.payload;
    })
    .addCase(changeIsSubmitState, (state, action) => {
      state.isSubmit = action.payload;
    })
    .addCase(getMessages, (state, action) => {
      if(state.chatHistory){
        state.chatHistory.push(action.payload);
      }
    });
});
