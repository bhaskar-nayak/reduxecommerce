import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slices/Product.Slice';
import productDetailsReducer from './Slices/ProductDetails.Slice';
import cartReducer from './Slices/Cart.Slice';
export const store = configureStore({
    reducer:{
        productsInfo:productReducer,
        productDetailsInfo:productDetailsReducer,
        cartInfo:cartReducer,
    }
});