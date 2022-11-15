import React, { Component } from "react";
import "./ProjetApp.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";
import { Link } from "react-router-dom";

class ProjetApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produit: "siteinternet",
      deadline: "2semaines",
      budget: "30k",
      fonctionnalite: ["Compte", "Forum"],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <main className="px-6 py-6 h-screen NoteApp flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl">Projet</h1>
          <form onSubmit={this.handleSubmit}>
            <div class="bg-white p-4 border-b border-grey mt-4">
              <label class="text-grey text-lg">
              <span class="font-semibold"> Produit :</span>
                <select value={this.state.produit} onChange={this.handleChange}>
                  <option value="siteinternet">Site Internet</option>
                  <option value="application">Application</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="jeu">Jeu</option>
                </select>
              </label>
            </div>

            <div class="bg-white p-4 border-b border-grey mt-4">
              <label class="text-grey text-lg">
                <span class="font-semibold">Deadline :</span>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="2semaines">2 semaines</option>
                  <option value="1mois">1 mois</option>
                  <option value="3mois">3 mois</option>
                  <option value="1an">1 an</option>
                </select>
              </label>
            </div>

            <div class="bg-white p-4 border-b border-grey mt-4">
              <label class="text-grey text-lg">
              <span class="font-semibold">Budget :</span>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="30k">30k</option>
                  <option value="50k">50k</option>
                  <option value="100k">100k</option>
                  <option value="150k">150k</option>
                </select>
              </label>
            </div>

            {/*<div class="bg-white p-4 border-b border-grey mt-4">
              <label class="text-grey text-lg">
                Fonctionnalités:
                <select multiple={true} onChange={this.handleChange}>
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
            <div class="mt-4">
              <label class="text-grey text-lg">
                <span class="font-semibold">Fonctionnalités :</span>
                <div class="mt-2">
                  <input type="checkbox" id="coding" name="interest" value="Article"/>
                  <label class="ml-2" for="Article">Article</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="music" name="interest" value="Newsletter"/>
                  <label class="ml-2" for="Newsletter">Newsletter</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="art" name="interest" value="Goodies"/>
                  <label class="ml-2" for="Goodies">Achat Goodies</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="sports" name="interest" value="Forum"/>
                  <label class="ml-2" for="Forum">Forum</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="cooking" name="interest" value="Marketplace"/>
                  <label class="ml-2" for="Marketplace">Marketplace</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="cooking" name="interest" value="Compte"/>
                  <label class="ml-2" for="Compte">Système de compte</label>
                </div>
                <div class="mt-2">
                  <input type="checkbox" id="cooking" name="interest" value="Payement"/>
                  <label class="ml-2" for="Payement">Payement</label>
                </div>
              </label>
            </div>

            <div class="flex justify-center mt-8"><input class="bg-blue rounded-lg py-4 px-6 text-white" type="submit" value="Envoyer" /></div>
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
}

export default ProjetApp;
