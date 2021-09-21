import { useState, useEffect } from "react";
import StopwatchStyled from "./StopwatchStyled";

const initialState = {
  time: 180,
  isActive: false,
};

const Stopwatch = () => {
  const [state, setState] = useState(initialState);

  const displayTime = (time) => {
    // console.log(state);
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  return (
    <StopwatchStyled>
      <div className="display_time">{displayTime(state.time)}</div>
      <button className="btn">{!state.isActive ? "Start" : "Stop"}</button>
      <button className="btn">Wait</button>
      <button className="btn">Reset</button>
    </StopwatchStyled>
  );
};

export default Stopwatch;
