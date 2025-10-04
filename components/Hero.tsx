
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(https://picsum.photos/1920/1080?grayscale&blur=2)` }}
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Yasmim Oliveira | Gestora de Tráfego Pago & Vídeo
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Transformo Cliques em Clientes com Criativos de Alta Performance
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Especialista em criar e gerenciar campanhas de vídeo que capturam atenção, geram engajamento e impulsionam seu ROI.
        </p>
        <a 
          href="#contact" 
          className="bg-primary text-secondary font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
};

export default Hero;
