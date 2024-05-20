import styled from "styled-components";
import PostListitem from "./PostListitem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map()함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const { posts } = props;

  return (
    <Wrapper>
      {/* quiz: posts 배열을 반복 렌더링하기 */}
      {posts.map((post) => {
        return <PostListitem key={post.id} id={post.id} post={post}/>
      })}
    </Wrapper>
  );
};

export default PostList;