import React, { useEffect } from "react";
import "./ProjetApp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import game from "../../Game/game";
import Notification from "../../components/Notification/Notification";
import Popup from "../../components/Popup/Popup";

function ProjetApp() {
  const [projetPage, setProjetPage] = useState("projet");

  const [produit, setProduit] = useState("application");
  const [deadline, setDeadline] = useState("2semaines");
  const [budget, setBudget] = useState("30k");
  const [article, setArticle] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [goodies, setGoodies] = useState(false);
  const [forum, setForum] = useState(false);
  const [marketplace, setMarketplace] = useState(false);
  const [compte, setCompte] = useState(false);
  const [payement, setPayement] = useState(false);
  const [showFinishMessage, setShowFinishMessage] = useState(false);

  const [popup, setPopup] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    waitForElement();
    if (game.getEnigmeIdentificationUnlock()) {
      setShowFinishMessage(true);
      setProduit("siteinternet");
      setDeadline("3mois");
      setBudget("50k");
      setArticle(true);
      setNewsletter(true);
    }
  }, []);

  useEffect(() => {}, [showFinishMessage]);

  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  function waitForElement() {
    setNotification(game.getNotification());
    setShowNotification(game.getShowNotification());
    setTimeout(waitForElement, 3000);
  }

  function ShowWhenFinish() {
    if (showFinishMessage) {
      return <p className="text-center">Projet bien enregistré ! Il faut maintenant attribuer les tâches à votre équipe</p>;
    } else {
      return (
        <button
          className="bg-blue rounded-lg py-4 px-6 text-white"
          onClick={(e) => verifyResponse(e)}
        >
          Envoyer
        </button>
      );
    }
  }

  function verifyResponse(event) {
    event.preventDefault();

    if (
      produit === "siteinternet" &&
      deadline === "3mois" &&
      budget === "50k" &&
      article === true &&
      newsletter === true &&
      goodies === false &&
      forum === false &&
      forum === false &&
      marketplace === false &&
      compte === false &&
      payement === false
    ) {
      game.setEnigmeIdentificationUnlock(true);
      setShowFinishMessage(true);
    } else {
      setPopup({ title: "Erreur", content: "Les informations sont incorects" });
      setShowPopup(true);
    }
  }

  const handleClick = () => {
    // 👇️ take parameter passed from Child component
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <Popup popup={popup} handleClick={handleClick} />}
      {showNotification && <Notification notification={notification} />}
      <main className="px-6 py-6 h-screen NoteApp flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl">Projet</h1>
          <form>
            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold"> Produit :</span>
                <select
                  value={produit}
                  onChange={(e) => setProduit(e.target.value)}
                >
                  <option value="application">Application</option>
                  <option value="siteinternet">Site Internet</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="jeu">Jeu</option>
                </select>
              </label>
            </div>

            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold">Deadline :</span>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                >
                  <option value="2semaines">2 semaines</option>
                  <option value="1mois">1 mois</option>
                  <option value="3mois">3 mois</option>
                  <option value="1an">1 an</option>
                </select>
              </label>
            </div>

            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold">Budget :</span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="30k">30k</option>
                  <option value="50k">50k</option>
                  <option value="100k">100k</option>
                  <option value="150k">150k</option>
                </select>
              </label>
            </div>
            <div className="mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold">Fonctionnalités :</span>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Article"
                    name="interest"
                    onChange={(e) => setArticle(e.target.checked)}
                    checked={article}
                  />
                  <label className="ml-2" htmlFor="Article">
                    Article
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Goodies"
                    name="interest"
                    onChange={(e) => setGoodies(e.target.checked)}
                  />
                  <label className="ml-2" htmlFor="Goodies">
                    Achat Goodies
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Forum"
                    name="interest"
                    onChange={(e) => setForum(e.target.checked)}
                  />
                  <label className="ml-2" htmlFor="Forum">
                    Forum
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Marketplace"
                    name="interest"
                    value={marketplace}
                    onChange={(e) => setMarketplace(e.target.checked)}
                  />
                  <label className="ml-2" htmlFor="Marketplace">
                    Marketplace
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Newsletter"
                    name="interest"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    checked={newsletter}
                  />
                  <label className="ml-2" htmlFor="Newsletter">
                    Newsletter
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Compte"
                    name="interest"
                    value={compte}
                    onChange={(e) => setCompte(e.target.checked)}
                  />
                  <label className="ml-2" htmlFor="Compte">
                    Système de compte
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="Payement"
                    name="interest"
                    value={payement}
                    onChange={(e) => setPayement(e.target.checked)}
                  />
                  <label className="ml-2" htmlFor="Payement">
                    Payement
                  </label>
                </div>
              </label>
            </div>
            <div className="flex justify-center mt-8">
              <ShowWhenFinish />
            </div>
          </form>
        </div>
        <div className="flex justify-around py-10">
          <Link to={"/projet"}>
            <div className="text-sm z-10">
              <img className="m-auto w-8" src="/assets/clock.png" alt="" />
              Projet
            </div>
          </Link>
          <Link to={"/projetValideAppel"}>
            <div className="text-sm z-10">
              <img className="m-auto w-8" src="/assets/conflict.png" alt="" />
              Conflit
            </div>
          </Link>
          <Link to={"/projetCode"}>
            <div className="text-sm z-10">
              <img className="m-auto w-8" src="/assets/conformite.png" alt="" />
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

export default ProjetApp;
