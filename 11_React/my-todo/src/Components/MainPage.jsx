import styled, { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import TodoTemplates from './TodoTemplates';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from 'react';
import backgroundImage from '../image/background2.jpg';
import Modal from './Modal';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import DeletePage from "./DeletePage";
import moment from "moment";

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

const MainBtn = styled.div`
  position: fixed;
  bottom: 13rem;
  left: 50%;
  transform: translateX(-50%); /* 좌우 가운데 정렬 */
  z-index: 1000;

    button {
      background-color: #999;
      justify-content: center;
      color: white;
      border: none;
      padding: 1.5rem 3rem;
      font-size: 2.8rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      transform: shake;

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

function MainPage() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState({}); 
  const [deletedTodos, setDeletedTodos] = useState([]);
  // const [timer, setTimer] = useState("00:00:00");
  const [sendDeletePage, setSendDeletePage] = useState(false);
  const [convertPage, setConvertPage] = useState(true);
  const navigate = useNavigate();

  const convertedPage = () => {
    setConvertPage(!convertPage);
    navigate('/delete');
  };

  // 로컬 스토리지에 저장(재렌더링해도 값이 유지됨)
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos') || []) ; // [] 기본값 주는거 - 초기에 'todos가 없으면 null을 반환
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // 저장 set 가져오기 get 삭제 remove
  }, [todos]);

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
  // const handleEditComplete = (newText, id) => {
  //   setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  // };

  const handleOpenModal = (id) => {
    setEditTodo(todos.find(todo => todo.id === id));
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value
    });
  };
  const handleEdit = () => {
    setTodos(todos.map((todo) => todo.id === editTodo.id ? editTodo : todo))
    handleCloseModal();
  };
  // Update
  const handleCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))};

  // Delete
  // handleRemove는 id값을 인자로 받고 todos 배열을 filter로 거름(todo.id와 id가 같으면!)
  // 만들어진 새로운 배열은 setTodos에 state로 저장됨 
  // props로 todolist-todolistitem까지 구분할로 넘겨준 뒤 해당 아이콘에 onClick 이벤트 시 handleRemove 작동
  const handleRemove = (id) => {
    setDeletedTodos(
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    })));
  }
  
  // const handleRemove = (id) => {
  //   const removedTodo = todos.find(todo => todo.id === todo.id);
  //   if (removedTodo) {
  //     setDeletedTodos([...deletedTodos, removedTodo]);
  //     setTodos(todos.filter(todo => todo.id !== id));
  //   }
  // };
// 타이머
  // const currentTimer = () => {
  //   const date = new Date();
  //   const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");
  //   setTimer(`${hours}:${minutes}:${seconds}`)
  // }
  // const startTimer = () => {
  //   setInterval(currentTimer, 1000)
  // }
  // startTimer()

  const date = new Date();
  const formattedDate = moment(date).format('YYYY년MM월DD일 h:mm a');
  const dDay = moment(`${date}, YYYY.MM.DD`).fromNow();

  return (
    <>
      <GlobalStyle/>

      <DateWrapper>{formattedDate}</DateWrapper>

      <MainBtn>
        <button type="text" className="btn" onClick={() => {convertedPage()}}>
          Complete
          TODO
        </button>
      </MainBtn>
        
      <TodoTemplates>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onCheck={handleCheck} onModal={handleOpenModal} setTodos={setTodos} dDay={dDay}/>
      </TodoTemplates>

      {showModal && (
        <Modal title="TODO 수정"
        closeModal={handleCloseModal}
        onEdit={handleEdit}>
        <input type="text" value={editTodo.text} onChange={handleChange}/>
        </Modal>
      )}
    </>
  );
};

export default MainPage;


{/* deletepage 삼항써서 기존 메인 페이지 or deletepage 렌더링
  set함수로 true일때 메인페이지 / false일때 deletepage 나오게하기
  완료된 항목은 따로 저장해서 deletepage로 이동
*/}

// callback promise async await