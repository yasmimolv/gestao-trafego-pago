import React from 'react';

const ClientCard: React.FC<{ name: string; result: string; icon: React.ReactNode }> = ({ name, result, icon }) => (
  <div className="bg-dark p-8 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:border-primary hover:-translate-y-2 group">
    <div className="flex justify-center mb-4 text-primary">{icon}</div>
    <h4 className="text-3xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300 mb-3">{name}</h4>
    <p className="text-gray-400 leading-relaxed">{result}</p>
  </div>
);


const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold uppercase text-gray-400 tracking-widest mb-4">
          Resultados Reais
        </h3>
        <h2 className="text-4xl font-extrabold text-white mb-12">
            Insights de Performance dos Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClientCard 
            name="OroFerro" 
            result="Aumento de 45% na captura de leads qualificados (B2B) e otimização do Custo por Lead."
            icon={ <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> }
          />
          <ClientCard 
            name="Look De Luxo" 
            result="Aumento da visibilidade da marca e crescimento de 60% nas vendas do e-commerce através de campanhas de vídeo."
            icon={ <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636 6.364l.707-.707M19.071 4.929l-.707.707M12 21v-1" /></svg> }
          />
          <ClientCard 
            name="BioEnergy" 
            result="Expansão da base de clientes e aumento de 35% no faturamento com criativos focados em conversão."
            icon={ <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> }
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;