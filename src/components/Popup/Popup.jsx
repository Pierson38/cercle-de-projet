import React from "react";
import "./Popup.css";
import styled, { keyframes } from "styled-components";

function Popup({ popup }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white bg-shadow rounded-2xl">
        <div className="flex flex-col items-center justify-center py-8 px-12">
          <h1 className="font-bold text-xl mb-2">{popup.title}</h1>
          <p className="p-1">{popup.title}</p>
        </div>

        <div className="w-full text-center border-t-grey p-3">
          <button className="text-blue">Ok</button>
        </div>
      </div>

    </div>
  );
}

export default Popup;
