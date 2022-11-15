import React from "react";
import './Note.css';
import notes from "../../data/note";
import { Link, useParams } from "react-router-dom";

function Note({ note }) {
  let { id } = useParams();

  console.log(notes);
  return (
    <div>
      <div className="p-3">
        <Link to=".." relative="path">
            <p className="cancel flex items-center -mt-2"><span class="text-5xl">&#8249;</span></p>
        </Link>
      </div>
      <div className="px-6 pb-6 h-screen">
        <h1 className="font-bold text-3xl">{notes[id].title}</h1>
        <p className="leading-7 mt-4">{notes[id].description}</p>
      </div>
    </div>
  );
}

export default Note;
