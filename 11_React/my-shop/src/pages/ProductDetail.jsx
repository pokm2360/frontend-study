import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct} from "../features/product/productSlice";
import styled, { keyframes } from "styled-components";
import Loading2 from "../components/Loading2";
import { toast } from "react-toastify";

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite; // 시간은 필수
  transition: 0.5s linear;
`;

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const [alert, setAlert] = useState(true); // info alert 창
  const [orderCount, setOrderCount] = useState(); // 주문수량 상태
  const [loading, setLoading] = useState(false);

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => { // useEffect는 렌더링 다 된 후 실행됨
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/pokm2360/db-shop/products/${productId}`); // axios.get() - 프로미스 객체
        // console.log(response); // response 객체는 서버에서 구성
        // dispatch( { type: 'product/getSelectedProduct', payload: response.data } );
        dispatch(getSelectedProduct(response.data));
        // setTimeout(() => {
          //   setAlert(false);
          // }, 3000); 
        } catch (err) {
          console.error(err);
        }
      setLoading(false);
    };
    fetchProductById();
    
    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
      };
    }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast.error('🤔숫자만 입력하세요!');
      return;
    }
    setOrderCount(Number(e.target.value));
  };

  if (loading) {
    return <Loading2 />
  }
  
  // 초기값을 null로 
  if(!product) {
    return null;
  }


  const formatter = new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'});

  return (
    <Container className="pt-3">
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기 
        (힌트: 
          1) state 만들기 
          2) 조건부 렌더링 
          3) 처음 렌더링 됐을 때 setTimeout으로 타이머 설정) */}

        {alert && 
        <StyledAlert variant="info" onClose={() => setAlert(false)} dismissible>
          현재 55명이 이 상품을 보고 있습니다.
        </StyledAlert>}

      <Row>
        {/* quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
        <h4 className="pt-5">{product?.title}</h4>
        <p>{product?.content}</p>
        <p>{formatter.format(product?.price)}</p>

        <Col md={4} className="m-auto mb-3">
          {/* Quiz: text input을 제어 컴포넌트로 만들기 */}
          <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount}/>
        </Col>
        <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;