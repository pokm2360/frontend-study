import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;

  .content {
    background: white;
  }
`;

const AppTitle = styled.div`
  background: #d0d327;
  color: black;
  height: 4rem;
  font-size: 1.8rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`


function TodoTemplates(props) {
  const { children } = props;

  return (
    <Wrapper>
      <AppTitle>tODo-aPp</AppTitle>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default TodoTemplates;