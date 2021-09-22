import { useState, useEffect } from "react";
import StopwatchStyled from "./StopwatchStyled";

import { interval, scan, share, startWith } from "rxjs";

const initialState = {
  time: 0,
  isActive: false,
  timer: interval(1000),
};

const Stopwatch = () => {
  const [state, setState] = useState(initialState);
  const { time, isActive, timer } = state;

  useEffect(() => {
    const start = timer
      .pipe(
        startWith(time),
        scan((time) => time + 1)
      )
      .subscribe((val) => {
        isActive && setState((prev) => ({ ...prev, time: val }));
      });

    return () => {
      start.unsubscribe();
    };
    // timer.unSubscribe();
  }, [isActive]);

  const displayTime = (time) => {
    // console.log(state);
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  const onHandleClickStart = (e) => {
    if (e.target.textContent === "Stop") {
      setState((prev) => ({ ...prev, isActive: false }));
      toggleActive();
      onHandleClickReset();
    }
    toggleActive();
  };

  const toggleActive = () => {
    setState((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  const onHandleClickWait = () => {};

  const onHandleClickReset = () => {
    setState((prev) => ({ ...prev, time: 0 }));
  };

  return (
    <StopwatchStyled>
      <div className="display_time">{displayTime(time)}</div>
      <button className="btn" onClick={onHandleClickStart}>
        {!isActive ? "Start" : "Stop"}
      </button>
      <button className="btn" onClick={onHandleClickWait}>
        Wait
      </button>
      <button className="btn" onClick={onHandleClickReset}>
        Reset
      </button>
    </StopwatchStyled>
  );
};

export default Stopwatch;
