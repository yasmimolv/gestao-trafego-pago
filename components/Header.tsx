
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Yasmim Oliveira
        </h1>
        <a 
          href="#contact" 
          className="bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-amber-300 transition-colors duration-300 transform hover:scale-105"
        >
          Contato
        </a>
      </div>
    </header>
  );
};

export default Header;
