import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    products: []
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.error = false;
            state.loading = true;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        getProductsSuccess: (state, { payload }) => {
            state.products = payload.data;
            state.loading = false;
            state.error = false;
        },
    }
})

export const {
    fetchStart,
    fetchFail,
    getProductsSuccess
} = productSlice.actions;

export default productSlice.reducer;