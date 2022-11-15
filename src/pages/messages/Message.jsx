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
          <div class="flex p-3 justify-between items-center bg-grey-100">
            <p className="cancel" class="text-5xl blue -mt-2 ml-2">&#8249;</p>
            <div class="">
              <img src={messages[id].profilUrl} alt=""/>
              <h1 className="text-1xl">{messages[id].from}</h1>
            </div>
            <div></div>
          </div>
        </Link>
      </div>
      <div className="px-6 pb-6 h-screen mt-8">
        {messages[id].messages.map(item => {
          return item.from == "moi" ?
            <div class="flex justify-end"><div class="flex justify-end items-center rounded-2xl px-4 py-1 bg-blue w-fit text-white"> <span className="">{item.message}</span></div></div>
            :
            <div class="flex justify-start">
              <div>
                <span class="text-sm ml-2 text-grey">{item.from}</span>
                <div class="flex justify-start items-center rounded-2xl px-4 py-1 bg-grey w-fit"> 
                  <span className="">{item.message}</span>
                </div>
              </div>
            </div>
          })}
      </div>
    </div>
  );
}

export default Note;
