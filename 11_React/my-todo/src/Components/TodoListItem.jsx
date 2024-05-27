import styled, { css } from "styled-components";
import { BsTrash3Fill } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";
import { IoCheckbox } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 10px;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #ff7d7d;
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
  margin-right: 5px;
  color: #77b9df;
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
// 수정 누르면 Text 창이 input창으로 변환, state로 감지해서 해당 id text에 전달 
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px ;
  background: white;
  color: #999;
  border-radius: 20px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 3rem;
  flex: 1;
  
`;

const Text = styled.span`
  font-size: 22px; 
  font-weight: 900;
  margin-left: 15px;
  margin-bottom: 2px;
  
  ${props => props.done && 
    css`
      text-decoration: line-through;
    `
  }
`;

// const Input = styled.div`
//   font-size: 22px; 
//   font-weight: 900;
//   margin-left: 15px;
//   margin-bottom: 2px;
//   border: none;
// `

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 1.3rem;
  cursor: pointer;

  svg {
    font-size: 1.3rem;
    color: ${props => props.done && '#999'}
  }
`;

function TodoListItem(props) {
  const { todo: {id, text, done}, onRemove, onCheck, onModal } = props;
  console.log(props);

  // const [editMode, setEditMode] = useState(false);
  // const [editedtext, setEditedtext] = useState(text);

  // const handleEditMode = () => {
  //   setEditMode(!editMode);
  // }

  // const handleInput = (e) => {
  //   setEditedtext(e.target.value);
  // }
  
  // const handleEditComplete = () => {
  //   const nextTodoList = todo.map((tod) => ({
  //     ...tod,
  //     text: tod.id === tod.id ? editedtext : tod.text // 새로운 아이템 내용을 넣어줌
  //   }));
  //   setTodos(nextTodoList); // 새로운 리스트를 넣어줌
  //   setEditMode(false);
  // };
  
  return (
    <Wrapper>

      <TextWrapper>

      <Checkbox done={done} onClick={() => onCheck(id)}>
        {done ? <IoCheckbox /> : <IoCheckboxOutline/>}
      </Checkbox>

          {/* {editMode ? (
            <Input>
              <input
                type="text"
                value={editedtext}
                onChange={handleInput}
                onClick={handleEditComplete}
                autoFocus
              />
            </Input>) 
          : (
          )} */}
          <Text done={done}>
            {text}
          </Text>
      </TextWrapper>

      <Edit onClick={() => onModal(id)}>
        <LiaEditSolid />
      </Edit>


      <Remove>
        <BsTrash3Fill onClick={() => {onRemove(id)}}/>
      </Remove>

    </Wrapper>
  );
};

export default TodoListItem;