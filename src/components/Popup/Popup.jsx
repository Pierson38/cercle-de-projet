import React from "react";
import "./Popup.css";
function Popup({ popup, handleClick }) {
  return (
    <div className="h-screen w-full flex justify-center items-center p-4 fixed">
      <div className="bg-white bg-shadow rounded-2xl">
        <div className="flex flex-col items-center justify-center py-8 px-12">
          <h1 className="font-bold text-xl mb-2">{popup.title}</h1>
          <p className="p-1">{popup.content}</p>
        </div>

        <div className="w-full text-center border-t-grey p-3" onClick={e => handleClick(e)}>
          <button className="text-blue" >Ok</button>
        </div>
      </div>

    </div>
  );
}

export default Popup;
