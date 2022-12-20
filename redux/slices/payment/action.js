import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from "../../../services/api";

export const paymentAction = createAsyncThunk(
    'payment/paymentAction',
    async (data) => {
        try {
            const repsonse = await post('/payment',data)
            return repsonse?.data
        } catch (error) {
            throw error
        }
    }

)