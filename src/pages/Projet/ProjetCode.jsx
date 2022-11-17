import React from "react";
import "./ProjetApp.css";
import { Link } from "react-router-dom";

function ProjetCode() {
    return (
        <div className="h-screen w-full p-6">
            <form>
                <div className="bg-white p-4 border-b border-grey mt-4">
                    <label className="text-grey text-lg">
                        <span className="font-semibold mx-2">Mot de passe :</span>
                        <input className="w-32" type="password" placeholder="Mot de passe" />
                    </label>
                </div>
            </form>

            <div className="fixed bottom-0 w-full left-0">
                <Link to="/home" className="">
                <img
                    src="/assets/buttonHome.png"
                    alt=""
                    className=" w-10 mx-auto pb-4"
                />
                </Link>
            </div>
        </div>
    )
}

export default ProjetCode;
