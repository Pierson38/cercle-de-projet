import React from "react";
import "./Popup.css";
import styled, { keyframes } from "styled-components";

function Popup({ popup }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">

      <div className="bg-white bg-shadow rounded-2xl w-80">
        <div className="flex flex-col items-center justify-center py-8 px-12">
          <h1 className="text-center font-bold text-xl mb-2">Hola Hooman !</h1>
          <p className="text-center p-1">This is a popup for homman</p>
        </div>

        <div className="w-full text-center border-t-grey p-3">
          <button className="text-blue">Ok</button>
        </div>
      </div>

    </div>
  );
}

export default Popup;
