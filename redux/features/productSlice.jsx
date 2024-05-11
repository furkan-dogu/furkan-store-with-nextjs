import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    products: [],
    categories: []
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
        getCategoriesSuccess: (state, { payload }) => {
            state.categories = payload.data;
            state.loading = false;
            state.error = false;
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    getProductsSuccess,
    getCategoriesSuccess
} = productSlice.actions;

export default productSlice.reducer;