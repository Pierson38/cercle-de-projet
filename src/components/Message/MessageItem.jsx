import React, { Component } from "react";

function MessageItem({ message }) {
  return (
      <div className="mt-4 noteItem p-2 rounded-lg">
        <h2 className="font-bold">{message.from}</h2>
        <p className="">{message.messages[0].slice(0, 30)}...</p>
      </div>
  );
}

export default MessageItem;
