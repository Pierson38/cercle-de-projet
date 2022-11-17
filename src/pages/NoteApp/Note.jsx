import React from "react";
import "./Note.css";
import notes from "../../data/note";
import { Link, useParams } from "react-router-dom";

function Note({ note }) {
  let { id } = useParams();
  return (
    <main className="flex flex-col justify-between">
      <div>
        <div className="p-3">
          <Link to=".." relative="path">
            <p className="cancel flex items-center -mt-2">
              <span class="text-5xl">&#8249;</span>
            </p>
          </Link>
        </div>
        <div className="px-6 pb-6">
          <h1 className="font-bold text-3xl">{notes[id].title}</h1>
          <p className="leading-7 mt-4">{notes[id].description}</p>
        </div>
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
    </main>
  );
}

export default Note;
