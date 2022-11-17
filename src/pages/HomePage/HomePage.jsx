import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import applications from "../../data/applications";
import "./HomePage.css";
import "../../fonts/SF_Pro/SF-Pro.ttf";
import Notification from "../../components/Notification/Notification";
import game from "../../Game/game";

function HomePage() {
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    waitForElement();
  }, []);

  function waitForElement() {
    setNotification(game.getNotification());
    setShowNotification(game.getShowNotification());
    setTimeout(waitForElement, 3000);
  }

  return (
    <main className="h-screen homeScreen flex flex-col justify-between">
      {showNotification && <Notification notification={notification} />}
      <div className="grid grid-cols-4 pt-5">
        {applications[0].map((item) => (
          <Link to={item.link} key={item.id}>
            <div className="application" key={item.id}>
              <img src={item.icon} alt="" className="w-14 m-auto mb-1" />
              <p className="text-white text-center font-medium">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-4 py-3 mb-6 app_down mx-4 rounded-3xl">
        {applications[1].map((item) => (
          <Link to={item.link} key={item.id}>
            <div className="application" key={item.id}>
              <img src={item.icon} alt="" className="w-14 m-auto" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
