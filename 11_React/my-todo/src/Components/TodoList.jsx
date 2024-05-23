import styled from "styled-components";
import TodoListItem from "./TodoListItem";


const Wrapper = styled.div`
  min-height: 450px;
  max-height: 513px; // 57p * 9개 항목
  border-radius: 0px 0px 20px 20px;
  overflow-y: auto; // 항목이 넘치면 스크롤 생성
`;

function TodoList(props) {
  const { todos, onRemove } = props;
  return (
    <Wrapper>
      
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove}/>
      })}

    </Wrapper>
  );
};

export default TodoList;