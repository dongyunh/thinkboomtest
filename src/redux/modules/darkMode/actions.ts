import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { themeType } from './types';

const prefix = 'darkmode';

export const enableDarkMode = createAction(`${prefix}/ENABLE_DARK_MODE`);
export const enableLightMode = createAction(`${prefix}/ENABLE_LIGHT_MODE`);
export const setSystemTheme = createAction<themeType>(`${prefix}/SET_SYSTEM_THEME`);
