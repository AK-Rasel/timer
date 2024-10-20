// src/context/TimerContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [alerted, setAlerted] = useState(false);

  useEffect(() => {
    if (isActive || isPaused) {
      localStorage.setItem("timer", timer);
      localStorage.setItem("isActive", JSON.stringify(isActive));
      localStorage.setItem("isPaused", JSON.stringify(isPaused));
      localStorage.setItem("alerted", JSON.stringify(alerted));
    }
  }, [timer, isActive, isPaused, alerted]);

  useEffect(() => {
    const storedTimer = localStorage.getItem("timer");
    const storedIsActive = localStorage.getItem("isActive");
    const storedIsPaused = localStorage.getItem("isPaused");
    const storedAlerted = localStorage.getItem("alerted");

    if (storedTimer) setTimer(parseInt(storedTimer));
    if (storedIsActive) setIsActive(JSON.parse(storedIsActive));
    if (storedIsPaused) setIsPaused(JSON.parse(storedIsPaused));
    if (storedAlerted) setAlerted(JSON.parse(storedAlerted));
  }, []);

  const startTimer = () => {
    const totalSeconds =
      parseInt(hours * 3600) + parseInt(minutes * 60) + parseInt(seconds);
    if (totalSeconds === 0) {
      alert("Please set your time");
      return;
    }
    setTimer(totalSeconds);
    setIsActive(true);
    setIsPaused(false);
    setAlerted(false);
  };

  const pauseTimer = () => setIsPaused(true);

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setAlerted(false);
    setTimer(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    localStorage.clear();
  };

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0 && isActive && !alerted) {
      setIsActive(false);
      setAlerted(true);
      alert("Time's up!");
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, timer, alerted]);

  return (
    <TimerContext.Provider
      value={{
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        timer,
        isActive,
        isPaused,
        startTimer,
        pauseTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
