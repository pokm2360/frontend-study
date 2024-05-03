import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };

  const handleNumberOfGuests = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleRoomType = (e) => {
    setRoomType(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸 타입: ${roomType}`);
    e.preventDefault();
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
        type="checkbox"
        // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값
        checked={breakfast}
        onChange={handleBreakfastChange}
        />
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
        type="number" 
        value={numberOfGuests}
        onChange={handleNumberOfGuests}
        />
      </label>

      <br />

      룸 타입:
      <label>
      <input 
        type="radio" 
        name="roomType"
        value="SINGLE"
        checked={roomType === 'SINGLE'}
        onChange={handleRoomType}
        />
        싱글
      </label>
      <label>
        <input 
        type="radio" 
        name="roomType"
        value="DOUBLE"
        checked={roomType === 'DOUBLE'}
        onChange={handleRoomType}
        />
        더블
      </label>
      <label>
      <input 
        type="radio" 
        name="roomType"
        value="TWIN"
        checked={roomType === 'TWIN'}
        onChange={handleRoomType}
        />
        트윈
      </label>

      <br />

      <input type="submit" />
    </form>
    </>
  );
};

export default Reservation;