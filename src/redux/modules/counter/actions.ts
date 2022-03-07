import {createAction} from "@reduxjs/toolkit"

//createAction을 통해서 액션 생성하고 export하기 reducers.ts에서 사용 

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const incrementByAmount = createAction<number>('counter/incrementByAmount')

