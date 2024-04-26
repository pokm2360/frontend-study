import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '유재석',
    content: '리액트 재밌네'
  },
  {
    name: '이이경',
    content: '자바 재밌네'
  },
  {
    name: '이미주',
    content: '자바스크립트 재밌네'
  },
];


// 댓글들을 포함하는 컴포넌트
const CommentList = (props) => {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      {/* 문자열은 중괄호 생략!!! */}
      {/* <Comment name={'kim'} content={'컴포넌트1'}/>
      <Comment name={'lee'} content={'컴포넌트2'}/>
      <Comment name={'park'} content={'컴포넌트3'}/>
      <Comment name={'choi'} content={'컴포넌트4'}/>*/}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 
        일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨*/}
        {comments.map((comment, index) => {
          return <Comment key={index} name={comment.name} content={comment.content}/>;
        })}

        {/* map() 함수의 결과 */}
        {
          [
            <Comment key={0} name={'유재석'} content={'리액트 재밌네'}/>,
            <Comment key={1} name={'이이경'} content={'자바 재밌네'}/>,
            <Comment key={2} name={'이미주'} content={'자바스크립트 재밌네'}/>
          ]
        }

        {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content}/>)}   
    </div>
  );
};

export default CommentList;