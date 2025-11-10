import React from 'react';

interface AboutProps {
  onBackToShop: () => void;
}

const About: React.FC<AboutProps> = ({ onBackToShop }) => {
  return (
    <main className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/GUPqUsS.jpeg')" }}>
        <div className="absolute inset-0 bg-pink-800/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Feito com Paixão
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Conheça a história por trás de cada mordida.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/60 rounded-xl shadow-lg p-8 md:p-12 border border-pink-100">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-pink-700 mb-4">Nossa História</h2>
              <p>
                A Cupcake Mania nasceu de um sonho doce e de uma cozinha cheia de amor. Tudo começou como um hobby, assando para amigos e familiares em ocasiões especiais. A alegria que nossos cupcakes traziam era contagiante, e logo percebemos que essa paixão poderia se tornar algo maior. Em {new Date().getFullYear() - 3}, demos o grande passo e abrimos nossa primeira lojinha, com a missão de espalhar felicidade em forma de bolinhos perfeitamente confeitados.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-700 mb-4">Nossa Missão</h2>
              <p>
                Nossa missão é simples: criar os cupcakes mais deliciosos e memoráveis que você já provou. Usamos apenas ingredientes frescos e de alta qualidade, combinando receitas clássicas com um toque de criatividade. Queremos que cada mordida seja uma experiência única, um momento de puro prazer que adoce o seu dia.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-700 mb-4">Nossos Valores</h2>
              <ul className="list-disc list-inside space-y-2 pl-4 text-pink-800">
                <li><span className="text-gray-700"><span className="font-semibold">Qualidade:</span> Nunca abrimos mão dos melhores ingredientes.</span></li>
                <li><span className="text-gray-700"><span className="font-semibold">Paixão:</span> Cada cupcake é feito à mão, com carinho e dedicação.</span></li>
                <li><span className="text-gray-700"><span className="font-semibold">Felicidade:</span> Nosso maior pagamento é o sorriso de um cliente satisfeito.</span></li>
                <li><span className="text-gray-700"><span className="font-semibold">Comunidade:</span> Adoramos fazer parte dos momentos especiais da sua vida.</span></li>
              </ul>
            </div>
            
            <div className="text-center pt-6">
              <button 
                onClick={onBackToShop} 
                className="bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 text-lg"
              >
                Voltar para a Loja
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
