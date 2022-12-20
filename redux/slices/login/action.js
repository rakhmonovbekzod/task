import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from "../../../services/api";

export const loginAction = createAsyncThunk(
    'payment/fetchPayments',
    async (data) => {
        try {
            const repsonse = await post('/login',data)
            return repsonse
        } catch (error) {
            throw error
        }
    }

)