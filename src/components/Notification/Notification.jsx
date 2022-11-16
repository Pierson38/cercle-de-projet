import React from "react";
import "./Notification.css";
import { useState, useEffect } from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

function Notification({ notification }) {
  const [show, setShow] = useState(true);

  var FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeIn}`};
  `;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function fetchData() {
      await sleep(5000);
      setShow(false);
    }

    fetchData();
  }, []);
  if (show) {
    return (
      <FadeIn className="fixed">
        <div className="mt-4 notification p-2 flex mx-4 rounded-xl">
          <div className="mr-3 flex justify-center flex-col">
            <img src="/assets/appIcons/icon-mail.png" alt="" className="w-20" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-bold leading-5">Titre</p>
              <p className="text-sm subtitle leading-5">il y a 22 min</p>
            </div>
            <p className="leading-5">
              Sous titre plus long et qui contient le contenue du message
            </p>
          </div>
        </div>
      </FadeIn>
    );
  } else {
    return "";
  }
}

export default Notification;
