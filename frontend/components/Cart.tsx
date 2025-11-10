import React, { useMemo } from 'react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onClose, onUpdateQuantity, onRemove, onCheckout }) => {
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => {
      return total + parseFloat(item.product.preço) * item.quantity;
    }, 0).toFixed(2);
  }, [items]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50" aria-modal="true" role="dialog">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true"></div>
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-rose-100 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-rose-200">
          <h2 className="text-xl font-bold text-pink-800">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-rose-200"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <p className="text-lg font-semibold text-gray-700">Seu carrinho está vazio.</p>
            <p className="text-gray-500 mt-1">Adicione alguns cupcakes para começar!</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="flex items-start space-x-4 bg-white/50 p-3 rounded-lg">
                <img src={item.product.imagem} alt={item.product.nome} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-800">{item.product.nome}</h3>
                  <p className="text-sm text-gray-500">R$ {item.product.preço}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 border bg-gray-50 hover:bg-gray-100 rounded-l">-</button>
                    <span className="px-3 py-1 border-t border-b bg-white">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 border bg-gray-50 hover:bg-gray-100 rounded-r">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-bold text-pink-700">R$ {(parseFloat(item.product.preço) * item.quantity).toFixed(2)}</p>
                  <button onClick={() => onRemove(item.product.id)} className="text-xs text-gray-500 hover:text-red-500 mt-2">Remover</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-rose-200 bg-rose-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">Subtotal</span>
              <span className="text-xl font-bold text-pink-800">R$ {totalPrice}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;