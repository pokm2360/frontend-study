import styled, { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import TodoTemplates from './Components/TodoTemplates';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import backgroundImage from './image/background2.jpg';

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* 글로벌(공통) 스타일 */
  body {
    /* background: #999; */
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
  }
`;


function App() {
  const [todos, setTodos] = useState([
    // if (!todos) {
      // 할 일이 없으면 새 할 일을 추가하세요! 뜨게하기
    // }
  ]);

  // Create
  // handleInsert는 text를 인자로 받아 todo라는 새로운 객체를 만들어 concat으로 todos 배열에 추가함
  // (id는 uuid로 생성, done은 기본값 false)
  // 새로 만들어진 todo객체는 state로 관리되어 props로 전달됨
  // onInsert라는 이름으로 todoinsert로 구분할로 넘겨준 뒤  
  // input창에 입력된 값을 handleChange로 감지하고 insert라는 state로 관리해 handleSubmit으로 제출
  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      done: false
    }
    // 새로운 배열 생성
    setTodos(todos.concat(todo));
  }
  // Read
  
  // Update
  const handleCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))};

  // Delete
  // handleRemove는 id값을 인자로 받고 todos 배열을 filter로 거름(todo.id와 id가 같으면!)
  // 만들어진 새로운 배열은 setTodos에 state로 저장됨 
  // props로 todolist-todolistitem까지 구분할로 넘겨준 뒤 해당 아이콘에 onClick 이벤트 시 handleRemove 작동
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }));
  }

  return (
    <>
      {/* <Reset /> or ${reset} 둘 중 하나만 써도됨 */}
      <GlobalStyle />
      <TodoTemplates>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onCheck={handleCheck}/>
      </TodoTemplates>
    </>
  );
}

export default App;
