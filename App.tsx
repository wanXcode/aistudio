import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Philosophy from './components/Philosophy';
import Story from './components/Story';
import Future from './components/Future';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    // Default to Light Mode: bg-white, text-slate-900
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Capabilities />
        <Philosophy />
        <Story />
        <Future />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;