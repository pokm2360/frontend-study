import styled from "styled-components";


const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0; // 상 중 하 순
  border-radius: 4px;
  overflow: hidden;

  /* 아래와 같이 작성하면 하위(후손, 자손)를 의미 - 변수로 지정한 div 안에 작성하면!!
    아래처럼 컴포넌트를 따로 만들어도 되고 Sass처럼 내부에 class로 만들어도 됨 */
  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background: white;
  }
`;

const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
// children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링
function TodoTemplate(props) {
  // const { children } = props; - 구조분해할당

  return (
    <TodoTemplateWrapper>
      {/* <AppTitle>일정 관리</AppTitle> */}
      <div className="app-title">일정 관리</div>
      <div className="content">{props.children}</div>
    </TodoTemplateWrapper>
  );
};

export default TodoTemplate;