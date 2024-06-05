import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productList:[],
};

const productSlice = createSlice({
  name: 'product',
  initialState, 
  reducers: {
    addToProductList: (state, { payload: proudctName }) => { // state는 복사본
      state.productList.push(proudctName);
    }
    // addToProductList: (state, action) => {
    //   console.log(action);
    //   state.productList.push(action.payload);
    // },
  }
});

// 액션 생성 함수
export const { addToProductList } = productSlice.actions;

// 선택자 함수
export const selectProductList = (state) => {
  return state.product.productList
};

// 리듀서 - defalut로 export하면 이름 지정 가능
export default productSlice.reducer;