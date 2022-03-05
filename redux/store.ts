import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterReducer } from "./modules/counter"
import { kanyeReducer } from './modules/kanye';

// 이곳은 리듀서를 합치는 곳이라는 사실만 기억하기!
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        kanyeQuote: kanyeReducer,
    }
})

//이 코드들은 크게 신경 쓰지 말기 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

