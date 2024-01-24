import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Recipe from './components/Recipe.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/Main.jsx'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Main/>} />
        <Route path="recipe" element={<Recipe/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
