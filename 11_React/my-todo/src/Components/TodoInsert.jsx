import styled from "styled-components";
import { MdAddReaction } from "react-icons/md";

const Wrapper = styled.form`
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
  background: #495057;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* transition: 0.2s background ease-in; */

  /* 키프레임 정의해서 css 속성으로 넣어주기 */
  @keyframes shakeit {
    0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-2px, 0px) rotate(1deg); }
      30% { transform: translate(2px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-2px, 1px) rotate(0deg); }
      70% { transform: translate(2px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  &:hover {
    animation-name: shakeit;
  }
  
  `;

function TodoInsert() {
  return (
    <Wrapper>
      <StyledInput />
      <StyledButton>
        <MdAddReaction />
      </StyledButton>
    </Wrapper>
  );
};

export default TodoInsert;