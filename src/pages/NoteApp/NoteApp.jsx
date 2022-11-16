import "./NoteApp.css";
import React from "react";

import "../../fonts/SF_Pro/SF-Pro.ttf";
import NoteItem from "../../components/Note/NoteItem";

import notes from "../../data/note";
import { Link } from "react-router-dom";

function NoteApp() {
  return (
    <main className="px-6 py-6 NoteApp flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-3xl">Notes</h1>
        {notes.map((item) => (
          <Link to={`/notes/${item.id}`}>
            <NoteItem note={item} key={item.id} />
          </Link>
        ))}
      </div>
      <div className="fixed bottom-0 w-full left-0">
        <Link to="/" className="">
          <img src="/assets/buttonHome.png" alt="" className=" w-10 mx-auto pb-4"/>
        </Link>
      </div>
    </main>
  );
}

export default NoteApp;
