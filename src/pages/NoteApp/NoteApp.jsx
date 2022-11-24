import "./NoteApp.css";
import React, { useEffect, useState } from "react";

import NoteItem from "../../components/Note/NoteItem";
import game from "../../Game/game";
import notes from "../../data/note";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification/Notification";

function NoteApp() {
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    waitForElement();
  }, []);

  function waitForElement() {
    setNotification(game.getNotification());
    setShowNotification(game.getShowNotification());
    setTimeout(waitForElement, 3000);
  }

  return (
    <main className="NoteApp flex flex-col justify-between">
      <div>
        {showNotification && <Notification notification={notification} />}
        <div className="px-6 py-6">
          <h1 className="font-bold text-3xl">Notes</h1>
          {notes.map((item) => (
            <Link to={`/notes/${item.id}`}>
              <NoteItem className="z-10" note={item} key={item.id} />
            </Link>
          ))}
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

export default NoteApp;
