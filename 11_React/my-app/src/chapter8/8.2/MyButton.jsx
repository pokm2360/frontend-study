import React from 'react';

const MyButton = (props) => {

  const handleDelete = (id) => {
    console.log(`ID: ${id} 삭제됨`);
  };

  return (
    <>
      {/* 컴포넌트가 마운트 될 때 함수가 바로 실행됨 */}
      {/* 이 후 버튼을 눌러도 함수 실행 안됨
        onClick={undefined}와 동일한 상태 */}
      <button type='button' onClick={handleDelete(1)}>
        삭제하기(잘못된 방법)
      </button>  

    <br />
    {/* 이벤트 핸들러에 첫번째 매개변수로 들어오는 값은 event 객체임 */}
      <button type='button' onClick={(event)=>{ // onClick 시 ()라는 함수를 실행
        console.log(event); // 이벤트 객체(발생한 이벤트에 관련한 여러 기능이 담겨있음)
        console.log(event.target); // 현재 발생한 이벤트의 대상(여기서는 button DOM 요소)
        handleDelete(1);
      }}>
        삭제하기
      </button> 
    </>
  );
};

export default MyButton;