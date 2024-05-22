import styled from "styled-components";
import { MdAddReaction } from "react-icons/md";
import { useState } from "react";

const Wrapper = styled.form`
  display: flex;
  background: #999999;
  border-radius: 20px;
  width: 480px;
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
// const animation = styled.turn`
// @keyframes turn {
//     0% { transform: rotate(0deg); }
//     50% { transform: rotate(180deg); }
//     100% { transform: rotate(360deg); }
//   }
//   .turn {
//   animation: rotate 2s linear infinite;
// }
// `

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
  `;
  /* 키프레임 정의해서 css 속성으로 넣어주기 */
const animationicon = styled.MdAddReaction`
  @keyframes turn {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    100% { transform: rotate(45deg); }
  }
  
  &:hover {
    animation-name: turn;
    animation-duration: 1s;
  }
`

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