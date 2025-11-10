import React from 'react';
import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBackToShop: () => void;
  onAddToCart: (e: React.MouseEvent, product: Product) => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.783.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.064 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

const NutritionalTable: React.FC<{ info: Product['nutritionalInfo'] }> = ({ info }) => (
  <div className="mt-6 bg-rose-50/50 rounded-lg p-4">
    <h3 className="text-lg font-bold text-pink-800 mb-3">Informações Nutricionais</h3>
    <ul className="text-sm text-gray-700 space-y-2">
      <li className="flex justify-between border-b border-rose-200 py-1"><span>Calorias</span><span className="font-medium">{info.calorias}</span></li>
      <li className="flex justify-between border-b border-rose-200 py-1"><span>Gorduras</span><span className="font-medium">{info.gorduras}</span></li>
      <li className="flex justify-between border-b border-rose-200 py-1"><span>Carboidratos</span><span className="font-medium">{info.carboidratos}</span></li>
      <li className="flex justify-between py-1"><span>Proteínas</span><span className="font-medium">{info.proteinas}</span></li>
    </ul>
  </div>
);

const AllergenInfo: React.FC<{ allergens: string[] }> = ({ allergens }) => {
  if (!allergens || allergens.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div>
          <h3 className="text-md font-bold text-yellow-800">Informações sobre Alergênicos</h3>
          <p className="text-sm text-yellow-700 mt-1">
            Contém: {allergens.join(', ')}.
          </p>
        </div>
      </div>
    </div>
  );
};


const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackToShop, onAddToCart }) => {
  return (
    <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={onBackToShop} 
            className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Voltar para a loja
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Imagem do Produto */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100">
            <img 
              src={product.imagem}
              alt={product.nome}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Detalhes do Produto */}
          <div className="flex flex-col h-full">
            <div className="mb-2">
              <span className="text-sm font-bold uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full">{product.sabor}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">{product.nome}</h1>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">({product.rating} de 5 estrelas)</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.descrição}</p>
            
            <div className="mt-auto">
                <div className="text-4xl font-black text-pink-600 mb-6">
                    R$ {product.preço}
                </div>
                <button
                    onClick={(e) => onAddToCart(e, product)}
                    className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 text-lg"
                >
                    Adicionar ao Carrinho
                </button>

                <NutritionalTable info={product.nutritionalInfo} />
                <AllergenInfo allergens={product.alergenos} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;