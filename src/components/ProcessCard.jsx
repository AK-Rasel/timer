import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
} from "@material-tailwind/react";

import { EmojiSelect } from "./simpleComponents/EmojiSelect";
import { BsAlarmFill } from "react-icons/bs";
import { IoPauseSharp } from "react-icons/io5";

import { formatTime } from "../util/formatTime";
import { useTimer } from "../context/TimerContext";

function ProcessCard() {
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
  } = useTimer();

  const renderTime = formatTime(timer).split(":");

  return (
    <Card
      variant="gradient"
      className="  bg-primary/85 font-Montserrat border border-white/15 px-4"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex justify-between px-0"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase px-0"
        >
          standard
        </Typography>

        <EmojiSelect />
      </CardHeader>
      <div className="w-full px-0 mt-4">
        <Textarea className="text-white " label="Message" />
      </div>
      <div>
        <p className="text-end text-white">Edit</p>
      </div>

      <CardFooter className=" p-0 flex justify-center items-center  py-4">
        {/* time------------------------------- */}

        <div className="w-full flex gap-1">
          <Typography
            variant="lead"
            color="white"
            className="text-3xl font-semibold font-Montserrat flex items-center flex-grow justify-center gap-1"
          >
            <span className="border p-1 rounded-xl border-white/20">
              {renderTime[0]}
            </span>
            <span>:</span>
            <span className="border p-1 rounded-xl border-white/20">
              {" "}
              {renderTime[1]}
            </span>
            <span>:</span>
            <span className="border p-1 rounded-xl border-white/20">
              {" "}
              {renderTime[2]}
            </span>
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="text-3xl font-semibold font-Montserrat flex items-center flex-grow justify-center gap-2"
          >
            {/* <h3 className="border p-2 rounded-xl border-white/20"> */}

            <button onClick={startTimer}>
              <BsAlarmFill className="border p-2 text-[36px] rounded-xl border-white/20" />
            </button>

            <button onClick={pauseTimer}>
              <IoPauseSharp className="border p-2 rounded-xl text-[36px] border-white/20" />
            </button>
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProcessCard;
