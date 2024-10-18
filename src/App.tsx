import './styles/globals.css';  // Adjust path based on your project
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutUs from './pages/aboutus.jsx';
import Team from './pages/team';  // Import the Team page
import Header from './components/Header';  // Assuming this is the correct path

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />  {/* New Team route */}
      </Routes>
    </Router>
  );
}

export default App;
