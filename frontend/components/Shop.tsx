import React, { useState, useMemo } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import About from './About';
import { PRODUCTS_DATA } from '../constants';
import type { Product, CartItem } from '../types';

const Shop: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState<'shop' | 'checkout' | 'productDetail' | 'about'>('shop');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation(); 
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.product.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('productDetail');
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };
  
  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
  };

  const handleBackToShop = () => {
    setView('shop');
    setSelectedProduct(null);
  };
  
  const handleAboutClick = () => {
    setView('about');
  }

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const renderContent = () => {
    switch (view) {
      case 'about':
        return <About onBackToShop={handleBackToShop} />;
      case 'productDetail':
        if (!selectedProduct) return null;
        return (
          <ProductDetail
            product={selectedProduct}
            onBackToShop={handleBackToShop}
            onAddToCart={(e, p) => handleAddToCart(e, p)}
          />
        );
      case 'checkout':
        return <Checkout items={cartItems} onBackToShop={handleBackToShop} />;
      case 'shop':
      default:
        return (
          <>
            <main>
              {/* Hero Section */}
              <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/URZ8SR3.jpeg')" }}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                    Porque felicidade cabe em uma forminha.
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    Feitos à mão com amor, nossos cupcakes são a maneira perfeita de alegrar o seu dia.
                  </p>
                </div>
              </section>

              {/* Products Section */}
              <section id="products" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-2">
                      Nosso Doce Catálogo
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                      Explore nossa seleção de cupcakes, cada um feito com uma pitada de carinho e os melhores ingredientes.
                    </p>
                    <div className="mt-4 w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS_DATA.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onCardClick={() => handleProductClick(product)}
                        onAddToCart={(e) => handleAddToCart(e, product)} 
                      />
                    ))}
                  </div>
                </div>
              </section>
            </main>
            <footer className="bg-rose-100 border-t border-rose-200 mt-12">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-pink-700">
                <p>&copy; {new Date().getFullYear()} Cupcake Mania. Todos os direitos reservados.</p>
                <p className="text-sm text-pink-500">Feito com ❤️ para os amantes de cupcakes.</p>
              </div>
            </footer>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-sans">
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)}
        onAboutClick={handleAboutClick}
        onLogoClick={handleBackToShop}
      />

      {isCartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}
      
      {renderContent()}
    </div>
  );
};

export default Shop;