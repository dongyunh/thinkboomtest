import { createReducer } from "@reduxjs/toolkit";
import {
    decrement,
    increment,
    incrementByAmount
} from './actions'

// initialState의 타입 선언 
type CounterState = {
    value : number;
}

//initialState 선언
const initalState : CounterState = {
    value : 0
}

//createReducer로 reducer 생성. 
export const counterReducer = createReducer(initalState, builder => {
    builder 
        .addCase(increment, state => {
            /*redux Toolkit은 mutating 로직을 리듀서 안에서 사용할 수 있게 해준다. 
            사실상 이 툴킷은 내부적으로 immer를 사용하고 있기 때문에 실제로 state를 mutate하지는 않는다. 불변성을 유지시켜준다. */
            state.value++;
        })
        .addCase(decrement, state => {
            state.value--;
        })
        .addCase(incrementByAmount, (state, action) => {
            //인자로 받아올 action.payload의 타입은 이미 actions.ts에서 선언한 상태. 
            state.value += action.payload
        })
})