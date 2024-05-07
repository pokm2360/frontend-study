import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요.');

  const handleChange = (e) => { // 이벤트 핸들러의 첫번째 객체로 이벤트 변수 e(event)
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('제출된 에세이: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}> {/* form 태그에서 submit 감지*/}
      <label>
        에세이:
        <textarea value={value} onChange={handleChange}></textarea>
        {/* HTML DOM */}
        {/* <textarea>
          Hello World!
        </textarea> */}
        <button type="submit">제출</button>
      </label>
    </form>
  );
};

export default EssayForm;