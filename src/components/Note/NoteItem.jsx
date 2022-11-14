import React, { Component } from "react";
import './NoteItem.css';

function NoteItem({ note }) {
  return (
      <div className="mt-4 noteItem p-2 rounded-lg">
        <h2 className="font-bold">{note.title}</h2>
        <p className="">{note.description.slice(0, 30)}...</p>
      </div>
  );
}

export default NoteItem;
