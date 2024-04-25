import React from 'react';
import Comment from './Comment';

// 댓글들을 포함하는 컴포넌트
const CommentList = (props) => {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      {/* 문자열은 중괄호 생략!!! */}
      <Comment name={'kim'} content={'컴포넌트1'}/>
      <Comment name={'lee'} content={'컴포넌트2'}/>
      <Comment name={'park'} content={'컴포넌트3'}/>
      <Comment name={'choi'} content={'컴포넌트4'}/>
      <Comment name={'jung'} content={'컴포넌트5'}/>
      <Comment name={'joo'} content={'컴포넌트6'}/>
      <Comment name={'baek'} content={'컴포넌트7'}/>
      <Comment name={'jang'} content={'컴포넌트8'}/>
      <Comment name={'yu'} content={'컴포넌트9'}/>
      <Comment name='kang' content='컴포넌트10'/>
      <Comment name={'heo'} content={'컴포넌트11'}/>
      <Comment name={'yang'} content={'컴포넌트12'}/>
    </div>
  );
};

export default CommentList;