import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const cartList = useSelector(selectCartList);
  console.log(cartList);
  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map((cartListItem, index) => 
        // console.log(cartListItem)
        <tr key={cartListItem.id}>
          <td>{index+1}</td>
          <td>{cartListItem.title}</td>
          <td>
            <button onClick={() => dispatch(decreaseCount(cartListItem.id))}>
              -
            </button>
            {cartListItem.count}
            <button onClick={() => dispatch(increaseCount(cartListItem.id))}>
              +
            </button>
          </td>
          <td>{formatter.format(cartListItem.price * cartListItem.count)}원</td>
        </tr>
      )}
      <tr>
        <td>합계</td>
      </tr>

        {/* <tr>
          <td>1</td>
          <td>라켓</td>
          <td>2</td>
          <td>199,234원</td>
        </tr> */}
      </tbody>
    </Table>
    </>
  );
};

export default Cart;