import { useEffect } from "react";
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputE1 = useRef(null); // 인자값으로 초기값, 초기값은 null
  console.log(inputE1); // 레퍼런스 객체라 부르는 일반 자바스크립트 객체를 반환함

  useEffect(() => {
    // 함수, 의존성배열(dependency array), 렌더링이 다 되고나서 실행됨
    // 마운트 됐을 때(렌더링 이후)실행되므로 input 엘리먼트가 나옴
    console.log(inputE1);

    // 활용 예: 로그인이나 회원가입 화면이 처음 보여질 때 자동 포커스
    inputE1.current.focus();
  }, []); 

  const handleButtonClick = () => {
    // 여기서 inputEl.current에 text input 객체를 담고 있음
    inputE1.current.focus(); // 강제 포커스
  }

  return (
    <>
      {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
      <input ref={inputE1} type="text" />
      <button type="button" onClick={handleButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;