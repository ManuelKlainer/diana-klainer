import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Relieves from './pages/Relieves';
import Esculturas from './pages/Esculturas';
import Retratos from './pages/Retratos';
import Muestras from './pages/Muestras';
import Bio from './pages/Bio'

import './styles/App.css'; 

function App() {
  return (
    <Router>
      <div className="App-layour">
        
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relieves" element={<Relieves />} />
            <Route path="/esculturas" element={<Esculturas />} />
            <Route path="/retratos" element={<Retratos />} />
            <Route path="/muestras" element={<Muestras />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;