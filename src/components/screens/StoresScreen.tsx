import React, { useState } from 'react';

interface Store {
  id: string;
  name: string;
  logo: string;
  rating: number;
  distance: string;
  deliveryTime: string;
  isOpen: boolean;
  topItems: { name: string; price: string; image: string }[];
  lastUpdated: string;
  categories: string[];
}

const StoresScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Sample data for stores
  const stores: Store[] = [
    {
      id: '1',
      name: 'Zara',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
      rating: 4.7,
      distance: '2.3 km',
      deliveryTime: '20 min',
      isOpen: true,
      topItems: [
        { name: 'Oversized Tee', price: '₹1499', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
        { name: 'Slim Fit Jeans', price: '₹2999', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
      ],
      lastUpdated: '10 mins ago',
      categories: ['Tops', 'Jeans', 'Dresses']
    },
    {
      id: '2',
      name: 'H&M',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png',
      rating: 4.5,
      distance: '3.1 km',
      deliveryTime: '25 min',
      isOpen: true,
      topItems: [
        { name: 'Casual Shirt', price: '₹1299', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
        { name: 'Summer Dress', price: '₹1899', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
      ],
      lastUpdated: '15 mins ago',
      categories: ['Casual', 'Summer', 'Basics']
    },
    {
      id: '3',
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
      rating: 4.8,
      distance: '4.5 km',
      deliveryTime: '30 min',
      isOpen: true,
      topItems: [
        { name: 'Air Max', price: '₹8999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
        { name: 'Dri-FIT Tee', price: '₹2499', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
      ],
      lastUpdated: '5 mins ago',
      categories: ['Footwear', 'Sportswear', 'Accessories']
    },
    {
      id: '4',
      name: 'Adidas',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png',
      rating: 4.6,
      distance: '3.8 km',
      deliveryTime: '35 min',
      isOpen: false,
      topItems: [
        { name: 'Ultraboost', price: '₹9999', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
        { name: 'Track Pants', price: '₹3499', image: 'https://images.unsplash.com/photo-1565693413579-8a73ffa8de15?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
      ],
      lastUpdated: '30 mins ago',
      categories: ['Footwear', 'Sportswear', 'Casual']
    },
    {
      id: '5',
      name: 'Uniqlo',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1200px-UNIQLO_logo.svg.png',
      rating: 4.4,
      distance: '5.2 km',
      deliveryTime: '40 min',
      isOpen: true,
      topItems: [
        { name: 'AIRism T-shirt', price: '₹999', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
        { name: 'Slim Fit Chinos', price: '₹2499', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
      ],
      lastUpdated: '20 mins ago',
      categories: ['Basics', 'Casual', 'Essentials']
    }
  ];
  
  // Filter categories
  const filterCategories = [
    'Popular Brands',
    'Fast Delivery',
    'Men',
    'Women',
    'Unisex',
    'Tops',
    'Footwear',
    'Accessories',
    'Discounts'
  ];
  
  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };
  
  return (
    <div className="px-4 pt-4 pb-20">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-white/50"></i>
        </div>
        <input
          type="text"
          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF2E63]/50 focus:border-transparent"
          placeholder="Search brands, categories, or stores..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Filters with horizontal scroll but hidden slider controls */}
      <div className="mb-6 relative">
        {/* Using Tailwind's built-in scrollbar hiding utilities */}
        <div className="overflow-x-auto scrollbar-hide pb-2" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <div className="flex space-x-2 w-max" style={{ WebkitOverflowScrolling: 'touch' }}>
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stores Grid */}
      <div className="grid grid-cols-1 gap-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF2E63]/10 hover:border-white/20"
          >
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 p-1 mr-3 flex items-center justify-center overflow-hidden">
                  <img src={store.logo} alt={store.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{store.name}</h3>
                    <div className="flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1 text-xs"></i>
                      <span className="text-sm">{store.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-white/60 text-xs mt-1">
                    <span className="flex items-center mr-3">
                      <i className="fas fa-map-marker-alt mr-1"></i> {store.distance}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i> {store.deliveryTime}
                    </span>
                    <span className={`ml-3 px-2 py-0.5 rounded-full text-xs ${store.isOpen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {store.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Preview of top items */}
              <div className="bg-white/5 rounded-lg p-3 mb-3">
                <div className="text-xs text-white/50 mb-2">Top Items</div>
                {store.topItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md object-cover mr-2" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {store.categories.map((category, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Footer */}
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-white/50">
                  <i className="fas fa-sync-alt mr-1"></i>
                  <span>Updated {store.lastUpdated}</span>
                </div>
                <button className="text-sm font-medium text-[#00F5FF] hover:text-[#FF2E63] transition-colors duration-300">
                  View Store <i className="fas fa-chevron-right ml-1 text-xs"></i>
                </button>
              </div>
            </div>
            
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl p-[1px] pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF2E63]/30 to-[#00F5FF]/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Map Button - Visible */}
      <button className="fixed right-5 bottom-36 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/10 hover:bg-white/20 transition-all duration-300">
        <i className="fas fa-map-marked-alt text-lg"></i>
      </button>
      
      {/* Custom CSS to hide scrollbar arrows/controls */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide scrollbar arrows in various browsers */
        ::-webkit-scrollbar-button { display: none; }
        ::-webkit-scrollbar { height: 0; width: 0; }
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default StoresScreen;
