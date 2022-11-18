import React, { useEffect } from "react";
import "./Presentation.css";
import { Link, useNavigate } from "react-router-dom";
import game from "../../Game/game";

function Presentation() {
  const navigate = useNavigate();
  useEffect(() => {
    if (game.getLockScreenUnlock()) {
      navigate("/home");
    }
  });

  return (
    <main className="h-screen w-full flex flex-column items-center bg-grey">
      <section className="m-4">
        <h1 className="text-4xl font-bold w-3/4">
          Bienvenue sur le serious game de chef de projet{" "}
        </h1>
        <p className="text-grey font-medium mt-2 w-10/12">
          Bon jeu !
        </p>

        <div className="flex justify-between items-center bg-white rounded-3xl shadow mt-4 py-16 px-4">
          <div className="w-2/3 mr-4">
            <h2 className="font-bold text-2xl">
              Résolvez les tâches que l’on vous donne
            </h2>
            <p className="text-grey font-medium text-sm mt-4">
              Vous devrez réaliser les différentes étapes qu’un{" "}
              <span className="font-bold text-orange">chef de projet</span> peut
              rencontrer.
            </p>
          </div>
          <div>
            <img src="/assets/illustration/man.png" alt="" />
          </div>
        </div>

        <Link to="/lockscreen">
          <div className="flex justify-center">
            <button className="bg-orange text-white font-medium rounded-full mt-8 px-8 py-4">
              Commencer le jeu !
            </button>
          </div>
        </Link>
        <p className="text-center text-xs mt-4 text-grey">
          Des <span className="text-orange font-bold">astuces</span>{" "}
          apparaîtront si vous mettez trop de temps à résoudre les énigmes
        </p>
      </section>
    </main>
  );
}

export default Presentation;
