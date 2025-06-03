import React, { useState } from 'react';

const ExploreScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  return (
    <div className="px-4 pb-4">
      {/* Search and Filter */}
      <div className="relative mb-6">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-3 flex items-center">
          <i className="fas fa-search text-white/60 mr-3"></i>
          <input
            type="text"
            placeholder="Search styles, collections..."
            className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-white/60"
          />
          <button className="rounded-button bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] p-2 rounded-full">
            <i className="fas fa-filter text-xs"></i>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-3 pb-2">
          {['All', 'New In', 'Trending', 'Streetwear', 'Formal', 'Sports', 'Accessories', 'Sale'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-button px-4 py-2 text-sm whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] text-white'
                  : 'bg-white/10 text-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Featured Collections</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Cyber Punk",
              items: "45 items",
              image: "https://readdy.ai/api/search-image?query=Futuristic%20cyberpunk%20fashion%20collection%2C%20neon%20lights%2C%20dark%20moody%20atmosphere%2C%20high%20tech%20clothing%20with%20LED%20details%2C%20professional%20fashion%20photography%2C%20dramatic%20lighting&width=180&height=240&seq=col1&orientation=portrait"
            },
            {
              title: "Neo Tokyo",
              items: "38 items",
              image: "https://readdy.ai/api/search-image?query=Modern%20Japanese%20street%20fashion%2C%20neon%20city%20backdrop%2C%20urban%20tech%20wear%2C%20contemporary%20Asian%20fashion%20influence%2C%20professional%20fashion%20photography&width=180&height=240&seq=col2&orientation=portrait"
            }
          ].map((collection, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden cursor-pointer">
              <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-3">
                <h4 className="text-lg font-bold">{collection.title}</h4>
                <p className="text-sm text-white/80">{collection.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Items */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Popular Right Now</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: "Holographic Bomber",
              price: "$159.99",
              rating: "4.8",
              image: "https://readdy.ai/api/search-image?query=Futuristic%20holographic%20bomber%20jacket%20on%20mannequin%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=180&height=240&seq=prod4&orientation=portrait"
            },
            {
              name: "Tech Cargo Pants",
              price: "$89.99",
              rating: "4.7",
              image: "https://readdy.ai/api/search-image?query=Modern%20tech%20wear%20cargo%20pants%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=180&height=240&seq=prod5&orientation=portrait"
            },
            {
              name: "LED Sneakers",
              price: "$129.99",
              rating: "4.9",
              image: "https://readdy.ai/api/search-image?query=Futuristic%20sneakers%20with%20LED%20details%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=180&height=240&seq=prod6&orientation=portrait"
            },
            {
              name: "Smart Backpack",
              price: "$199.99",
              rating: "4.6",
              image: "https://readdy.ai/api/search-image?query=High%20tech%20modern%20backpack%20design%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=180&height=240&seq=prod7&orientation=portrait"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-2">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover object-top" />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-medium mb-1 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#00F5FF]">{product.price}</span>
                  <div className="flex items-center">
                    <i className="fas fa-star text-[#FFD700] text-xs mr-1"></i>
                    <span className="text-xs text-white/80">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div>
        <h3 className="text-lg font-semibold mb-4">New Arrivals</h3>
        <div className="flex overflow-x-auto -mx-4 px-4 space-x-4 pb-4">
          {[
            {
              name: "Neon Mesh Top",
              price: "$79.99",
              brand: "CyberStyle",
              image: "https://readdy.ai/api/search-image?query=Futuristic%20mesh%20top%20with%20neon%20details%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=200&height=300&seq=prod8&orientation=portrait"
            },
            {
              name: "Digital Print Dress",
              price: "$149.99",
              brand: "TechCouture",
              image: "https://readdy.ai/api/search-image?query=Modern%20digital%20print%20dress%20design%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=200&height=300&seq=prod9&orientation=portrait"
            },
            {
              name: "Smart Watch Band",
              price: "$39.99",
              brand: "FutureWear",
              image: "https://readdy.ai/api/search-image?query=Stylish%20smart%20watch%20band%20with%20LED%20display%2C%20dark%20background%2C%20professional%20fashion%20photography%2C%20high%20detail%20quality&width=200&height=300&seq=prod10&orientation=portrait"
            }
          ].map((item, index) => (
            <div key={index} className="min-w-[170px] bg-white/5 backdrop-blur-sm rounded-2xl p-2 cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-2">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover object-top" />
              </div>
              <div className="p-2">
                <span className="text-xs text-[#FF2E63] mb-1 block">{item.brand}</span>
                <h4 className="text-sm font-medium mb-1 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  {item.name}
                </h4>
                <span className="text-sm text-[#00F5FF]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
