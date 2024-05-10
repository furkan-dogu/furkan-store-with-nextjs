import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    loading: false,
    error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false
            state.token = payload.token
        },
        logoutSuccess: (state) => {
            state.loading = false
            state.token = ""
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
    }
})

export const { fetchStart, loginSuccess, logoutSuccess, fetchFail } = authSlice.actions

export default authSlice.reducer