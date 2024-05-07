import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)


function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘쓰려면?', '자바스크립트 핵심 문법', 
  'CSS 스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleClick() {
    setShowPostDetail(!showPostDetail);
  };

  return (
    <>
      <header className="header--dark">
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'> */}
          {/* 자바스크립트 코드는 중괄호로 */}
          {/* <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div> */}

        {/* quiz: map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list' onClick={()=> {
              setShowPostDetail(true);
              setCurrentIndex(index);
            }}>
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by goni.kim</p>
            </div>
          );
        })}

        {/* 포스트 상세보기 */}
        {/* quiz: 조건부 렌더링 */}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex}
        />}
      </div>
    </>
  );
}

export default App;
git config --global user.name "[user name]"
출처: https://kotlinworld.com/266 [조세영의 Kotlin World:티스토리]
git config user.email "[por0632@naver.com]"
출처: https://kotlinworld.com/266 [조세영의 Kotlin World:티스토리]