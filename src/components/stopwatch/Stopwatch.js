import { useState, useEffect } from "react";
import { interval, scan, startWith } from "rxjs";

import StopwatchStyled from "./StopwatchStyled";

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
      .subscribe(() => {
        isActive && setState((prev) => ({ ...prev, time: prev.time + 1 }));
      });

    return () => {
      start.unsubscribe();
    };
  }, [isActive]);

  const displayTime = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  const onHandleClickStart = (e) => {
    if (e.target.textContent === "Stop") {
      toggleActive();
      onHandleClickReset();
      return;
    }
    toggleActive();
  };

  const toggleActive = () => {
    setState((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  const onHandleClickWait = () => {};

  const onHandleClickReset = () => setState((prev) => ({ ...prev, time: 0 }));

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
