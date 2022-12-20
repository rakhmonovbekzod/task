import { createSlice } from '@reduxjs/toolkit';
import { paymentAction } from "./action";

const initialState = {
    loading: false,
    isSuccess: false,
    result: null

}

export const paymentSlice = createSlice({
    name: 'paymentSlice',
    initialState,
    extraReducers: {
        [paymentAction.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [paymentAction.fulfilled.type]: (state, action) => {
            state.loading = false
            if (typeof action?.payload == 'object') {
                let arr = []
                for (const key in  action.payload) {
                    if (typeof action.payload[key] == 'object') {
                        for (const prop in action.payload[key]) {
                            arr.push({ [prop]: action.payload[key][prop] })
                        }
                    } else {
                        arr.push({ [key]: action.payload[key] })
                    }
    
                }
                state.result = arr
            }
            state.isSuccess = true
        },
        [paymentAction.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        }
    }
})


export default paymentSlice.reducer