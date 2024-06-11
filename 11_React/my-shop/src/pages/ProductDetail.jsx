import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProduct, selectedProduct } from "../features/product/productSlice";


function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectedProduct);

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/pokm2360/db-shop/products/${productId}`); // axios.get() - 프로미스 객체
        console.log(response); // response 객체는 서버에서 구성
        // dispatch( { type: 'product/getSelectedProduct', payload: response.data } );
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();
  }, []);


  const formatter = new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'});

  return (
    <Container className="pt-3">
      <Row>
        {/* quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
        <h4 className="pt-5">{product.title}</h4>
        <p>{product.content}</p>
        <p>{product.price}</p>
        <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;