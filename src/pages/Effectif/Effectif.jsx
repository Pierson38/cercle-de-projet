import React from "react";
import "./Effectif.css";
import { Link } from "react-router-dom";

function Effectif() {
  return (
    <main>
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
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Aubin Langlois :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Christian Deserres :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Raymond Brousseau :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Eric Champagne :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
          </div>
        </div>

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
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Aubin Langlois :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Christian Deserres :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Raymond Brousseau :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Eric Champagne :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
          </div>
        </div>

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
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Aubin Langlois :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Christian Deserres :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Raymond Brousseau :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
            <label className="flex justify-between text-grey text-sm mt-2">
              <span className="text-blue-500">Eric Champagne :</span>
              <select value="">
                <option value="desgin">Designer</option>
                <option value="front">Dev Front</option>
                <option value="back">Dev Back</option>
              </select>
            </label>
          </div>
        </div>
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
  );
}

export default Effectif;
