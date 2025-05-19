// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import History from './pages/History';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/historyDiamond" element={<History />} />
        <Route path="/leadership" element={<Leadership /> } />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
