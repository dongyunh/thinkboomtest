import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const prefix = 'sixHat';

export const updateCurrentPage = createAction<number>(`${prefix}/UPDATE_CURRENT_PAGE`);
export const updateNickname = createAction<string>(`${prefix}/UPDATE_NICKNAME`);
export const updateAdminState = createAction<boolean>(`${prefix}/UPDATE_ADMIN_STATE`);
export const changeIsSubmitState = createAction<boolean>(`${prefix}/CHANGE_IS_SUBMIT_STATE`);
