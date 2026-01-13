import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import Specs from './components/Specs';
import Newsroom from './components/Newsroom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Specs />
        <Newsroom />
      </main>
      <Footer />
    </div>
  );
}

export default App;