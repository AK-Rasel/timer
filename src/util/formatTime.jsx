export const formatTime = (timeInSeconds) => {
  const hh = Math.floor(timeInSeconds / 3600);
  const mm = Math.floor((timeInSeconds % 3600) / 60);
  const ss = timeInSeconds % 60;

  const pad = (num) => String(num).padStart(2, "0"); // Ensure two digits

  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
};
