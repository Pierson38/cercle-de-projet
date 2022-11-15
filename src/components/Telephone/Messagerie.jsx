import React from "react";
import { useState, useEffect } from "react";

import messagerie from "../../data/messagerie";

function Messagerie() {
  // un hook custom pour gérer l'audio
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const togglePlayback = () => setPlaying(!playing);

    useEffect(() => {
      if (playing) {
        audio.play();
      } else {
        audio.pause();
      }
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, togglePlayback];
  };

  const AudioPlayer = ({ message }) => {
    const [playing, togglePlayback] = useAudio(message.url);

    return (
      <div>
        <div className="flex justify-between">
          <div>
          <p className=" font-bold">{message.from}</p>
          <p className="secondColor">France</p>
          </div>
          <div>
            <p className="text-end">{message.date}</p>
            <p className="text-end secondColor">{message.heure}</p>
          </div>
        </div>
        <div>
          <button onClick={togglePlayback} icon labelPosition="left">
            {playing ? "⏸️" : "⏯️"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Messagerie</h1>
      <hr className="my-3" />
      {messagerie.map((item) => (
        <div>
          <div className="my-4">
            <AudioPlayer message={item} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Messagerie;
