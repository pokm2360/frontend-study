import styled from "styled-components";
import { BsTrash3Fill } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 아이템 사이사이에 위쪽 테두리 */
  & + & {
    border-top: 1px solid #999999;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #999999;
  cursor: pointer;
  transform: shake-hard;
  
  @keyframes shake-hard {
    0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
  }
  
  &:hover {
    color: #9999999d;
    animation: shake-hard 0.3s linear infinite;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-right: 10px;
  color: #999999;
  cursor: pointer;
  transform: shake-hard;
  
  @keyframes shake-hard {
    0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
  }
  
  &:hover {
    color: #9999999d;
    animation: shake-hard 0.3s linear infinite;
  }
`

const Text = styled.div`
  color: #2293af;
  margin-left: 0.5rem;
  font-size: 2rem;
  flex: 1;
`;

function TodoListItem(props) {
const { todo: {id, text, done}, onRemove } = props;
  
  return (
    <Wrapper>
      <Text>{text}</Text>

      <Edit>
        <LiaEditSolid />
      </Edit>

      <Remove>
        <BsTrash3Fill onClick={() => {onRemove(id)}}/>
      </Remove>

    </Wrapper>
  );
};

export default TodoListItem;