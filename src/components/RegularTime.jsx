import { useEffect, useState } from "react";

function RegularTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const updateTimeAndDate = () => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);

    setCurrentTime(formattedTime);
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-0 left-1/2 transformCustomize pointer-events-none text-center mt-10  w-full">
      <div>
        <p className="text-7xl font-bold">{currentTime}</p>
        <p className="text-4xl leading-[3rem] mt-1">{currentDate}</p>
      </div>
    </div>
  );
}

export default RegularTime;
