import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 아이템 사이사이에 위쪽 테두리 */
  & + & {
    border-top: 1px solid #999999;
  }

  .text {

  }
`;

function TodoListItem(props) {
const { todo: {id, text, done} } = props;
  
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
};

export default TodoListItem;