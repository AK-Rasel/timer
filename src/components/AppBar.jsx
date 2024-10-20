import Themes from "./simpleComponents/Themes";
function AppBar() {
  return (
    <nav className="px-4">
      <div className="flex items-center justify-between">
        <h2 className="w-full">Logo--ToDo</h2>

        <div className="flex w-full justify-end items-center flex-col">
          <ul className="flex justify-center items-center py-4 gap-5 text-base font-medium ">
            <li className="cursor-pointer hover:text-gray-400 transition-all ease-out">
              Timer
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-all ease-out">
              Stop Watch
            </li>
          </ul>
        </div>
        {/* empty div------------- TODO */}
        <div className="w-full hidden justify-end md:flex pr-4 items-center gap-5">
          {/* <Avatar /> */}
          {/* <ProfileMenu /> */}
          <Themes />
        </div>
        {/* empty div------------- TODO */}
      </div>
      <img className="opacity-15" src="../public/Ellipse 1.png" alt="ellipse" />
    </nav>
  );
}

export default AppBar;
