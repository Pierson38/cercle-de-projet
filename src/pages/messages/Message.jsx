import React from "react";
import "./Message.css";
import messages from "../../data/messages";
import { Link, useParams } from "react-router-dom";

function Note({ message }) {
  let { id } = useParams();

  return (
    <div>
      <div className="p-3">
        <Link to=".." relative="path">
          <p className="cancel">&lt; Cancel</p>
        </Link>
      </div>
      <div className="px-6 pb-6 h-screen">
        <h1 className="font-bold text-3xl">{messages[id].from}</h1>
        {messages[id].messages.map((item) => (
          <p className="leading-7 mt-4">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Note;
