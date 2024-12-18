import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import NoteApp from './pages/NoteApp/NoteApp'
import Note from './pages/NoteApp/Note';

import Presentation from './pages/Presentation/Presentation';
import LockScreen from './pages/LockScreen/LockScreen';
import Effectif from './pages/Effectif/Effectif'
import MessageApp from './pages/messages/MessageApp';
import Message from './pages/messages/Message';
import TelephoneApp from './pages/Telephone/TelephoneApp';
import ProjetApp from './pages/Projet/ProjetApp';
import Game from './Game/game';
import Popup from './components/Popup/Popup';
import Appel from './pages/Telephone/Appel';
import ProjetCode from './pages/Projet/ProjetCode';
import Historique from './components/Telephone/Hitorique';
import ProjetValideAppel from './pages/Projet/ProjetValideAppel';
import LastPage from './pages/LastPage/LastPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation/>} />
        <Route path="notes" element={<NoteApp />} />
        <Route path="effectif" element={<Effectif />} />
        <Route path="home" element={<HomePage />} />
        <Route path="lockscreen" element={<LockScreen />} />
        <Route path="popup" element={<Popup />} />
        <Route path="appel" element={<Appel />} />
        <Route path="projetCode" element={<ProjetCode />} />
        <Route path="ProjetValideAppel" element={<ProjetValideAppel />} />
        <Route path="historique" element={<Historique />} />
        <Route path="appel/:id/" element={<Appel />} />
        <Route path="lastpage" element={<LastPage />} />
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
