import React, { Component } from "react";
import "./ProjetApp.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProjetApp() {
  const [produit, setProduit] = useState('siteinternet');
  const [deadline, setDeadline] = useState('2semaines');
  const [budget, setBudget] = useState('30k');
  const [fonctionnalite, setFonctionnalite] = useState(["Compte", "Forum"]);
  
    return (
      <main className="px-6 py-6 h-screen NoteApp flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl">Projet</h1>
          <form >
            <div>
              <label>
                Produit:
                <select value={produit} onChange={e => setProduit(e.target.value)}>
                  <option value="siteinternet">Site Internet</option>
                  <option value="application">Application</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="jeu">Jeu</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Deadline:
                <select value={deadline} onChange={e => setDeadline(e.target.value)}>
                  <option value="2semaines">2 semaines</option>
                  <option value="1mois">1 mois</option>
                  <option value="3mois">3 mois</option>
                  <option value="1an">1 an</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Budget:
                <select value={budget} onChange={e => setBudget(e.target.value)} >
                  <option value="30k">30k</option>
                  <option value="50k">50k</option>
                  <option value="100k">100k</option>
                  <option value="150k">150k</option>
                </select>
              </label>
            </div>
            <div>
              <label>
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
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <Link to="/">
            <p className="text-center">Home</p>
          </Link>
        </div>
      </main>
    );
}

export default ProjetApp;
