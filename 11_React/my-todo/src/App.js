import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import TodoTemplates from './Components/TodoTemplates';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* 글로벌(공통) 스타일 */
  body {
    background: #999999;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    // if (!todos) {
      // 할 일이 없으면 새 할 일을 추가하세요! 뜨게하기
    // }
  ]);

  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      done: false
    }
    // 새로운 배열 생성
    setTodos(todos.concat(todo));
  }

  return (
    <>
      {/* <Reset /> or ${reset} 둘 중 하나만 써도됨 */}
      <GlobalStyle />
      <TodoTemplates>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplates>
    </>
  );
}

export default App;
