import React, { useState } from 'react';
import LoginControlRefactoring from './9.3/LoginControlRefactoring';
import Greeting from './9.1/Greeting';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};

const Toolbar = (props) => {
  const {isLoggedIn, onClickLogin, onClickLogout} = props; // 객체 구조 분해 할당
  console.log(props);
  
  return (
    <div style={styles.wrapper}>
      {/* quiz:
        로그인/로그아웃 버튼을 누를 때마다 isLoggedIn 값이 바뀌고
        로그인/로그아웃 버튼이 바뀌도록 조건부 렌더링
        로그인 상태이면 인사말이 나오도록 조건부 렌더링
        */}
        {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

        {isLoggedIn 
        ? <button type='button' onClick={onClickLogout}>로그아웃</button>
        : <button type='button' onClick={onClickLogin}>로그인</button>
        }

        {/* {isLoggedIn ? 
            <>
            <span style={styles.greeting}>환영합니다!</span>
            <button type='button' onClick={onClickLogout}>로그아웃</button>
            </>
          :<button type='button' onClick={onClickLogin}>로그인</button>
        } */}

        {/* 로그인 */}
        {/* <button type='button' onClick={onClickLogin}> 
          로그인
        </button> */}

        {/* 로그아웃 */}
        {/* <button type='button' onClick={onClickLogout}>
        로그아웃
        </button> */}


    </div>
  );
};

export default Toolbar;