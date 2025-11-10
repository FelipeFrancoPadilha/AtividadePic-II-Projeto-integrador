import React from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onAboutClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onAboutClick, onLogoClick }) => {
  return (
    <header className="bg-rose-100/80 backdrop-blur-lg shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button onClick={onLogoClick} className="text-2xl font-bold text-pink-600 flex-shrink-0">
              🧁 Cupcake Mania
            </button>
            <div className="hidden md:flex items-baseline space-x-4">
               <button
                  onClick={onAboutClick}
                  className="text-pink-700 hover:bg-pink-200/50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Quem Somos
                </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              aria-label="Open shopping cart"
              className="relative p-2 rounded-full text-pink-500 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center ring-2 ring-white">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;