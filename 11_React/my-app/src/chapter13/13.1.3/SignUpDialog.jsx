import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {

  const [input, setInput] = useState('');
  const [click, setClick] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    alert(`탑승을 환영합니다. ${input}`);
  }


  return (
    <Dialog
      title="화성 탐사 프로그램"
      message="당신의 이름은?"
    >
      <input type="text" value={input} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>가입하세요!</button>
      
    </Dialog>
  );
};

export default SignUpDialog;