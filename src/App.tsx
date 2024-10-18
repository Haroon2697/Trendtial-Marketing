// App.js or App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css'; // Adjust path based on your project

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
