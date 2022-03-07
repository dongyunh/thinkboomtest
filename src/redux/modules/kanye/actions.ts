import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

//dispatch를 통해서 액션이 일어나면 이 API call 이 실행될 것이다. redux-thunk에서 사용하는 비동기 액션은 이 createAsyncThunk를 통해 수행할 수 있다. 
export const getKanyeQuote = createAsyncThunk('kanye/kanyeQuote', async() => {
    const response = await axios.get('https://api.kanye.rest/');

    return response.data;
})

