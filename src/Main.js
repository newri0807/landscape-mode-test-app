import logo from "./logo.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="flex justify-center items-center w-full ">
          <div class="w-1/5 h-32 border border-red-500 m-2">1</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">2</div>
          <div
            class="w-1/5 h-32 border border-red-500 m-2 cursor-pointer"
            onClick={() => {
              navigate("/chat");
            }}
          >
            3
          </div>
          <div class="w-1/5 h-32 border border-red-500 m-2">4</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">5</div>
        </div>
      </header>
    </>
  );
};

export default Main;
