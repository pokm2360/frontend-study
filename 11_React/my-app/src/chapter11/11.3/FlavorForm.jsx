import { useState } from "react";

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('가장 좋아하는 맛: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}> {/* form 태그에서 submit 감지*/}
      <label>
        좋아하는 맛 선택:
        {/* HTML DOM */}
        <select value={value} onChange={handleChange}>
          <option value="Grapefruit">자몽</option>
          <option value="Lime">라임</option>
          <option value="Coconut">코코넛</option>
          <option value="Mango">망고</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FlavorForm;