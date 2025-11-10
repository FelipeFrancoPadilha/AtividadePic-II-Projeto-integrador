import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (e: React.MouseEvent) => void;
  onCardClick: () => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.783.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.064 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onCardClick }) => {
  return (
    <div 
      onClick={onCardClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-pink-100 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onCardClick()}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={product.imagem}
          alt={product.nome}
        />
        <div className="absolute top-0 right-0 bg-pink-600 text-white text-sm font-bold px-3 py-1 m-2 rounded-full">
          {product.sabor}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{product.nome}</h3>
        <p className="text-sm text-gray-600 mb-3 h-10">{product.descrição}</p>
        <div className="flex justify-between items-center mb-4 mt-auto">
          <p className="text-xl font-black text-pink-600">R$ {product.preço}</p>
          <StarRating rating={product.rating} />
        </div>
        <button
          onClick={onAddToCart}
          className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;