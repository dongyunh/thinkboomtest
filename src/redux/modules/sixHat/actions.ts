import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ChatData, UserData, HatType } from './types';

const prefix = 'sixHat';

export const updateCurrentPage = createAction<number>(`${prefix}/UPDATE_CURRENT_PAGE`);
export const updateNickname = createAction<string>(`${prefix}/UPDATE_NICKNAME`);
export const updateAdminState = createAction<boolean>(`${prefix}/UPDATE_ADMIN_STATE`);
export const changeIsSubmitState = createAction<boolean>(`${prefix}/CHANGE_IS_SUBMIT_STATE`);
export const getMessages = createAction<ChatData>(`${prefix}/GET_MESSAGES`);
export const getUserHatInfo = createAction<UserData>(`${prefix}/GET_USER_HAT_INFO`);
export const setMyHat = createAction<HatType>(`${prefix}/SET_MY_HAT`);
