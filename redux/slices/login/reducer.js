import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from "./action";

const initialState = {
    loading: false,
    isSuccess: false,
    userInfo: null,

}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    extraReducers: {
        [loginAction.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [loginAction.fulfilled.type]: (state, action) => {
            state.loading = false
            state.userInfo = action?.payload?.data
            state.isSuccess = true
            state.isLogged = true
        },
        [loginAction.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        }
    }
})


export default loginSlice.reducer