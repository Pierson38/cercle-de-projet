import React, { useEffect, useState } from "react";
import "./ProjetApp.css";
import { Link } from "react-router-dom";
import "./ProjetApp.css";
import Popup from "../../components/Popup/Popup";
import Notification from "../../components/Notification/Notification";
import game from "../../Game/game";

function ProjetCode() {
  const [mdp1_fini, setMdp1_fini] = useState(false);
  const [mdp2_fini, setMdp2_fini] = useState(false);
  const [mdp3_fini, setMdp3_fini] = useState(false);
  const [mdp1, setMdp1] = useState("");
  const [mdp2, setMdp2] = useState("");
  const [mdp3, setMdp3] = useState("");

  const [notification, setNotification] = useState("design");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    waitForElement();
  }, []);

  function waitForElement() {
    setNotification(game.getNotification());
    setShowNotification(game.getShowNotification());
    setTimeout(waitForElement, 3000);
  }

  const [popup, setPopup] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    // 👇️ take parameter passed from Child component
    setShowPopup(false);
  };

  function verifyMdp1(e) {
    e.preventDefault();
    if (mdp1 === "OB29X3") {
      setMdp1_fini(true);
    } else {
      setPopup({
        title: "Erreur",
        content: "Le mot de passe ne fonctionne pas",
      });
      setShowPopup(true);
    }
  }

  function verifyMdp2(e) {
    e.preventDefault();
    if (mdp2 === "N30SN2") {
      setMdp2_fini(true);
    } else {
      setPopup({
        title: "Erreur",
        content: "Le mot de passe ne fonctionne pas",
      });
      setShowPopup(true);
    }
  }

  function verifyMdp3(e) {
    e.preventDefault();
    if (mdp3 === "JD95JS") {
      setMdp3_fini(true);
      game.setEnigmeLogigram(true);
      game.lunchFinalAppel();
    } else {
      setPopup({
        title: "Erreur",
        content: "Le mot de passe ne fonctionne pas",
      });
      setShowPopup(true);
    }
  }

  return (
    <div>
      {showPopup && <Popup popup={popup} handleClick={handleClick} />}
      {showNotification && <Notification notification={notification} />}
      <main className="h-screen w-full p-6 NoteApp flex flex-col justify-between">
        <h1 className="font-bold text-3xl">Conformité</h1>
        <div>
          <form>
            <div className="bg-white p-4 border-b border-grey mt-4">
                <p className="text-center font-bold">Test de conformité : Je souhaite créer un article</p>
              <label className="text-grey text-lg">
                <span className="font-semibold mx-2">Mot de passe :</span>
                <input
                  className="w-32"
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setMdp1(e.target.value)}
                />
              </label>
            </div>

            {!mdp1_fini && (
              <div className="flex justify-center mt-8">
                <button
                  className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                  onClick={(e) => verifyMdp1(e)}
                >
                  Envoyer
                </button>
              </div>
            )}

            {mdp1_fini && (
              <div className="bg-white p-4 border-b border-grey mt-4">
                <p className="text-center font-bold">Test de conformité : Je souhaite envoyer une newsletter</p>
                <label className="text-grey text-lg">
                  <span className="font-semibold mx-2">Mot de passe :</span>
                  <input
                    className="w-32"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setMdp2(e.target.value)}
                  />
                </label>
              </div>
            )}

            {mdp1_fini && !mdp2_fini && (
              <div className="flex justify-center mt-8">
                <button
                  className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                  onClick={(e) => verifyMdp2(e)}
                >
                  Envoyer
                </button>
              </div>
            )}

            {mdp2_fini && (
              <div className="bg-white p-4 border-b border-grey mt-4">
                <p className="text-center font-bold">Test de conformité : Je souhaite consulter un article</p>
                <label className="text-grey text-lg">
                  <span className="font-semibold mx-2">Mot de passe :</span>
                  <input
                    className="w-32"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setMdp3(e.target.value)}
                  />
                </label>
              </div>
            )}

            {mdp1_fini && mdp2_fini && !mdp3_fini && (
              <div className="flex justify-center mt-8">
                <button
                  className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                  onClick={(e) => verifyMdp3(e)}
                >
                  Envoyer
                </button>
              </div>
            )}

            {mdp1_fini && mdp2_fini && mdp3_fini && (
              <div className="flex justify-center mt-8">
                <p className="text-center">Les tests ont réussis !</p>
              </div>
            )}
          </form>
        </div>
        <div className="flex justify-around mb-8">
          <Link to={"/projet"}>
            <div className="text-sm z-10">
              <img className="m-auto w-8" src="/assets/clock.png" alt="" />
              Projet
            </div>
          </Link>
          <Link to={"/projetValideAppel"}>
            <div className="text-sm z-10">
              <img
                className="m-auto w-8"
                src="/assets/conflict.png"
                alt=""
              />
              Conflit
            </div>
          </Link>
          <Link to={"/projetCode"}>
            <div className="text-sm z-10">
              <img
                className="m-auto w-8"
                src="/assets/conformite.png"
                alt=""
              />
              Conformité
            </div>
          </Link>
        </div>

        <div className="fixed bottom-0 w-full left-0">
          <Link to="/home" className="">
            <img
              src="/assets/buttonHome.png"
              alt=""
              className=" w-10 mx-auto pb-4"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ProjetCode;
