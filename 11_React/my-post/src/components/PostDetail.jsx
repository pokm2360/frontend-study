function PostDetail(props) {
  const { posts, currentIndex, setPosts }= props;
  // 구조분해할당 안하면 props.붙여야함
  return (
    <div className="detail">
      <h4>제목:{posts[currentIndex]}</h4> 
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자 goni.kim</p>
      <p>... 상세내용 ...</p>

      {/* 간단한 포스트 수정하기 */}
      <button type="button"
      onClick={() => {
        // 배열이나 객체의 state를 변경하는 법
        // 새로운 배열 또는 객체를 만들어 변경하고 set 함수에 넣어줘야 함
        const copyPosts = [...posts]; // 배열의 복사본 만들기
        copyPosts[currentIndex] = `${copyPosts[currentIndex]} - 수정됨`;
        setPosts(copyPosts);
        
        // state 변경할 때 알아야 할 거
        // 1. state 변경 함수의 특징
        // 기존 state가 신규 state랑 같은 경우, 변경 안함
        // 2. 배열/객체의 특징
        // 변수에 주소(참조)값이 저장됨
      }}
      >

        수정하기
      </button>
    </div>
  );
};

export default PostDetail;