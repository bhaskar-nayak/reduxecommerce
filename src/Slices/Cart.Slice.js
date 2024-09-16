import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValues: [],
  totalPrice: 0,
};  

export const cartSlice = createSlice({
  name: "cartInfo",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartValues.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartValues.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.cartValues.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartValues = state.cartValues.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalPrice = state.cartValues.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const product = state.cartValues.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        state.totalPrice += product.price;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cartValues.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity ,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;