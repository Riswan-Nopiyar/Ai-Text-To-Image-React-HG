import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import ServicesSection from './components/services-section';
import Footer from './components/footer';
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
