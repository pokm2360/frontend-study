import React, { useState } from 'react';

const Counter = (props) => {
  // state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 해야함
  let [count, setCount] = useState(0); // 초기값 0
  console.log(useState(0)); // [0,f]

  const [color, setColor]=useState(false); // 글자색 상태
  const [str, setStr]=useState(false); // 버튼 상태
  const [color2, setColor2]=useState('black');
// useState()의 결과로 배열이 반환됨 -> [초기값, 상태변경함수]
// 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당
// 재렌더링이 일어나도 기존 값이 저장되어 있음

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); // 0부터 255까지의 랜덤한 정수
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`; // rgb(r, g, b) 형식으로 반환
};


  // state 미사용 시
  let wrongCount = 0;
  

  return (
    <>
      <p>총 {count}번 클릭했습니다.</p>

      {/* 1. state 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 않음 */}
      <button 
        type='button'
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        클릭(잘못된 방법)
        </button>

        <br />

      {/* 2. state 변경 함수를 이용한 수정 */}
      <button 
        type='button'
        onClick={() => {
          setCount(count+1);
          console.log(count);
        }}
      >
        클릭
        </button>

        {/* 3. state 미사용 */}
        {/* 값은 증가되지만 재렌더링이 일어나지 않음
          다른 이유로 재렌더링 발생 시, 값이 초기화됨 */}
        <p>총 {wrongCount}번 클릭했습니다.</p>

      <button 
        type='button'
        onClick={() => {
          wrongCount++;
          console.log(wrongCount);
        }}
      >
        클릭(잘못된 방법)
        </button>

        <br />

        {/* quiz: 글자색 바꾸기, 버튼 내용 바꾸기 */}
        <p style={{color: color ? 'blue' : 'red'}}>현재 글자색: {color ? 'blue' : 'red'}</p>
        <button onClick={()=> setColor(!color)}>
          글자색 변경
        </button>

        {/* 글자색 랜덤변경 */}
        <p style={{color: color2}}>현재 글자색: {color2}</p>
        <button onClick={()=> setColor2(getRandomColor())}>
          글자색 변경
        </button>

        <p>버튼 내용 바꾸기:</p>
        <button onClick={() => setStr(!str)}>
          {str ? '구독완료' : '구독'}
        </button>
    </>
  );
};

export default Counter;