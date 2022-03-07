import { createReducer } from "@reduxjs/toolkit";
import { getKanyeQuote } from "./actions";

export type KanyeState = {
    data: { quote: string };
    pending: boolean;
    error: boolean;
};

const initialState: KanyeState = {
    data: { quote: 'click that button' },
    pending: false,
    error: false,
};

    // 이 builder 필드안에서는 다른곳에서 정의된 action을 수행할 수 있다. createAsyncThunk을 통해 만들어진 action을 포함해 다른 곳에서 만들어진 slice도 사용가능하다. api를 호출하는 것은 3가지 가능한 결과를 만들어낸다. pending, fulfilled, rejected.
export const kanyeReducer = createReducer(initialState, builder => {
    builder
      .addCase(getKanyeQuote.pending, state => {
        state.pending = true;
      })
      .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getKanyeQuote.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  });
  
  export default kanyeReducer;


