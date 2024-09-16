import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialValue = {
    isloading: false,
    data: [],
    error: null,
};

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const response = await axios.get('http://localhost:9091/myapp/listproducts');
    return response.data;
});

export const productSlice = createSlice({
    name: "productsInfo",
    initialState: initialValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isloading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
