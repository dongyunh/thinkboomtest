import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectSixHat = (state: RootState) => state.sixHat;

export const sixHatSelector = createSelector(selectSixHat, state => state);
