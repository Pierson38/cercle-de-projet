import React from "react";

import "../../fonts/SF_Pro/SF-Pro.ttf";

import messages from "../../data/messages";
import { Link } from "react-router-dom";
import MessageItem from "../../components/Message/MessageItem";

function MessageApp() {
  return (
    <main className="px-6 py-6 h-screen">
      <h1 className="font-bold text-1xl text-center">Messages</h1>
      {messages.map((item) => (
        <Link to={`/messages/${item.id}`}>
          <MessageItem message={item} key={item.id} />
        </Link>
      ))}
    </main>
  );
}

export default MessageApp;