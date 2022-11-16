import React, { Component } from "react";
import './Message.css';

function MessageItem({ message }) {
  return (
      <div className="mt-4 noteItem p-2 rounded-lg flex">
        <img className="mr-4 h-12 image-ronde" src={message.profilUrl} />
        <div className="border-b border-grey w-full pb-6">
          <h2 className="font-bold">{message.from}</h2>
          <p className="">{message.messages[0].message.slice(0, 30)}...</p>
        </div>
      </div>
  );
}

export default MessageItem;
