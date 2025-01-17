import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import themes from "../../../public/backGround.png";

function Themes() {
  return (
    <div>
      <Menu>
        <MenuHandler className="bg-transparent">
          <MenuItem className="flex items-center gap-2 group hover:bg-opacity-15 hover:text-white">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 2H12C9.17157 2 7.75736 2 6.87868 2.94627C6 3.89254 6 5.41554 6 8.46154V9.53846C6 12.5845 6 14.1075 6.87868 15.0537C7.75736 16 9.17157 16 12 16H16C18.8284 16 20.2426 16 21.1213 15.0537C22 14.1075 22 12.5845 22 9.53846V8.46154C22 5.41554 22 3.89254 21.1213 2.94627C20.2426 2 18.8284 2 16 2Z"
                stroke="#ffffff"
                strokeWidth="1.5"
              ></path>
              <path
                opacity=".4"
                d="M18 16.6082C17.9879 18.9537 17.8914 20.2239 17.123 21.0525C16.2442 22 14.8298 22 12.0011 22H8.00065C5.17192 22 3.75755 22 2.87878 21.0525C2 20.1049 2 18.5799 2 15.5298V14.4515C2 11.4014 2 9.87638 2.87878 8.92885C3.52015 8.2373 4.44682 8.05047 6.00043 8"
                stroke="#ffffff"
                strokeWidth="1.5"
              ></path>
            </svg>
          </MenuItem>
        </MenuHandler>
        <MenuList className="bg-primary text-white border border-opacity-10 bg-opacity-30 mt-4 p-0 -ml-3">
          <MenuItem className="flex  items-center gap-4 hover:bg-opacity-15 hover:text-white">
            <Avatar
              variant="square"
              alt="tania andrew"
              className="cursor-pointer "
              size="xs"
              src={themes}
            />
            <Typography> HEl</Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Themes;
