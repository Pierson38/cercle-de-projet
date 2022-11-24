import React from "react";


import game from '../../Game/game';
import { Link } from "react-router-dom";
import MessageItem from "../../components/Message/MessageItem";


function MessageApp() {

  const messages = game.getMessages();
  return (
    <main className="px-6 py-6 h-screen flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-1xl text-center">Messages</h1>
        {messages.slice(0).reverse().map((item) => (
          <Link to={`/messages/${item.id}`}>
            <MessageItem message={item} key={item.id} />
          </Link>
        ))}
      </div>
      <div className="fixed bottom-0 w-full left-0">
        <Link to="/" className="">
          <img src="/assets/buttonHome.png" alt="" className=" w-10 mx-auto pb-4"/>
        </Link>
      </div>
    </main>
  );
}

export default MessageApp;
