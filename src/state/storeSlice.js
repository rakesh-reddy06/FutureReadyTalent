import { createSlice } from "@reduxjs/toolkit";
import storeProducts from "./storeProducts";

const initialState = {
  products: [...storeProducts],
  cart: [],
  currentProduct: {},
  deliveryFee: 8.51,
  modalOpen: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;
      const localProduct = state.products.find((product) => product.id === id);

      localProduct.inCart = true;
      localProduct.count += 1;
      localProduct.total += localProduct.price;

      state.products = state.products.map((product) => {
        if (product.id === id) return localProduct;
        else return product;
      });

      state.cart.push(localProduct);
      state.currentProduct = localProduct;
    },
    setCurrentProduct(state, action) {
      const id = action.payload;
      const localProduct = state.products.find((product) => product.id === id);
      state.currentProduct = localProduct;
    },
    incrementProduct(state, action) {
      const id = action.payload;
      const localProduct = state.products.find((product) => product.id === id);
      localProduct.count += 1;
      localProduct.total += localProduct.price;

      state.cart = state.cart.map((product) => {
        if (product.id === id) return localProduct;
        else return product;
      });
    },
    decrementProduct(state, action) {
      const id = action.payload;
      const localProduct = state.products.find((product) => product.id === id);

      if (localProduct.count > 1) {
        localProduct.count -= 1;
        localProduct.total -= localProduct.price;

        state.cart = state.cart.map((product) => {
          if (product.id === id) return localProduct;
          else return product;
        });
      }
    },
    removeItem(state, action) {
      let id = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);
      state.products = state.products.map((product) => {
        if (product.id === id) return { ...product, inCart: false };
        else return product;
      });
    },
    clearCart(state) {
      state.cart = [];
      state.products = state.products.map((product) => {
        return { ...product, inCart: false };
      });
    },
    toggleModal(state) {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const {
  addToCart,
  toggleModal,
  incrementProduct,
  decrementProduct,
  removeItem,
  clearCart,
  setCurrentProduct,
} = storeSlice.actions;

export default storeSlice.reducer;
