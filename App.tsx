import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-secondary font-sans">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Testimonials />
        <Services />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;