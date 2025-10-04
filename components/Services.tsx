
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: React.ReactNode; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-dark p-8 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <div className="text-gray-400 leading-relaxed">{description}</div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Como posso contribuir</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Soluções completas para levar suas campanhas de tráfego pago ao próximo nível.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            title="Criação de Criativos em Vídeo"
            description={
              <ul className="list-disc list-inside space-y-2">
                <li>Desenvolvimento de roteiros alinhados à estratégia.</li>
                <li>Edição e adaptação para Reels, Shorts, TikTok e Ads.</li>
                <li>Entregas finais otimizadas para tráfego pago.</li>
              </ul>
            }
          />
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Agilidade e Adaptação"
            description={
              <ul className="list-disc list-inside space-y-2">
                <li>Produção rápida de conteúdos seguindo “trends”.</li>
                <li>Uso de IA e bancos de imagem/vídeo para acelerar.</li>
                <li>Adaptação ágil às demandas do mercado.</li>
              </ul>
            }
          />
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            title="Foco em Performance"
            description={
              <ul className="list-disc list-inside space-y-2">
                <li>Testes A/B contínuos para otimização de criativos.</li>
                <li>Análise de métricas para identificar o que gera maior ROAS.</li>
                <li>Estratégia voltada para crescimento e resultados.</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
