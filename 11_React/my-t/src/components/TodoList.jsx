import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px; // 57p * 9개 항목
  overflow-y: auto; // 항목이 넘치면 스크롤 생성
`;

// todos 배열을 props로 받아와서 map()함수를 사용해 여러 개의 TodoListItem 컴포넌트로
// 변환해서 보여줌
function TodoList(props) {
  const { todos, onRemove, onToggle, onModal, closeModal} = props;

  return (
    <TodoListWrapper>
      {/* <TodoListItem /> */}

      {todos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal={onModal} closeModal={closeModal}/>; // 객체의 아이디로 접근
      })}

    </TodoListWrapper>
  );
};

export default TodoList;