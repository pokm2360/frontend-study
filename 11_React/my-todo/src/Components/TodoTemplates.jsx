import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  
  .content {
    background: #e8e9a9;
  }
  
  .content2 {
    width: 512px;
    border-radius: 0px 0px 20px 20px;
    height: 512px;
    background: #e8e9a9;
  }
  `;

const AppTitle = styled.div`
  background: #e8e9a9;
  border-radius: 20px 20px 0px 0px;
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
      <AppTitle>TODO-APP</AppTitle>
      <div className="content">{children}</div>
      {/* <div className="content2"></div> */}
    </Wrapper>
  );
};

export default TodoTemplates;