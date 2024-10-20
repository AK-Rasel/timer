// src/components/TimerApp.jsx

import React from "react";
import { useTimer } from "../context/TimerContext"; // Make sure this import matches
import { formatTime } from "../util/formatTime";

function TimerApp() {
  const {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    isActive,
    isPaused,
    timer,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer();

  const handleInputChange = (setter) => (e) => {
    const value = parseInt(e.target.value) || 0; // Convert to integer or set 0 if NaN
    setter(value);
  };

  return (
    <div className="timer-app">
      <h1>Timer App</h1>
      <div className="flex gap-4 text-black">
        <input
          type="number"
          value={hours === 0 ? "" : hours}
          onChange={handleInputChange(setHours)}
          placeholder="HH"
          min="0"
          max="23"
          className="input-field"
        />
        <input
          type="number"
          value={minutes === 0 ? "" : minutes}
          onChange={handleInputChange(setMinutes)}
          placeholder="MM"
          min="0"
          max="59"
          className="input-field"
        />
        <input
          type="number"
          value={seconds === 0 ? "" : seconds}
          onChange={handleInputChange(setSeconds)}
          placeholder="SS"
          min="0"
          max="59"
          className="input-field"
        />
      </div>
      {!isActive || isPaused ? (
        <button onClick={startTimer}>
          {isActive ? "Resume" : "Start Timer"}
        </button>
      ) : (
        <button onClick={pauseTimer}>Pause Timer</button>
      )}
      <button onClick={resetTimer}>Reset</button>
      <h2>{formatTime(timer)}</h2>
    </div>
  );
}

export default TimerApp;
