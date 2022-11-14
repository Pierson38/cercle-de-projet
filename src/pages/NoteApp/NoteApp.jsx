import "./NoteApp.css";
import React from "react";

import "../../fonts/SF_Pro/SF-Pro.ttf";
import NoteItem from "../../components/Note/NoteItem";

import notes from "../../data/note";
import { Link } from "react-router-dom";

function NoteApp({ location }) {
  return (
    <main className="px-6 py-6 h-screen">
      <h1 className="font-bold text-3xl">Notes</h1>
      {notes.map((item) => (
        <Link to={`/notes/${item.id}`}>
          <NoteItem note={item} key={item.id} />
        </Link>
      ))}
    </main>
  );
}

export default NoteApp;
