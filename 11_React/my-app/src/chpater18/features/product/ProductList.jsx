import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProduct, selectProductList } from "./productSlice";
import { useState } from "react";


function ProductList() {
  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  // Rudex Store에 있는 state를 가져오는 함수
  const productList = useSelector(selectProductList);
  console.log(productList);
  const [inputProduct, setInputProduct] = useState('');

  const handleAddProduct = () => {
    dispatch(addToProductList(inputProduct));
    setInputProduct('');
  };
  return (
    <>
      <p>
        상품 추가:
        <input 
          type="text" 
          value={inputProduct}
          onChange={(e) => setInputProduct(e.target.value)}
          onKeyUp={(e) => { // 엔터쳤을때 인풋창 초기화
            if (e.key === 'Enter') {
              handleAddProduct();
            }
          }}
        />
          <button
            type="button"
            onClick={() => handleAddProduct()}
          >
            추가
          </button>
        </p>
        <p>상품 목록</p>
        <ul>
          {/* 반복 렌더링 */}
          {productList.map((product, index) => <li key={index}>{product}</li>)}
        </ul>
    </>
  );
};

export default ProductList;