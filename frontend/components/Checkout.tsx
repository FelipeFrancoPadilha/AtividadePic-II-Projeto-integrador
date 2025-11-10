import React, { useMemo } from 'react';
import type { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onBackToShop: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBackToShop }) => {
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => {
      return total + parseFloat(item.product.preço) * item.quantity;
    }, 0).toFixed(2);
  }, [items]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Pedido confirmado com sucesso! Obrigado por comprar conosco.');
    // Aqui você normalmente lidaria com o envio do pedido, pagamento, etc.
    // Por enquanto, apenas exibimos um alerta.
  };

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-800">Finalizar Pedido</h1>
          <p className="text-gray-600 mt-2">Quase lá! Preencha seus dados para entrega.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de Envio */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Endereço de Entrega</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cep" className="text-sm font-bold text-gray-700 block mb-1">CEP</label>
                <input type="text" id="cep" name="cep" required className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="00000-000" />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-bold text-gray-700 block mb-1">Endereço</label>
                <input type="text" id="address" name="address" required className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Rua dos Cupcakes" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="number" className="text-sm font-bold text-gray-700 block mb-1">Número</label>
                  <input type="text" id="number" name="number" required className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="123" />
                </div>
                <div className="flex-1">
                  <label htmlFor="complement" className="text-sm font-bold text-gray-700 block mb-1">Complemento</label>
                  <input type="text" id="complement" name="complement" className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Apto 4B" />
                </div>
              </div>
              <div>
                <label htmlFor="neighborhood" className="text-sm font-bold text-gray-700 block mb-1">Bairro</label>
                <input type="text" id="neighborhood" name="neighborhood" required className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="flex gap-4">
                <div className="flex-auto">
                  <label htmlFor="city" className="text-sm font-bold text-gray-700 block mb-1">Cidade</label>
                  <input type="text" id="city" name="city" required className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div className="w-20">
                  <label htmlFor="state" className="text-sm font-bold text-gray-700 block mb-1">Estado</label>
                  <input type="text" id="state" name="state" required maxLength={2} className="w-full px-4 py-2 bg-rose-50/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="SP" />
                </div>
              </div>
              <div className="pt-6 flex flex-col sm:flex-row-reverse gap-4">
                <button type="submit" className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                  Confirmar Pedido
                </button>
                <button type="button" onClick={onBackToShop} className="w-full bg-rose-200 text-pink-800 font-bold py-3 px-4 rounded-lg hover:bg-rose-300 transition-colors duration-300">
                  Voltar para a Loja
                </button>
              </div>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100 self-start">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Resumo do Pedido</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={item.product.imagem} alt={item.product.nome} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold">{item.product.nome}</p>
                      <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">R$ {(parseFloat(item.product.preço) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-rose-200">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-bold text-pink-800">R$ {totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;