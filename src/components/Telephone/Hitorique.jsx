import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import "./Historique.css";
import game from "../../Game/game";


function Historique() {
  const[historique, setHistorique] = useState([]);

  useEffect(() => {
    waitForElement();
    
  }, []);

  function waitForElement() {
    setHistorique(game.getHistorique());
    setTimeout(waitForElement, 3000);
    console.log(historique);
  }

  return (
    <div className="historique">
      <h1 className="font-bold text-3xl">Historique</h1>
      <hr className="my-3" />
      {historique.map((item) => (
       <Link to={`/appel/${item.id}`}>
         <div>
          <div className="my-4">
            <p>{item.numero}</p>
          </div>
          <hr />
        </div>
       </Link>
      ))}
    </div>
  );
}

export default Historique;
