import styled from "styled-components";
import { MdAddReaction } from "react-icons/md";
import { useState } from "react";

const Wrapper = styled.form`
  display: flex;
  background: #999999;
  margin-left: 16px;
  border-radius: 20px;
  width: 480px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: 1px solid #999999;
  border-radius: 20px;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; 

  &::placeholder {
    color: #dee2e6;
  }
  `;

const StyledButton = styled.button`
  border: none;
  border-radius: 20px;
  background: #999999;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: shake;

  /* 키프레임 정의해서 css 속성으로 넣어주기 */
  @keyframes shake {
      0% { transform: rotate(0deg) scale(1); }
      25% { transform: rotate(-12deg) scale(1.15); }
      50% { transform: rotate(12deg) scale(1.3); }
      75% { transform: rotate(-12deg) scale(1.15); }
      100% { transform: rotate(12deg) scale(1); }

  }
  &:hover {
    animation: shake 1s linear infinite;
  }
  `;
  

function TodoInsert(props) {
  const { onInsert } = props;

  const [insert, setInsert] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setInsert(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!insert) { // value의 값이 없을때
      alert('내용을 입력하세요');
      return ; // 함수 종료
    }

    onInsert(insert); // 사용자가 입력한 값
    setInsert(''); // 제출하면 인풋 초기화
  }
  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text"
        value={insert}
        onChange={handleChange}
        placeholder="할 일을 입력하세요."
      />
      <StyledButton type="submit">
        <MdAddReaction/>
      </StyledButton>
    </Wrapper>
  );
};

export default TodoInsert;