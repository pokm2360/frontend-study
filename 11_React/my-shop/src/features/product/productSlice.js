import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null, // 선택한 상품 상태
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    }
  }
});

// 액션 생성 함수(추가되는 데이터)
export const { getAllProducts, getSelectedProduct } = productSlice.actions;

// 선택자 함수(state는 전역 state를 뜻함)
export const selectProductList = (state) => state.product.productList;
export const selectedProduct = (state) => state.product.selectedProduct;

// 리듀서 함수들
export default productSlice.reducer;