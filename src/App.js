
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage'
import NoteApp from './pages/NoteApp/NoteApp'
import Note from './components/Note/Note';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="notes" element={<NoteApp />} />
        <Route
          path="notes/:id/"
          element={<Note />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
