import React from "react";
import './JsxUse.css';

function JsXuse() {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     {/* <div>
  //     <input type="text">
  //       <br> */}

  //       {/* HTML에서는 태그를 닫지 않고 사용 가능
  //         리액트에서는 태그를 열었으면 무조건 닫아야 함 */}
  //       <div></div>
  //       <input type="text" />
  //       <br />
  //   </div>
  // );

  // 2. 꼭 감싸져야만 하는 태그
  // 두 개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야 함
  // const element = (
    // 반드시 하나의 부모 태그로 감싸져야 함
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </div>

    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 수 있음
    // html 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해짐
    // 이때 사용하는 것이 React Fragment

    // React.Fragment는 생략 가능
    // <> 
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </>
    // React.Fragment: 컨트롤 스페이스 - 엔터하면 자동으로 임포트

    // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
    // 자바스크립트 변수(또는 함수)를 사용할 때는 {} 사용
    const name = 'react';
    
    const user = {
      firstName: 'goni',
      lastName: 'kim'
    };


  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };
  
// JSX내부에서 자바스크립트를 쓰고싶을때 {}로 묶기
  // const element = (
  //   <>
  //   <div>{name} 배우기</div> 
  //   <h1>hello, {formatName(user)}</h1>
  //   </>
  // );

  // 4. style과 className
  // 인라인 스타일은 객체 형태로 작성하는데 background-color처럼 -로 구분되어있는
  // 이름은 camelCase 형태로 네이밍
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24, // 기본단위 px
  //   padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  // };

  // const element = (
  //   <>
  //   <div style={style}>리액트 공부하기</div>
  //   <div className="gray-box"></div>
  //   </>
  // );

  // 5. JSX 주석
  // const a = 21; // JS 주석

  const element = (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      // 주석은 화면에 보이지 않습니다
      /* 주석은 화면에 보이지 않습니다 */

      <div 
        // 열리는 태그내부에서는 이렇게 주석 작성
      >
        주석 테스트
      </div>
      <div className="gray-box"></div>
    </>
  );

  return element;
}

export default JsXuse; // JsxUse 함수 컴포넌트 내보내기
// export를 해줘야 다른곳에서 import 해서 사용 가능
