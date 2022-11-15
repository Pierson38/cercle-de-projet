import React from "react";

import "../../fonts/SF_Pro/SF-Pro.ttf";
import { useState } from "react";
import "./TelephoneApp.css";
import { Link } from "react-router-dom";
import Clavier from "../../components/Telephone/Clavier";
import Messagerie from "../../components/Telephone/Messagerie";

function TelephoneApp() {
  const [phonePage, setPhonePage] = useState("clavier");

  return (
    <main className="px-6 py-6 h-screen TelephoneApp flex flex-col justify-between">
      {phonePage === "clavier" ? <Clavier /> : <Messagerie />}

      <div className="flex justify-around">
        <div className="text-sm" onClick={() => setPhonePage("clavier")}>
          <img className="m-auto w-8" src="/assets/icon-dialing.png" alt="" />
          Clavier
        </div>
        <div className="text-sm" onClick={() => setPhonePage("Messagerie")}>
          <img
            className="m-auto w-8"
            src="/assets/icon-messagerie.png"
            alt=""
          />
          Messagerie
        </div>
      </div>
      <div>
        <Link to="/">
          <p className="text-center">Home</p>
        </Link>
      </div>
    </main>
  );
}

export default TelephoneApp;
