import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  company: string;
  logoText: string;
}> = ({ quote, name, title, company, logoText }) => (
  <div className="bg-dark p-8 rounded-xl border border-gray-700 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
    <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-xl text-white">{logoText}</span>
      <div className="flex text-primary">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>
    </div>
    <blockquote className="text-gray-300 italic flex-grow">
      "{quote}"
    </blockquote>
    <div className="mt-6 border-t border-gray-700 pt-6">
      <p className="font-bold text-white">{name}</p>
      <p className="text-sm text-gray-400">{title}, {company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          O Que Meus Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            logoText="OroFerro"
            quote="Os vídeos modernos com IA e os novos anúncios transformaram nosso marketing. Vimos um aumento expressivo nas vendas de portões eletrônicos, atingindo um público que antes não conseguíamos alcançar."
            name="Patrocinio Oliveira"
            title="Diretor de Vendas"
            company="OroFerro"
          />
          <TestimonialCard
            logoText="Look De Luxo"
            quote="A Yasmim elevou a nossa marca a outro nível. A gestão de tráfego e os criativos em vídeo foram essenciais para o crescimento de 60% nas vendas do nosso e-commerce. Indispensável!"
            name="Sea"
            title="CEO"
            company="Look De Luxo"
          />
          <TestimonialCard
            logoText="BioEnergy"
            quote="Com a estratégia de criativos focados em conversão, expandimos nossa base de clientes de forma sustentável. O resultado foi um aumento de 35% no faturamento em apenas um trimestre. Impressionante!"
            name="Henrique Expedito"
            title="Gerente de Marketing"
            company="BioEnergy"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
