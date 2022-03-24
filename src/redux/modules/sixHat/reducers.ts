import { createReducer } from '@reduxjs/toolkit';
import { Stats } from 'fs';
import {
  updateCurrentPage,
  getNickname,
  updateAdminState,
  changeIsSubmitState,
  getMessages,
  getUserHatInfo,
  getMyHat,
  getUserList,
} from './actions';
import { SixHatState } from './types';

const initialState: SixHatState = {
  currentPage: 0,
  nickname: null,
  senderId: null,
  isAdmin: false,
  isSubmit: false,
  chatHistory: [],
  subject: undefined,
  userList: [],
  myHat: 'red',
};

//createReducer로 reducer 생성.
export const sixHatReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(getNickname.fulfilled, (state, action) => {
      const { nickname, userId } = action.payload;
      state.nickname = nickname;
      state.senderId = userId;
    })
    .addCase(updateAdminState, (state, action) => {
      state.isAdmin = action.payload;
    })
    .addCase(changeIsSubmitState, (state, action) => {
      state.isSubmit = action.payload;
    })
    .addCase(getMessages, (state, action) => {
      if (state.chatHistory) {
        state.chatHistory = [action.payload, ...state.chatHistory];
      }
    })
    .addCase(getUserHatInfo, (state, action) => {
      const { nickname, hat } = action.payload;
      //닉네임만 뽑아낸 리스트
      const nicknameList = state.userList?.map(item => item.nickname);

      //그 닉네임 리스트중에서 지금 들어온 유저의 이름이 있는지 확인
      if (nicknameList?.includes(nickname)) {
        //유저의 이름이 있으면, 해당 유저의 인덱스를 찾기
        const idx = nicknameList.indexOf(nickname);
        //userlist에서 해당 인덱스에 있는 요소의 모자 값에 지금 들어온 모자값을 넣어주기
        state.userList[idx].hat = hat;
      } else {
        //유저의 이름이 없다면, 해당 정보를 추가해주기.
        state.userList?.push(action.payload);
      }
    })
    .addCase(getMyHat, (state, action) => {
      state.myHat = action.payload;
    })
    .addCase(getUserList, (state, action) => {
      const settedUserList = new Set(state.userList);
      settedUserList.add(action.payload);
      state.userList = [...settedUserList];
    });
});

//객체가 담겨 있는 배열안에서, 특정 값을 가지고 있는지 확인하기.
