/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Cards({ item }) {
  const { title, time } = item;

  const displayTime = time.split(":");

  return (
    <Card
      variant="gradient"
      className="w-full max-w-[16rem] p-8 bg-primary/85 font-Montserrat border border-white/15"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-medium text-xs  uppercase font-Montserrat"
        >
          See Task
        </Typography>
        <Typography
          variant="h2"
          color="white"
          className="mt-2 flex justify-center gap-1 flex-grow font-semibold text-lg font-Montserrat"
        >
          {title}
        </Typography>
      </CardHeader>

      <CardFooter className=" p-0 flex flex-grow justify-center items-center">
        {/* time------------------------------- */}

        <Typography
          variant="lead"
          color="white"
          className="text-3xl font-semibold font-Montserrat flex items-center flex-grow justify-center gap-2"
        >
          <span className="border p-2 rounded-xl border-white/20">
            {displayTime[0]}
          </span>
          <span>:</span>
          <span className="border p-2 rounded-xl border-white/20">
            {displayTime[1]}
          </span>
          <span>:</span>
          <span className="border p-2 rounded-xl border-white/20">
            {displayTime[2]}
          </span>
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default Cards;
