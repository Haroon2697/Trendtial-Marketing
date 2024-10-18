// App.js or App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/globals.css'; // Adjust path based on your project
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
