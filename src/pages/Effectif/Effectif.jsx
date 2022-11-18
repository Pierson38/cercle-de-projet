import React, { useEffect, useState } from "react";
import "./Effectif.css";
import { Link } from "react-router-dom";
import game from "../../Game/game";
import Notification from "../../components/Notification/Notification";
import Popup from "../../components/Popup/Popup";

function Effectif() {
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
  const [lot1_diane, setLot1_diane] = useState("design");
  const [lot1_aubin, setLot1_aubin] = useState("design");
  const [lot1_christian, setLot1_christian] = useState("design");
  const [lot1_raymond, setLot1_raymond] = useState("design");
  const [lot1_eric, setLot1_eric] = useState("design");

  const [lot2_diane, setLot2_diane] = useState("design");
  const [lot2_aubin, setLot2_aubin] = useState("design");
  const [lot2_christian, setLot2_christian] = useState("design");
  const [lot2_raymond, setLot2_raymond] = useState("design");
  const [lot2_eric, setLot2_eric] = useState("design");

  const [lot3_diane, setLot3_diane] = useState("design");
  const [lot3_aubin, setLot3_aubin] = useState("design");
  const [lot3_christian, setLot3_christian] = useState("design");
  const [lot3_raymond, setLot3_raymond] = useState("design");
  const [lot3_eric, setLot3_eric] = useState("design");

  const [lot1_fini, setLot1_fini] = useState(false);
  const [lot2_fini, setLot2_fini] = useState(false);
  const [lot3_fini, setLot3_fini] = useState(false);

  const [popup, setPopup] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  function verifyResponseLot1() {
    if (
      lot1_diane === "back" &&
      lot1_aubin === "front" &&
      lot1_christian === "design" &&
      lot1_raymond === "design" &&
      lot1_eric === "back"
    ) {
      setLot1_fini(true);
    } else {
      setPopup({
        title: "Erreur",
        content: "Les missions attribués pour le lot 1 ne fonctionnent pas",
      });
      setShowPopup(true);
    }
  }

  function verifyResponseLot2() {
    if (
      lot2_diane === "back" &&
      lot2_aubin === "front" &&
      lot2_christian === "design" &&
      lot2_raymond === "front" &&
      lot2_eric === "design"
    ) {
      setLot2_fini(true);
    } else {
      setPopup({
        title: "Erreur",
        content: "Les missions attribués pour le lot 2 ne fonctionnent pas",
      });
      setShowPopup(true);
    }
  }

  function verifyResponseLot3() {
    if (
      lot3_diane === "back" &&
      lot3_aubin === "design" &&
      lot3_christian === "front" &&
      lot3_raymond === "back" &&
      lot3_eric === "design"
    ) {
      setLot3_fini(true);
      game.setEnigmeIdentificationUnlock(true);
      game.lunch3enigme();
    } else {
      setPopup({
        title: "Erreur",
        content: "Les missions attribués pour le lot 3 ne fonctionnent pas",
      });
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
      <main>
        {showNotification && <Notification notification={notification} />}
        <section className="p-8 mt-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-extrabold"> Effectif </h1>
              <p className="text-grey font-medium mt-2">
                {" "}
                Attribut les bons rôles au sein de l’équipe{" "}
              </p>
            </div>
            <div>
              <img
                className="-mt-8 w-80"
                src="/assets/illustration/illu-effectif.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-shadow bg-purple-100 p-8 rounded-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-500">Lot 1</h2>
              <img
                className="w-10"
                src="/assets/illustration/icon-group.png"
                alt=""
              />
            </div>
            <p className="text-blue-500">5 Back | 2 Front | 5 Design</p>
            <hr className="border-purple-500 mt-4" />

            <div className="flex flex-col mt-4">
              <label className="flex justify-between text-grey text-sm">
                <span className="text-blue-500">Diane Carrière :</span>
                <select
                  value={lot1_diane}
                  onChange={(e) => setLot1_diane(e.target.value)}
                >
                  <option value="design">Designer</option>
                  <option value="front">Dev Front</option>
                  <option value="back">Dev Back</option>
                </select>
              </label>
              <label className="flex justify-between text-grey text-sm mt-2">
                <span className="text-blue-500">Aubin Langlois :</span>
                <select
                  value={lot1_aubin}
                  onChange={(e) => setLot1_aubin(e.target.value)}
                >
                  <option value="design">Designer</option>
                  <option value="front">Dev Front</option>
                  <option value="back">Dev Back</option>
                </select>
              </label>
              <label className="flex justify-between text-grey text-sm mt-2">
                <span className="text-blue-500">Christian Deserres :</span>
                <select
                  value={lot1_christian}
                  onChange={(e) => setLot1_christian(e.target.value)}
                >
                  <option value="design">Designer</option>
                  <option value="front">Dev Front</option>
                  <option value="back">Dev Back</option>
                </select>
              </label>
              <label className="flex justify-between text-grey text-sm mt-2">
                <span className="text-blue-500">Raymond Brousseau :</span>
                <select
                  value={lot1_raymond}
                  onChange={(e) => setLot1_raymond(e.target.value)}
                >
                  <option value="design">Designer</option>
                  <option value="front">Dev Front</option>
                  <option value="back">Dev Back</option>
                </select>
              </label>
              <label className="flex justify-between text-grey text-sm mt-2">
                <span className="text-blue-500">Eric Champagne :</span>
                <select
                  value={lot1_eric}
                  onChange={(e) => setLot1_eric(e.target.value)}
                >
                  <option value="design">Designer</option>
                  <option value="front">Dev Front</option>
                  <option value="back">Dev Back</option>
                </select>
              </label>
            </div>
          </div>

          {!lot1_fini && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                onClick={(e) => verifyResponseLot1(e)}
              >
                Envoyer
              </button>
            </div>
          )}

          {lot1_fini && (
            <div className="bg-shadow bg-purple-100 p-8 rounded-2xl mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-500">Lot 2</h2>
                <img
                  className="w-10"
                  src="/assets/illustration/icon-group.png"
                  alt=""
                />
              </div>
              <p className="text-blue-500">2 Back | 4 Front | 3 Design</p>
              <hr className="border-purple-500 mt-4" />

              <div className="flex flex-col mt-4">
                <label className="flex justify-between text-grey text-sm">
                  <span className="text-blue-500">Diane Carrière :</span>
                  <select
                    value={lot2_diane}
                    onChange={(e) => setLot2_diane(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Aubin Langlois :</span>
                  <select
                    value={lot2_aubin}
                    onChange={(e) => setLot2_aubin(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Christian Deserres :</span>
                  <select
                    value={lot2_christian}
                    onChange={(e) => setLot2_christian(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Raymond Brousseau :</span>
                  <select
                    value={lot2_raymond}
                    onChange={(e) => setLot2_raymond(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Eric Champagne :</span>
                  <select
                    value={lot2_eric}
                    onChange={(e) => setLot2_eric(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {lot1_fini && !lot2_fini && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                onClick={(e) => verifyResponseLot2(e)}
              >
                Envoyer
              </button>
            </div>
          )}

          {lot2_fini && (
            <div className="bg-shadow bg-purple-100 p-8 rounded-2xl mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-500">Lot 3</h2>
                <img
                  className="w-10"
                  src="/assets/illustration/icon-group.png"
                  alt=""
                />
              </div>
              <p className="text-blue-500">3 Back | 1 Front | 2 Design</p>
              <hr className="border-purple-500 mt-4" />

              <div className="flex flex-col mt-4">
                <label className="flex justify-between text-grey text-sm">
                  <span className="text-blue-500">Diane Carrière :</span>
                  <select
                    value={lot3_diane}
                    onChange={(e) => setLot3_diane(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Aubin Langlois :</span>
                  <select
                    value={lot3_aubin}
                    onChange={(e) => setLot3_aubin(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Christian Deserres :</span>
                  <select
                    value={lot3_christian}
                    onChange={(e) => setLot3_christian(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Raymond Brousseau :</span>
                  <select
                    value={lot3_raymond}
                    onChange={(e) => setLot3_raymond(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
                <label className="flex justify-between text-grey text-sm mt-2">
                  <span className="text-blue-500">Eric Champagne :</span>
                  <select
                    value={lot3_eric}
                    onChange={(e) => setLot3_eric(e.target.value)}
                  >
                    <option value="design">Designer</option>
                    <option value="front">Dev Front</option>
                    <option value="back">Dev Back</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {lot1_fini && lot2_fini && !lot3_fini && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-purple rounded-lg py-4 px-6 text-blue-500"
                onClick={(e) => verifyResponseLot3(e)}
              >
                Envoyer
              </button>
            </div>
          )}

          {lot1_fini && lot2_fini && lot3_fini && (
            <div className="flex justify-center mt-8">
              <p className="text-center">
                Les taches de chaques personnes ont bien été attribués ! A leur tour de jouer, vous pouvez respirer deux minutes.
              </p>
            </div>
          )}
        </section>
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
    </div>
  );
}

export default Effectif;
