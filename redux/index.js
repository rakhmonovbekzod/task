import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import login from "./slices/login/reducer";
import payment from "./slices/payment/reducer";

export const store = configureStore({
    reducer: {
        login,
        payment
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);