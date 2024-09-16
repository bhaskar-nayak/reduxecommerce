import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialValue={
    isloading:true,
    data:[],
    error:null,
    selectedSize: null // Initialize selectedSize
};
export const fetchAllProDetails = createAsyncThunk('products/fetchAllProDetails', async (productId) => {
    try {
        const response = await axios.get(`http://localhost:9091/myapp/product/${productId}`);
        // console.log('Fetched product details:', response.data); 
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
});
export const productDetailsSlice = createSlice({
    name:"productDetailsInfo",
    initialState:initialValue,
    reducers:{
        setSelectedSize:(state, action)=>{
            state.selectedSize = action.payload; // Corrected typo here
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchAllProDetails.pending, (state)=>{
            state.isloading = true;
        })
        .addCase(fetchAllProDetails.fulfilled, (state, action) =>{
            state.isloading = false;
            state.data = action.payload;
        })
        .addCase(fetchAllProDetails.rejected, (state, action) =>{
            state.isloading = false;
            state.error = action.error.message;
        })
    }
});
export const {setSelectedSize} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;