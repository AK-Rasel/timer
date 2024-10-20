import AddCard from "./components/AddCard";
import AllTime from "./components/AllTime";
import AppBar from "./components/AppBar";
import ProcessCard from "./components/ProcessCard";
import CompleteCard from "./components/simpleComponents/CompleteCard";
import TimerApp from "./components/TimerApp";

function Board() {
  return (
    <section
      className="min-h-screen text-white relative z-10"
      style={{
        backgroundImage: "url(../public/backGround.png)",
      }}
    >
      <div className="max-w-8xl mx-auto">
        <div>
          <AppBar />
          <div className="ml-32">
            <AddCard />
          </div>
        </div>

        <AllTime />
        <TimerApp />

        <div className="flex justify-between h-[550px] items-end">
          <div className="border w-full max-w-[20rem] border-white/15 p-2 rounded-2xl">
            <ProcessCard />
          </div>
          <div className="border w-full max-w-[20rem] border-white/15 p-2 rounded-2xl">
            <CompleteCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Board;
