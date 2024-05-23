import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  
  .content {
    background: rgba(254, 240, 169);
  }
  
  .content2 {
    width: 512px;
    border-radius: 0px 0px 20px 20px;
    height: 512px;
    background: rgba(254, 240, 169);
  }
  `;

const AppTitle = styled.div`
  background: rgba(254, 240, 169);
  border-radius: 20px 20px 0px 0px;
  color: #999;
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
      <AppTitle>TODO-APP</AppTitle>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default TodoTemplates;