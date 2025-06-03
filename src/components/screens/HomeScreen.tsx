import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <div className="px-4 pb-4">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-3 flex items-center">
          <i className="fas fa-search text-white/60 mr-3"></i>
          <input
            type="text"
            placeholder="Search for styles, brands..."
            className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-white/60"
          />
          <button className="rounded-button bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] p-2 rounded-full cursor-pointer">
            <i className="fas fa-sliders-h text-xs"></i>
          </button>
        </div>
      </div>
      
      {/* Featured Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-6 h-40">
        <img
          src="https://readdy.ai/api/search-image?query=Stylish%20fashion%20model%20wearing%20trendy%20outfit%20against%20dark%20background%2C%20neon%20lighting%2C%20cyberpunk%20aesthetic%2C%20professional%20fashion%20photography%2C%20high%20quality%2C%20cinematic%20lighting%2C%20futuristic%20fashion%20concept&width=375&height=160&seq=banner1&orientation=landscape"
          alt="Featured Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs inline-block mb-2">
            NEW COLLECTION
          </div>
          <h3 className="text-xl font-bold mb-1">Summer Neon</h3>
          <p className="text-sm text-white/80">Limited edition pieces. Shop now.</p>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <button className="rounded-button text-sm text-[#00F5FF] cursor-pointer">See All</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: "Tops", image: "https://readdy.ai/api/search-image?query=icon%2C%203D%20fashion%20top%20clothing%20item%2C%20t-shirt%20or%20blouse%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat1&orientation=squarish" },
            { name: "Bottoms", image: "https://readdy.ai/api/search-image?query=icon%2C%203D%20fashion%20bottom%20clothing%20item%2C%20jeans%20or%20pants%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat2&orientation=squarish" },
            { name: "Shoes", image: "https://readdy.ai/api/search-image?query=icon%2C%203D%20fashion%20shoe%2C%20sneaker%20or%20heel%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat3&orientation=squarish" },
            { name: "Accessories", image: "https://readdy.ai/api/search-image?query=icon%2C%203D%20fashion%20accessory%2C%20bag%20or%20jewelry%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat4&orientation=squarish" }
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-12 h-12 object-contain" />
              </div>
              <span className="text-xs text-white/80 whitespace-nowrap overflow-hidden text-overflow-ellipsis">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trending Now */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Trending Now</h3>
          <button className="rounded-button text-sm text-[#00F5FF] cursor-pointer">See All</button>
        </div>
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-4">
          {[
            { name: "Neon Oversized Tee", price: "$49.99", image: "https://readdy.ai/api/search-image?query=Fashion%20product%20photography%20of%20a%20trendy%20oversized%20neon%20t-shirt%20on%20mannequin%2C%20dark%20background%20with%20subtle%20lighting%2C%20professional%20studio%20shot%2C%20high%20detail%20quality%2C%20modern%20fashion%20aesthetic%2C%20clean%20composition&width=180&height=240&seq=prod1&orientation=portrait" },
            { name: "Cyber Cargo Pants", price: "$89.99", image: "https://readdy.ai/api/search-image?query=Fashion%20product%20photography%20of%20futuristic%20cargo%20pants%20on%20mannequin%2C%20dark%20background%20with%20subtle%20lighting%2C%20professional%20studio%20shot%2C%20high%20detail%20quality%2C%20modern%20fashion%20aesthetic%2C%20clean%20composition&width=180&height=240&seq=prod2&orientation=portrait" },
            { name: "Holographic Jacket", price: "$129.99", image: "https://readdy.ai/api/search-image?query=Fashion%20product%20photography%20of%20a%20holographic%20reflective%20jacket%20on%20mannequin%2C%20dark%20background%20with%20subtle%20lighting%2C%20professional%20studio%20shot%2C%20high%20detail%20quality%2C%20modern%20fashion%20aesthetic%2C%20clean%20composition&width=180&height=240&seq=prod3&orientation=portrait" }
          ].map((product, index) => (
            <div key={index} className="min-w-[150px] cursor-pointer">
              <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm mb-2 h-48">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="text-sm font-medium mb-1 whitespace-nowrap overflow-hidden text-overflow-ellipsis">{product.name}</h4>
              <p className="text-xs text-white/60">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Nearby Stores */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Nearby Stores</h3>
          <button className="rounded-button text-sm text-[#00F5FF] cursor-pointer">Map View</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Urban Threads", distance: "0.8 mi", rating: "4.8", status: "Open", image: "https://readdy.ai/api/search-image?query=Modern%20fashion%20boutique%20storefront%20with%20stylish%20display%20window%2C%20dark%20mood%20lighting%20with%20neon%20accents%2C%20urban%20setting%2C%20high-end%20clothing%20visible%2C%20professional%20retail%20photography&width=180&height=120&seq=store1&orientation=landscape" },
            { name: "Neon Collective", distance: "1.2 mi", rating: "4.6", status: "Open", image: "https://readdy.ai/api/search-image?query=Trendy%20fashion%20store%20interior%20with%20clothing%20racks%2C%20dark%20mood%20lighting%20with%20neon%20accents%2C%20modern%20minimalist%20design%2C%20high-end%20fashion%20display%2C%20professional%20retail%20photography&width=180&height=120&seq=store2&orientation=landscape" },
            { name: "Fusion Apparel", distance: "1.5 mi", rating: "4.7", status: "Closing Soon", image: "https://readdy.ai/api/search-image?query=Contemporary%20fashion%20boutique%20with%20glass%20facade%2C%20dark%20mood%20lighting%20with%20neon%20accents%2C%20urban%20setting%2C%20stylish%20mannequins%20visible%2C%20professional%20retail%20photography&width=180&height=120&seq=store3&orientation=landscape" },
            { name: "Metro Style", distance: "2.1 mi", rating: "4.9", status: "Open", image: "https://readdy.ai/api/search-image?query=Upscale%20clothing%20store%20with%20modern%20architecture%2C%20dark%20mood%20lighting%20with%20neon%20accents%2C%20urban%20setting%2C%20luxury%20fashion%20displays%2C%20professional%20retail%20photography&width=180&height=120&seq=store4&orientation=landscape" }
          ].map((store, index) => (
            <div key={index} className="rounded-2xl bg-white/5 backdrop-blur-sm p-3 cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-2 h-24">
                <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-sm font-medium mb-1 whitespace-nowrap overflow-hidden text-overflow-ellipsis">{store.name}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-star text-[#FFD700] text-xs mr-1"></i>
                  <span className="text-xs text-white/80">{store.rating}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-[#FF2E63] text-xs mr-1"></i>
                  <span className="text-xs text-white/80">{store.distance}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded-full ${store.status === 'Open' ? 'bg-[#00F5FF]/20 text-[#00F5FF]' : 'bg-[#FFD700]/20 text-[#FFD700]'}`}>
                  {store.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
