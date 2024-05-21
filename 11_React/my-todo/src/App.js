import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import TodoTemplates from './Components/TodoTemplates';
import TodoInsert from './Components/TodoInsert';

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* 글로벌(공통) 스타일 */
  body {
    background: #999999;
  }
`;

function App() {
  return (
    <>
      {/* <Reset /> or ${reset} 둘 중 하나만 써도됨 */}
      <GlobalStyle />
      <TodoTemplates>
        <TodoInsert/>
      </TodoTemplates>
    </>
  );
}

export default App;
