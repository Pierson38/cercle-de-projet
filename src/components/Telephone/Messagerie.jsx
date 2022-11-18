import React from "react";
import { useState, useEffect } from "react";
import "./Messagerie.css";
import game from "../../Game/game";
import { useNavigate } from "react-router";

function Messagerie() {
  const [messagerie, setMessagerie] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    waitForElement();
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const navigate = useNavigate();
  useEffect(() => {
    if (redirect) {
      navigate("/lastpage");
    }
  });

  async function redirectFinal() {
    await sleep(20000);
    setRedirect(true);
  }

  function waitForElement() {
    setMessagerie(game.getMessagerie());
    console.log(messagerie);
    setTimeout(waitForElement, 3000);
  }

  // un hook custom pour gérer l'audio
  const useAudio = (message) => {
    const [audio] = useState(new Audio(message.url));
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

    if (message.url === "/assets/vocaux/Clap_de_fin.mp3") {
      redirectFinal();
    }

    return [playing, togglePlayback];
  };

  const AudioPlayer = ({ message }) => {
    const [playing, togglePlayback] = useAudio(message);

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
          <button onClick={togglePlayback}>{playing ? "⏸️" : "⏯️"}</button>
        </div>
      </div>
    );
  };

  return (
    <div className="messagerie">
      <h1 className="font-bold text-3xl">Messagerie</h1>
      <hr className="my-3" />
      {messagerie.map((item) => (
        <div>
          <div className="my-4">
            <AudioPlayer message={item} key={item.id} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Messagerie;
