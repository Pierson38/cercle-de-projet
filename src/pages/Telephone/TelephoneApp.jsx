import React, { useEffect } from "react";

import { useState } from "react";
import "./TelephoneApp.css";
import { Link } from "react-router-dom";
import Clavier from "../../components/Telephone/Clavier";
import Messagerie from "../../components/Telephone/Messagerie";
import game from "../../Game/game";
import Notification from "../../components/Notification/Notification";
import Historique from "../../components/Telephone/Hitorique";

function TelephoneApp() {
  const [phonePage, setPhonePage] = useState("clavier");
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

  const ToShow = () => {
    switch (phonePage) {
      case "Messagerie":
        return <Messagerie />;
        break;
      case "Historique":
        return <Historique />;
        break;

      default:
        return <Clavier />;
        break;
    }
  };
  return (
    <main className="h-screen TelephoneApp flex flex-col justify-between">
      {showNotification && <Notification notification={notification} />}
      <div className="px-6 py-6 ">
        <ToShow />
      </div>

      <div className="flex justify-around  py-10">
        <div
          className="text-sm z-10"
          onClick={() => setPhonePage("Historique")}
        >
          <img
            className="m-auto w-8"
            src="/assets/clock.png"
            alt=""
          />
          Historique
        </div>
        <div className="text-sm z-10" onClick={() => setPhonePage("clavier")}>
          <img className="m-auto w-8" src="/assets/icon-dialing.png" alt="" />
          Clavier
        </div>

        <div
          className="text-sm z-10"
          onClick={() => setPhonePage("Messagerie")}
        >
          <img
            className="m-auto w-8"
            src="/assets/icon-messagerie.png"
            alt=""
          />
          Messagerie
        </div>
      </div>
      <div className="fixed bottom-0 w-full left-0">
        <Link to="/home" className="block w-fit m-auto">
          <img
            src="/assets/buttonHome.png"
            alt=""
            className=" w-10 mx-auto pb-4"
          />
        </Link>
      </div>
    </main>
  );
}

export default TelephoneApp;
