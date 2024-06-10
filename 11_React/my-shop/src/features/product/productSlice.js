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
      console.log(action.payload);
      state.productList = action.payload;
    }
  }
});

// 액션 생성 함수(추가되는 데이터)
export const { getAllProducts } = productSlice.actions;

// export const selectProductList = (state) => {
//   return state.
// }

// 리듀서 함수들
export default productSlice.reducer;