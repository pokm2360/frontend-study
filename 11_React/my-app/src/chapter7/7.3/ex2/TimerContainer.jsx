import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showtimer, setShowtimer] = useState(false);


  return (
    <>
        { showtimer && <Timer />}
      <button type="button" onClick={() => {setShowtimer(!showtimer)}}>
        On/Off 토글
      </button>
    </>
  );
};

export default TimerContainer;