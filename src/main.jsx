import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Board from "./Board.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { TimerProvider } from "./context/TimerContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TimerProvider>
        <RouterProvider router={router} />
      </TimerProvider>
    </ThemeProvider>
  </StrictMode>
);
