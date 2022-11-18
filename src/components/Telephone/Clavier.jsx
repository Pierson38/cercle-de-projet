import React, { useEffect } from "react";
import "./Clavier.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import game from "../../Game/game";

function Clavier() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appelTo, setAppelTo] = useState("");

  const addToPhoneNumber = (value) => {
    var temp = phoneNumber + value;
    setPhoneNumber(temp);
  };

  const supprToPhone = (value) => {
    var temp = phoneNumber.substring(0, phoneNumber.length - 1);
    setPhoneNumber(temp);
  };
  const call = () => {
    switch (phoneNumber) {
      case "0639280418":
        setAppelTo("Aubin");
        break;

      case "0629041805":
        setAppelTo("Christian");
        break;

      case "0639042840":
        setAppelTo("Raymond");
        break;

      case "0609282910":
        setAppelTo("Eric");
        break;

      default:
        console.log("appel");
        break;
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    switch (appelTo) {
      case "Aubin":
        navigate("/appel/0");
        game.setHistorique({ numero: phoneNumber, id: 0 });
        break;
      case "Christian":
        navigate("/appel/1");
        game.setHistorique({ numero: phoneNumber, id: 1 });
        break;

      case "Eric":
        navigate("/appel/3");
        game.setHistorique({ numero: phoneNumber, id: 1 });
        break;

      case "Raymond":
        navigate("/appel/2");
        game.setHistorique({ numero: phoneNumber, id: 1 });
        game.messageRaymond();
        break;

      default:
        break;
    }
  });

  return (
    <div className="mt-4 clavier p-2 flex flex-col justify-center">
      <p className="text-4xl text-center mb-5 h-10">{phoneNumber}</p>
      <div className="grid grid-cols-3">
        <div>
          <button
            onClick={() => addToPhoneNumber("1")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            1
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("2")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            2
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("3")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            3
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("4")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            4
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("5")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            5
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("6")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            6
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("7")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            7
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("8")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            8
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("9")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            9
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("*")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            *
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("0")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            0
          </button>
        </div>
        <div>
          <button
            onClick={() => addToPhoneNumber("#")}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block"
          >
            #
          </button>
        </div>
        <div></div>

        <div>
          <button
            onClick={() => call()}
            className="rounded-full bg-slate-400 text-center text-3xl clavier_number h-14 w-14 my-2 mx-auto block callButon"
          >
            <img className="block m-auto w-7" src="/assets/phone.png" alt="" />
          </button>
        </div>
        <div>
          {phoneNumber === "" ? (
            <div></div>
          ) : (
            <button
              className="rounded-full text-center text-3xl h-14 w-14 my-2 mx-auto block"
              onClick={() => supprToPhone()}
            >
              {" "}
              <img
                className="block m-auto"
                src="/assets/effacer.png"
                alt=""
              />{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Clavier;
