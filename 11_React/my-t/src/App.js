import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";

// 패키지 설치
// npm install styled-components styled-reset react-icon

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
// 글로벌 스타일 안에 작성 or Reset 컴포넌트 작성
const GlobalStyle = createGlobalStyle`
${console.log(reset)}
  /* reset css */
  ${reset}
  

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <Reset />
    <GlobalStyle/>
    <TodoTemplate>
      <TodoInsert/>
      <TodoList />
    </TodoTemplate>
    </>
  
  );
}

export default App;
