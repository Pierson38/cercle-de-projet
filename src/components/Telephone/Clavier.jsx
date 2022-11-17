import React from "react";
import "./Clavier.css";
import { useState } from "react";

function Clavier() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const addToPhoneNumber = (value) => {
    var temp = phoneNumber + value;
    setPhoneNumber(temp);
  };

  const supprToPhone = (value) => {
    var temp = phoneNumber.substring(0, phoneNumber.length - 1);
    setPhoneNumber(temp);
  };
  const call = () => {
    alert("Vous appeler");
  };

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
            <button className="rounded-full text-center text-3xl h-14 w-14 my-2 mx-auto block" onClick={() => supprToPhone()}> <img className="block m-auto" src="/assets/effacer.png" alt="" /> </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Clavier;
