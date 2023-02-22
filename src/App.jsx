import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Search />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
