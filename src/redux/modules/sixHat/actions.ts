import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateCurrentPage = createAction<number>('sixHat/UPDATE_CURRENT_PAGE');
