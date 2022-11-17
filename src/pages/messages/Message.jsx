import React from "react";
import "./Message.css";
import messages from "../../data/messages";
import { Link, useParams } from "react-router-dom";

function Note({ message }) {
  let { id } = useParams();

  return (
    <div>
      <div className="relative w-screen">
        <Link to=".." relative="path">
          <div className="flex p-3 justify-between items-center bg-grey-100">
            <p className="cancel text-5xl blue -mt-2 ml-2">
              &#8249;
            </p>
            <div className="">
              <img
                src={messages[id].profilUrl}
                alt=""
                className="image-ronde w-12 m-auto"
              />
              <h1 className="text-1xl text-center">{messages[id].from}</h1>
            </div>
            <div className="w-6"></div>
          </div>
        </Link>
      </div>
      <div className="px-6 pb-6 h-screen mt-8">
        {messages[id].messages.map((item) => {
          return item.from === "moi" ? (
            <div className="flex justify-end mt-4 ">
              <div className="flex justify-end items-center rounded-2xl px-4 py-1 bg-blue w-fit text-white max-width">
                {" "}
                <span className="">{item.message}</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-4 ">
              <div className="max-width">
                <span className="text-sm ml-2 text-grey">{item.from}</span>
                <div className="flex justify-start items-center rounded-2xl px-4 py-1 bg-grey w-fit">
                  <span className="">{item.message}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 w-full left-0">
        <Link to="/home" className="block w-fit m-auto z-20">
          <img
            src="/assets/buttonHome.png"
            alt=""
            className="w-10 mx-auto pb-4"
          />
        </Link>
      </div>
    </div>
  );
}

export default Note;
