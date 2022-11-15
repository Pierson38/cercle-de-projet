
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fonts/SF_Pro/SF-Pro.ttf";
import HomePage from './pages/HomePage/HomePage'
import NoteApp from './pages/NoteApp/NoteApp'
import Note from './pages/NoteApp/Note';
import Presentation from './pages/Presentation/Presentation';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
