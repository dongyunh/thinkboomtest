import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type {AppDispatch, RootState} from "./store"

// 이 코드들은 단순히 useDispatch와 useSelector를 사용하는 것이 아니라, 타입이 지정된 방식으로 사용하기 위함이다. 이것은 자주 사용되는 boilerplate이니 큰 신경 쓸 것 x  
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector


