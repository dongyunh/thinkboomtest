import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const updateCurrentPage = createAction<number>('sixHat/UPDATE_CURRENT_PAGE');
export const updateNickname = createAction<string>('sixHat/UPDATE_NICKNAME');
