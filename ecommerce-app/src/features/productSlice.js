import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // List of all products available for purchase
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    purchaseProduct: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product && product.quantity >= action.payload.quantity) {
        product.quantity -= action.payload.quantity;
      }
    },
  },
});

export const { addProduct, updateProduct, purchaseProduct } = productSlice.actions;

export default productSlice.reducer;
