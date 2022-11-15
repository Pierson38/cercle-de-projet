import React, { Component } from "react";
import { Link } from "react-router-dom";
import applications from "../../data/applications";
import "./HomePage.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";

class HomePage extends Component {
  render() {
    return (
      <main className="h-screen homeScreen">
        <div className="grid grid-cols-4 pt-5">
          {applications.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="application" key={item.id}>
                <img src={item.icon} alt="" className="w-14 m-auto mb-1" />
                <p className="text-white text-center font-medium">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
  }
}

export default HomePage;
