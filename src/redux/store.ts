import { Action, configureStore, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import { counterReducer } from './modules/counter';
import { kanyeReducer } from './modules/kanye';
import { randomWordReducer } from './modules/randomWord';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['randomWord'],
  // blacklist -> 그것만 제외합니다
};

const reducers = combineReducers({
  counter: counterReducer,
  kanyeQuote: kanyeReducer,
  randomWord: randomWordReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// 이곳은 리듀서를 합치는 곳이라는 사실만 기억하기!
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//이 코드들은 크게 신경 쓰지 말기
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
