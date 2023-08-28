import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chat from "./Chat";
import Main from "./Main";
import Chat2 from "./Chat2";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page 😭</div>,
    children: [
      { index: true, path: "/", element: <Main /> },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/chat2",
        element: <Chat2 />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
