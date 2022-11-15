
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fonts/SF_Pro/SF-Pro.ttf";
import HomePage from './pages/HomePage/HomePage'
import NoteApp from './pages/NoteApp/NoteApp'
import Note from './pages/NoteApp/Note';

import Presentation from './pages/Presentation/Presentation';

import MessageApp from './pages/messages/MessageApp';
import Message from './pages/messages/Message';
import TelephoneApp from './pages/Telephone/TelephoneApp';
import ProjetApp from './pages/Projet/ProjetApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="notes" element={<NoteApp />} />
        <Route path="presentation" element={<Presentation />} />
        <Route
          path="notes/:id/"
          element={<Note />}
        />
        <Route path="messages" element={<MessageApp />} />
        <Route
          path="messages/:id/"
          element={<Message />}
        />
        <Route path="telephone" element={<TelephoneApp />} />
        <Route path="projet" element={<ProjetApp />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
