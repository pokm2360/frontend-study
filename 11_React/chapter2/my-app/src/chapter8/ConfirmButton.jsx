import React, { useState } from 'react';



// quiz: 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기

const ConfirmButton = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(true);

  
  const myConfirmed = () => {
    setIsConfirmed(!isConfirmed)
    // e.target.disabled = true; 

    // set함수는 비동기로 처리됨(=비동기 함수) state 변화를 확인할 수 없음
    // 확인하려면 값이 아닌 콜백함수를 인자값으로 줘야함 
    // (!isConfirmed) => (isConfirmed => !!isConfirmed)
    // console.log(isConfirmed);
  }

  return (
    <>
      <button type='button' onClick={myConfirmed} disabled={!isConfirmed}> 
        {isConfirmed ? '확인하기' : '확인됨'}
      </button>
    </>
  );
};

export default ConfirmButton;