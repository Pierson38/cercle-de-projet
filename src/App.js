
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import NoteApp from './pages/NoteApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blogs" element={<NoteApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
