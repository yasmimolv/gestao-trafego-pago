import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const PricingCard: React.FC<{
  title: string;
  price: string;
  priceRange: string;
  features: string[];
  isFeatured?: boolean;
}> = ({ title, price, priceRange, features, isFeatured = false }) => {
  const cardClasses = `rounded-xl p-8 flex flex-col h-full transition-all duration-300 ${
    isFeatured ? 'bg-secondary border-2 border-primary scale-105' : 'bg-secondary border border-gray-700'
  }`;

  return (
    <div className={cardClasses}>
      {isFeatured && (
        <span className="bg-primary text-secondary text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">Mais Popular</span>
      )}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 my-4 h-6">{priceRange}</p>
      <div className="my-4">
        <span className="text-5xl font-extrabold text-white">{price}</span>
        { price !== 'R$ 8.000' && <span className="text-gray-400 text-lg">/mês</span>}
      </div>
      <ul className="space-y-4 text-gray-300 mt-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`w-full text-center font-bold py-3 px-6 rounded-lg mt-8 transition-colors duration-300 ${
          isFeatured ? 'bg-primary text-secondary hover:bg-amber-300' : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        Selecionar Pacote
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Pacotes e Investimento</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Escolha o plano ideal para a sua necessidade de crescimento.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            title="Pacote Básico"
            price="R$ 2.000"
            priceRange="a R$ 3.500"
            features={[
              "5 vídeos/mês prontos para ads",
              "Criação de roteiros estratégicos",
              "Edição e montagem profissional",
              "Otimização para performance"
            ]}
          />
          <PricingCard
            title="Pacote Intermediário"
            price="R$ 5.000"
            priceRange="a R$ 7.500"
            features={[
              "10 vídeos/mês prontos para ads",
              "Tudo do Pacote Básico",
              "Gestão de tráfego (Meta & Google)",
              "Testes A/B de criativos",
              "Relatórios de performance"
            ]}
            isFeatured={true}
          />
          <PricingCard
            title="Pacote Avançado"
            price="R$ 8.000"
            priceRange="Valor mensal"
            features={[
              "15–20 vídeos/mês",
              "Tudo do Pacote Intermediário",
              "Gestão completa de tráfego e relatórios",
              "Consultoria estratégica",
              "Suporte prioritário"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;