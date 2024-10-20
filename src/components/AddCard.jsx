import { CiSquarePlus } from "react-icons/ci";
import Cards from "./simpleComponents/Cards";

const AddData = [
  {
    title: "Meeting with Team",
    time: "10:00:00 ",
  },
  {
    title: "Lunch Break",
    time: "12:30:00 ",
  },
  {
    title: "Project Deadline",
    time: "04:00:00",
  },
];

function AddCard() {
  return (
    <div className="flex justify-center items-center flex-grow gap-3 mt-10">
      {AddData.map((item, index) => (
        <Cards key={index} item={item} />
      ))}
      <CiSquarePlus className="text-6xl ml-4" />
    </div>
  );
}

export default AddCard;
