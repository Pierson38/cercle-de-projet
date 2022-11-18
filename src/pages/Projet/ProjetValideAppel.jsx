import React, { useEffect, useState } from "react";
import "./ProjetApp.css";
import { Link } from "react-router-dom";
import "./ProjetApp.css";
import Popup from "../../components/Popup/Popup";
import Notification from "../../components/Notification/Notification";
import game from "../../Game/game";

function ProjetValideAppel() {
  const [mdp_fini, setMdp_fini] = useState(false);
  const [mdp, setMdp] = useState("");
  const [notification, setNotification] = useState("design");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    waitForElement();
    if (game.getEnigmeAppel()) {
      setMdp_fini(true);
      setMdp("PHARAONMDR");
    }

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

  function verifyMdp(e) {
    e.preventDefault();
    if (mdp.toUpperCase() === "PHARAONMDR") {
      setMdp_fini(true);
      game.setEnigmeAppel(true);
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
      <h1 className="font-bold text-3xl">Conflit</h1>
        <div>
          <form>
            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold mx-2">Mot de passe :</span>
                <input
                  className="w-32"
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setMdp(e.target.value)}
                />
              </label>
            </div>

       
              <div className="flex justify-center mt-8">
                <button
                  className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                  onClick={(e) => verifyMdp(e)}
                >
                  Envoyer
                </button>
              </div>

            {mdp_fini && (
              <div className="flex justify-center mt-8">
                <p className="text-center">Le conflit a été géré ! Il faut maintenant vérifier la conformité.</p>
              </div>
            )}
          </form>
        </div>
        <div className="flex justify-around  py-10">
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

export default ProjetValideAppel;
