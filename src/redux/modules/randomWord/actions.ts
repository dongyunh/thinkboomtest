import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateCurrentPage = createAction<number>('randomWord/UPDATE_CURRENT_PAGE');
