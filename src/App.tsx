import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;
