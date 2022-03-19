import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectDarkMode = (state: RootState) => state.darkMode;

export const sixHatSelector = createSelector(selectDarkMode, state => state);
