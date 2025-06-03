import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/screens/HomeScreen';
import ExploreScreen from './components/screens/ExploreScreen';
import StoresScreen from './components/screens/StoresScreen';

// Lazy load the ProfileScreen component
const ProfileComponent = lazy(() => import('./components/screens/ProfileScreen'));

const App: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Neon Oversized Hoodie',
      price: 89.99,
      quantity: 1,
      color: 'Electric Blue',
      size: 'M',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80&h=80&fit=crop'
    },
    {
      id: 2,
      name: 'Cyber Runner Sneakers',
      price: 129.99,
      quantity: 1,
      color: 'Neon Green',
      size: '42',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=80&h=80&fit=crop'
    }
  ]);
  
  const cartRef = useRef<HTMLDivElement>(null);
  
  // Handle clicks outside of cart to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);
  
  // Calculate cart totals
  const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const cartTotal = cartSubtotal + shipping;
  
  // Handle quantity changes
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <WelcomeScreen onStart={() => setIsLoading(false)} />;
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative h-[762px] w-[375px] bg-[#121214] text-white overflow-hidden font-sans shadow-2xl rounded-3xl border border-white/10">
      {/* Nav Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-[#121214]/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] bg-clip-text text-transparent">
          FlashFit
        </div>
        <div className="flex items-center space-x-3">
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-lg cursor-pointer">
            <i className="fas fa-bell text-sm text-white/80"></i>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] flex items-center justify-center cursor-pointer">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20stylish%20young%20woman%20with%20short%20dark%20hair%2C%20natural%20makeup%2C%20fashion%20model%20aesthetic%2C%20high%20quality%2C%20photorealistic%2C%20soft%20lighting%2C%20studio%20shot%2C%20isolated%20on%20dark%20background%2C%20centered%20composition&width=100&height=100&seq=user1&orientation=squarish"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Main Content Area - with padding to avoid nav and tab bar overlap */}
      <div className="pt-16 pb-20 h-full overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'explore' && <ExploreScreen />}
        {activeTab === 'stores' && <StoresScreen />}
        {activeTab === 'profile' && (
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="w-10 h-10 border-4 border-t-[#FF2E63] border-r-[#00F5FF] border-b-[#FF2E63] border-l-[#00F5FF] rounded-full animate-spin"></div>
            </div>
          }>
            <ProfileComponent />
          </Suspense>
        )}
      </div>
      
      {/* Global style to hide scrollbars across the app */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide scrollbars but keep functionality */
        ::-webkit-scrollbar { width: 0; height: 0; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: transparent; }
        ::-webkit-scrollbar-button { display: none; }
        
        /* For Firefox */
        * { scrollbar-width: none; }
        
        /* For IE/Edge */
        * { -ms-overflow-style: none; }
      `}} />
      
      {/* Tab Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-[#121214]/80 backdrop-blur-md border-t border-white/10">
        <div className="grid grid-cols-4 h-16">
          {[
            { id: 'home', icon: 'fa-home', label: 'Home' },
            { id: 'explore', icon: 'fa-search', label: 'Explore' },
            { id: 'stores', icon: 'fa-store', label: 'Stores' },
            { id: 'profile', icon: 'fa-user', label: 'Profile' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center cursor-pointer ${activeTab === tab.id ? 'text-[#FF2E63]' : 'text-white/60'}`}
            >
              <i className={`fas ${tab.icon} ${activeTab === tab.id ? 'text-lg' : 'text-base'}`}></i>
              <span className="text-xs mt-1">{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 w-6 h-1 bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="rounded-button absolute right-5 bottom-20 w-14 h-14 bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] rounded-full flex items-center justify-center shadow-lg shadow-[#FF2E63]/20 cursor-pointer"
      >
        <div className="relative">
          <i className="fas fa-shopping-bag text-xl"></i>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-[#FF2E63] text-xs flex items-center justify-center font-bold">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </div>
      </button>
      
      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="absolute inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-end justify-center">
          <div 
            ref={cartRef}
            className="bg-[#121214] w-full max-h-[80%] rounded-t-3xl overflow-hidden animate-slide-up"
          >
            {/* Cart Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121214]/90 backdrop-blur-md z-10">
              <h2 className="text-lg font-bold">Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            {/* Cart Items */}
            <div className="overflow-y-auto max-h-[50vh]">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shopping-bag text-2xl text-white/40"></i>
                  </div>
                  <p className="text-white/60 mb-2">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#00F5FF] text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="p-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center py-3 border-b border-white/10 last:border-b-0">
                      {/* Product Image */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden mr-3 bg-white/5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 mr-3">
                        <h4 className="text-sm font-medium mb-1">{item.name}</h4>
                        <div className="flex text-xs text-white/60 mb-2">
                          <span className="mr-2">{item.color}</span>
                          <span>Size: {item.size}</span>
                        </div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      
                      {/* Price and Remove */}
                      <div className="text-right">
                        <p className="text-sm font-medium mb-2">${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#FF2E63] text-xs"
                        >
                          <i className="fas fa-trash mr-1"></i> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 p-4 bg-[#121214]/90 backdrop-blur-md sticky bottom-0">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-white/60 mb-4">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold mb-4">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] text-white font-bold">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
