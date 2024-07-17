import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import FoodDetails from './components/FoodDetails';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';

import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Story from './components/Story';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
