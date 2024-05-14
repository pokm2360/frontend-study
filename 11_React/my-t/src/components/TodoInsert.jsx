import styled from "styled-components";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀때 한 곳만 바꾸면 되서 편함
import { MdAdd as AddIcon } from "react-icons/md";
import { useState } from "react";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 한쪽에만 주면 남은 영역을 다 가져감(버튼 제외 모든 영역 차지)

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;


// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사 추가 -- 제출 시 실행
    if (!value) { // value의 값이 없을때
      alert('내용을 입력하세요');
      return ; // 함수 종료
    }

    onInsert(value); // 사용자가 입력한 값
    setValue('');
  }

  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="할 일을 입력하세요."
      />
      <StyledButton type="submit" >
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;