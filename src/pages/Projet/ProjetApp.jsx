import React, { Component } from "react";
import "./ProjetApp.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProjetApp() {
  const [produit, setProduit] = useState('siteinternet');
  const [deadline, setDeadline] = useState('2semaines');
  const [budget, setBudget] = useState('30k');
  const [article, setArticle] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [goodies, setGoodies] = useState(false);
  const [forum, setForum] = useState(false);
  const [marketplace, setMarketplace] = useState(false);
  const [compte, setCompte] = useState(false);
  const [payement, setPayement] = useState(false);


  
    return (
      <main className="px-6 py-6 h-screen NoteApp flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl">Projet</h1>
          <form>
            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
              <span className="font-semibold"> Produit :</span>
                <select value={produit} onChange={e => setProduit(e.target.value)}>
                  <option value="siteinternet">Site Internet</option>
                  <option value="application">Application</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="jeu">Jeu</option>
                </select>
              </label>
            </div>

            <div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold">Deadline :</span>
                <select value={deadline} onChange={e => setDeadline(e.target.value)}>
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
                <select value={budget} onChange={e => setBudget(e.target.value)}>
                  <option value="30k">30k</option>
                  <option value="50k">50k</option>
                  <option value="100k">100k</option>
                  <option value="150k">150k</option>
                </select>
              </label>
            </div>

            {/*<div className="bg-white p-4 border-b border-grey mt-4">
              <label className="text-grey text-lg">
                Fonctionnalités:
                <select multiple={true}  onChange={e => setFonctionnalite(e.target.value)} value={fonctionnalite}>
                  <option value="Article">Article</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Goodies">Achat Goodies</option>
                  <option value="Forum">Forum</option>
                  <option value="Marketplace">Marketplace</option>
                  <option value="Compte">Système de compte</option>
                  <option value="Payement">Payement</option>
                </select>
              </label>
            </div>*/}
            <div className="mt-4">
              <label className="text-grey text-lg">
                <span className="font-semibold">Fonctionnalités :</span>
                <div className="mt-2">
                  <input type="checkbox" id="Article" name="interest" value="Article" onChange={e => setArticle(e.target.value)}/>
                  <label className="ml-2" htmlFor="Article">Article</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Newsletter" name="interest" value="Newsletter" onChange={e => setNewsletter(e.target.value)}/>
                  <label className="ml-2" htmlFor="Newsletter">Newsletter</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Goodies" name="interest" value="Goodies" onChange={e => setGoodies(e.target.value)}/>
                  <label className="ml-2" htmlFor="Goodies">Achat Goodies</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Forum" name="interest" value="Forum" onChange={e => setForum(e.target.value)}/>
                  <label className="ml-2" htmlFor="Forum">Forum</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Marketplace" name="interest" value="Marketplace" onChange={e => setMarketplace(e.target.value)}/>
                  <label className="ml-2" htmlFor="Marketplace">Marketplace</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Compte" name="interest" value="Compte" onChange={e => setCompte(e.target.value)}/>
                  <label className="ml-2" htmlFor="Compte">Système de compte</label>
                </div>
                <div className="mt-2">
                  <input type="checkbox" id="Payement" name="interest" value="Payement" onChange={e => setPayement(e.target.value)}/>
                  <label className="ml-2" htmlFor="Payement">Payement</label>
                </div>
              </label>
            </div>

            <div className="flex justify-center mt-8"><input className="bg-blue rounded-lg py-4 px-6 text-white" type="submit" value="Envoyer" /></div>
          </form>
        </div>
        <div className="fixed bottom-0 w-full left-0">
        <Link to="/" className="">
          <img src="/assets/buttonHome.png" alt="" className=" w-10 mx-auto pb-4"/>
        </Link>
      </div>
      </main>
    );
}

export default ProjetApp;
