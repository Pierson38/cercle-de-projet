import React, { Component } from "react";
import "./ProjetApp.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";

class ProjetApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        produit: "siteinternet",
        deadline: "2semaines",
        budget: "30k",
        fonctionnalite: ['Compte', 'Forum']
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
      <main className="px-6 py-6 h-screen NoteApp">
        <h1 className="font-bold text-3xl">Projet</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Produit:
              <select value={this.state.produit} onChange={this.handleChange}>
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
              <select value={this.state.value} onChange={this.handleChange}>
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
              <select value={this.state.value} onChange={this.handleChange}>
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
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default ProjetApp;