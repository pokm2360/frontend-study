import MainPage from "./component/page/MainPage";
import Button from "./component/ui/Button";
import TextInput from "./component/ui/TextInput";
import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

// 일반적으로 라우팅은 App컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링되는 최상위 컴포넌트이기 때문
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/:postId' element={<PostViewPage/>} />
        {/* 여기서 :postId은 동적으로 변하는 파라미터를 위한 값 => URL 파라미터 */}
        {/* 경로에 콜론을 쓰고 파라미터명을 입력하면 연결된 컴포넌트에서 
          useParams()훅을 사용해 postId 이름으로 해당 값을 가져올 수 있음 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
