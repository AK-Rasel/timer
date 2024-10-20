import { useEffect, useState } from "react";

function useTime() {
  const [hours, setHours] = useState(null); // Hours input
  const [minutes, setMinutes] = useState(null); // Minutes input
  const [seconds, setSeconds] = useState(null); // Seconds input
  const [timer, setTimer] = useState(0); // Countdown timer in seconds
  const [isActive, setIsActive] = useState(false); // Track if timer is active
  const [isPaused, setIsPaused] = useState(false); // Track if timer is paused
  const [alerted, setAlerted] = useState(false); // Flag to track if alert was shown

  // Store timer and state in localStorage when timer changes
  useEffect(() => {
    if (isActive || isPaused) {
      localStorage.setItem("timer", timer);
      localStorage.setItem("isActive", JSON.stringify(isActive));
      localStorage.setItem("isPaused", JSON.stringify(isPaused));
      localStorage.setItem("alerted", JSON.stringify(alerted)); // Store alerted state
    }
  }, [timer, isActive, isPaused, alerted]);

  // On component mount, load stored data from localStorage
  useEffect(() => {
    const storedTimer = localStorage.getItem("timer");
    const storedIsActive = localStorage.getItem("isActive");
    const storedIsPaused = localStorage.getItem("isPaused");
    const storedAlerted = localStorage.getItem("alerted");

    if (storedTimer) {
      setTimer(parseInt(storedTimer));
    }
    if (storedIsActive) {
      setIsActive(JSON.parse(storedIsActive));
    }
    if (storedIsPaused) {
      setIsPaused(JSON.parse(storedIsPaused));
    }
    if (storedAlerted) {
      setAlerted(JSON.parse(storedAlerted)); // Restore alerted state
    }
  }, []);

  // Start or resume the timer
  const startTimer = () => {
    const totalSeconds =
      parseInt(hours * 3600) + parseInt(minutes * 60) + parseInt(seconds);

    if (totalSeconds === 0) {
      alert("Please set your time"); // Show alert if the timer is 0
      return;
    }

    if (!isActive) {
      setTimer(totalSeconds); // Initialize timer with the input values
      setIsActive(true); // Start the timer
      setIsPaused(false); // Ensure it's not paused
      setAlerted(false); // Reset alerted flag when starting the timer
    } else {
      setIsPaused(false); // Resume the countdown
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsPaused(true);
  };

  // Reset the timer and clear localStorage
  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setAlerted(false);
    setTimer(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    localStorage.removeItem("timer");
    localStorage.removeItem("isActive");
    localStorage.removeItem("isPaused");
    localStorage.removeItem("alerted");
  };

  // Format the time to display as HH:MM:SS with two digits
  const formatTime = (timeInSeconds) => {
    const hh = Math.floor(timeInSeconds / 3600);
    const mm = Math.floor((timeInSeconds % 3600) / 60);
    const ss = timeInSeconds % 60;

    const pad = (num) => String(num).padStart(2, "0"); // Ensure two digits

    return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  };

  // Handle the countdown logic and update input fields dynamically
  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0 && isActive && !alerted) {
      setIsActive(false); // Stop the timer when it hits zero
      setAlerted(true); // Set alerted flag to true to avoid duplicate alerts
      alert("Time's up!");
      resetTimer(); // Reset the timer and clear localStorage after the alert
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isActive, isPaused, timer, alerted]);

  return;
}

export default useTime;
