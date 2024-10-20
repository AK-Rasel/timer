import { useTimer } from "../context/TimerContext";
import { formatTime } from "../util/formatTime";
import RegularTime from "./RegularTime";

function AllTime() {
  const { timer } = useTimer();

  return (
    <div className="absolute z-0 left-1/2 transformCustomize pointer-events-none text-center mt-10">
      <span className="text-[170px] font-Montserrat  font-bold   ">
        {formatTime(timer)}
      </span>
      <RegularTime />
    </div>
  );
}

export default AllTime;
