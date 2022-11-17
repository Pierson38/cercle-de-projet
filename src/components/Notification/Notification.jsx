import React from "react";
import "./Notification.css";
import { useState, useEffect } from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

function Notification({ notification }) {
  var FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeIn}`};
  `;

  return (
    <FadeIn className="fixed w-full">
      <div className="mt-4 notification p-2 flex mx-4 rounded-xl ">
        <div className="mr-3 flex justify-center flex-col">
          <img src={notification.icon} alt="" className="w-10" />
        </div>
        <div className=" w-full">
          <div className="flex justify-between">
            <p className="font-bold leading-5">{notification.title}</p>
            <p className="text-sm subtitle leading-5">maintenant</p>
          </div>
          <p className="leading-5">{notification.content}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default Notification;
