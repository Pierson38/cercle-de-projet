import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import game from "../../Game/game";

import "./Appel.css";

function Appel() {
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [total, setTotal] = useState("00:00");

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // async function timer() {
  //     var dt = new Date();
  //     dt.setHours(0);
  //     dt.setMinutes(0);
  //     dt.setSeconds(0);

  //     var dt2 = new Date(dt.valueOf() + 1000);
  //     var temp = dt2.toTimeString().split(" ");

  //     var ts = temp[0].split(":");
  //     console.log(ts);
  //     console.log(ts[1]+":"+ts[2]);
  //     setTimeout(timer, 1000);
  // }

  // useEffect(() => {
  //     setTimeout(timer, 1000);

  //   }, []);

  let { id } = useParams();
  const appel = game.getAppels()[id];

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

  const [playing, togglePlayback] = useAudio(appel.vocalurl);

  return (
    <section
      id="codeScreen"
      className="relative h-screen w-full screen-2"
      onClick={togglePlayback}
    >
      <div className="absolute h-screen w-full bg-img blur-lg brightness-70 -z-10"></div>
      <div className="flex flex-col items-center pt-16">
        <p className="flex text-4xl text-white tracking-wide mt-12">
          <span className="mr-2">{appel.from}</span>
          <img
            className="w-6 h-6"
            src="/assets/illustration/info.png"
            alt="info"
          />
        </p>
        <p id="timer" className="text-white w-48 text-center mt-2">
          00:00
        </p>

        <div className="flex flex-col mt-24">
          <div className="flex justify-between w-72">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/microphone.png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">mute</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/key.png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">clavier</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/vocal.png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">audio</p>
            </div>
          </div>
          <div className="flex justify-between w-72 mt-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/plus.png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">ajouter</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/camera.png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">FaceTime</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 opacity-10 bg-white rounded-full"></div>
                <img
                  className="absolute top-5 left-5 z-10 text-white text-4xl w-10"
                  src="/assets/illustration/user (1).png"
                  alt="phone"
                />
              </div>
              <p className="text-white-500 mt-2">contacts</p>
            </div>
          </div>
          <Link to={"/telephone"}>
          <div className="flex justify-center w-72 mt-16">
            <div className="relative">
              <div className="w-20 h-20 bg-red rounded-full"></div>
              <img
                className="absolute top-8 left-5 z-10 text-white text-4xl w-10"
                src="/assets/illustration/phone.png"
                alt="phone"
              />
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Appel;
