import { Route, useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import reset from "styled-reset";
import TodoTemplates from "./TodoTemplates";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from '../image/background2.jpg';
import { useContext } from "react";
import { TodoContext } from '../App';


const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* 글로벌(공통) 스타일 */
  body {
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

  const MainBtn = styled.div`
    position: fixed;
    bottom: 13rem;
    left: 50%;
    transform: translateX(-50%); /* 좌우 가운데 정렬 */
    z-index: 1;

    button {
      background-color: #999;
      justify-content: center;
      color: white;
      border: none;
      padding: 1.5rem 3rem;
      font-size: 2.8rem;
      border-radius: 5px;
      cursor: pointer;//
      transition: background-color 0.3s;

      &:hover {
        background-color: #5fa8d3;
      }
    }
  `

function DeletePage() {
  const navigate = useNavigate();
  // const { todos, onRemove, onCheck, handleEdit, onCheck }
  // const { deletedTodos } = useContext(TodoContext); // Context에서 deletedTodos 가져옴

  return (
    <>
      <GlobalStyle/>
      <MainBtn>
        <button type="text" className="btn" onClick={() => {navigate('/')}}>
          메인으로
        </button>
      </MainBtn>
      
      {/* {deletedTodos.length > 0 ? (
        <ul>
          {deletedTodos.map(todo => (
            <TodoListItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      ) : (
        <p>삭제된 할 일이 없습니다.</p>
      )} */}
      {/* <TodoListItem>
        {todos.map(todo => (
          <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onCheck={onCheck}
          handleEdit={handleEdit}
          />
        ))}
      </TodoListItem> */}
    </>
  );
};

export default DeletePage;
