import './styles/globals.css';  // Adjust path based on your project
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutUs from './pages/AboutUs';
import Team from './pages/team';  // Import the Team page
import Header from './components/Header';  
import Footer from './components/Footer';
import Work from './pages/Work';  


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />  {/* New Team route */}
        <Route path="/work" element={<Work/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
