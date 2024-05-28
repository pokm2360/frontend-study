import { Route, useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import reset from "styled-reset";
import TodoTemplates from "./TodoTemplates";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from '../image/background2.jpg';
import { useContext } from "react";
import { TodoContext } from '../App';
import moment from "moment";


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

      @keyframes shake {
      0% { transform: rotate(0deg) scale(1); }
      25% { transform: rotate(-12deg) scale(1.05); }
      50% { transform: rotate(12deg) scale(1.1); }
      75% { transform: rotate(-12deg) scale(1.05); }
      100% { transform: rotate(12deg) scale(1); }
    }
    &:hover {
      background-color: #5fa8d3;
      animation: shake 1s linear infinite;
      }
    }
  `

const DateWrapper = styled.div`
    text-align: center;
    line-height: 1.5;
    width: 25rem;
    height: 3rem;
    background-color: white;
    border-radius: 10px;
    font-size: 2rem;
    font-weight: 900;
    color: #999;
  `

const date = new Date();
const formattedDate = moment(date).format('YYYY년MM월DD일 h:mm a');
const dDay = moment(`${date}, YYYY.MM.DD`).fromNow();

function DeletePage(props) {
  const navigate = useNavigate();
  const { todos, onRemove, handleEdit, onCheck, deletedTodos } = props;
  console.log(deletedTodos);
  return (
    <>
      <GlobalStyle/>

      <DateWrapper>{formattedDate}</DateWrapper>

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
              done
            />
          ))}
        </ul>
      ) : (
        <p>삭제된 할 일이 없습니다.</p>
      )} */}
      {/* <TodoListItem>
        {deletedTodos.map(todo => (
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
