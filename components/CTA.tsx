
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-dark rounded-xl p-10 md:p-16 border-2 border-primary/50 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pronto para escalar seus resultados?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Vamos conversar sobre como minha expertise em tráfego e criativos pode ajudar a sua empresa a atingir novos patamares.
          </p>
          <a 
            href="https://wa.me/5581991559259"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-secondary font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
          >
            Fale Comigo no WhatsApp
          </a>
          <p className="mt-6 text-lg text-gray-400">
            Ou entre em contato: (81) 99155-9259
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
