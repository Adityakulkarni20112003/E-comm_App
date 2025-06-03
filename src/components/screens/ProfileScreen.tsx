import React, { useState } from 'react';

const ProfileScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('info');
  
  // Mock user data
  const userData = {
    name: 'Sophia Chen',
    username: '@sophiastyle',
    email: 'sophia@example.com',
    phone: '+1 (555) 123-4567',
    profileImage: 'https://i.pravatar.cc/150?img=5',
  };
  
  // Mock order history data
  const orderHistory = [
    {
      id: 'ORD-7829',
      date: '12 May 2025',
      product: 'Neon Oversized Hoodie',
      price: '$89.99',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80&h=80&fit=crop'
    },
    {
      id: 'ORD-6543',
      date: '28 Apr 2025',
      product: 'Cyber Runner Sneakers',
      price: '$129.99',
      status: 'Shipped',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=80&h=80&fit=crop'
    },
    {
      id: 'ORD-5421',
      date: '15 Apr 2025',
      product: 'Tech Cargo Pants',
      price: '$74.99',
      status: 'Processing',
      image: 'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=80&h=80&fit=crop'
    },
  ];
  
  // Mock address data
  const addresses = [
    {
      id: 'addr1',
      name: 'Home',
      address: '123 Neon Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      isDefault: true,
    },
    {
      id: 'addr2',
      name: 'Work',
      address: '456 Tech Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      country: 'USA',
      isDefault: false,
    },
  ];
  
  // Mock payment methods
  const paymentMethods = [
    {
      id: 'card1',
      type: 'Visa',
      number: '•••• •••• •••• 4567',
      expiry: '05/27',
      isDefault: true,
    },
    {
      id: 'card2',
      type: 'Mastercard',
      number: '•••• •••• •••• 8901',
      expiry: '09/26',
      isDefault: false,
    },
    {
      id: 'upi1',
      type: 'GPay',
      number: 'sophia@okbank',
      isDefault: false,
    },
  ];
  
  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    let bgColor = '';
    let textColor = '';
    
    switch (status) {
      case 'Delivered':
        bgColor = 'bg-[#00F5FF]/20';
        textColor = 'text-[#00F5FF]';
        break;
      case 'Shipped':
        bgColor = 'bg-[#FFD700]/20';
        textColor = 'text-[#FFD700]';
        break;
      case 'Processing':
        bgColor = 'bg-[#FF2E63]/20';
        textColor = 'text-[#FF2E63]';
        break;
      default:
        bgColor = 'bg-white/20';
        textColor = 'text-white';
    }
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };
  
  return (
    <div className="px-4 pb-6">
      {/* Profile Sections Navigation */}
      <div className="flex overflow-x-auto py-4 mb-4 no-scrollbar">
        {['info', 'orders', 'addresses', 'payments'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 mr-2 rounded-full text-sm whitespace-nowrap ${activeSection === section 
              ? 'bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] text-white' 
              : 'bg-white/10 text-white/60'}`}
          >
            {section === 'info' && <i className="fas fa-user mr-2"></i>}
            {section === 'orders' && <i className="fas fa-box mr-2"></i>}
            {section === 'addresses' && <i className="fas fa-map-marker-alt mr-2"></i>}
            {section === 'payments' && <i className="fas fa-credit-card mr-2"></i>}
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {/* User Info Section */}
      {activeSection === 'info' && (
        <div className="mb-6">
          {/* 3D Frosted Glass User Info Card */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-5 mb-6 overflow-hidden">
            {/* Gradient overlay for glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center">
              {/* Profile Image */}
              <div className="relative mr-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FF2E63]/50">
                  <img 
                    src={userData.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#00F5FF] flex items-center justify-center shadow-lg">
                  <i className="fas fa-camera text-xs"></i>
                </button>
              </div>
              
              {/* User Details */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{userData.name}</h2>
                <p className="text-[#00F5FF] text-sm mb-1">{userData.username}</p>
                <div className="flex items-center text-white/60 text-sm mb-1">
                  <i className="fas fa-envelope text-xs mr-2"></i>
                  {userData.email}
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <i className="fas fa-phone text-xs mr-2"></i>
                  {userData.phone}
                </div>
              </div>
              
              {/* Edit Button */}
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <i className="fas fa-pen text-[#00F5FF]"></i>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Orders', value: '12', icon: 'fa-box' },
              { label: 'Wishlist', value: '24', icon: 'fa-heart' },
              { label: 'Reviews', value: '8', icon: 'fa-star' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF2E63]/20 to-[#00F5FF]/20 flex items-center justify-center mx-auto mb-2">
                  <i className={`fas ${stat.icon} text-[#00F5FF]`}></i>
                </div>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-3 text-white/80">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Edit Profile', icon: 'fa-user-edit' },
                { label: 'Settings', icon: 'fa-cog' },
                { label: 'Help Center', icon: 'fa-question-circle' },
                { label: 'Log Out', icon: 'fa-sign-out-alt' }
              ].map((action, index) => (
                <button key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF2E63]/20 to-[#00F5FF]/20 flex items-center justify-center mr-3">
                    <i className={`fas ${action.icon} text-white`}></i>
                  </div>
                  <span className="text-sm">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Order History Section */}
      {activeSection === 'orders' && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Order History</h3>
          
          {/* Horizontally scrollable order cards */}
          <div className="flex overflow-x-auto pb-4 no-scrollbar mb-4">
            {orderHistory.map((order, index) => (
              <div key={index} className="min-w-[250px] bg-white/10 backdrop-blur-md rounded-xl p-4 mr-3 flex-shrink-0 relative overflow-hidden">
                {/* Gradient overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="flex mb-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mr-3">
                    <img src={order.image} alt={order.product} className="w-full h-full object-cover" />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">{order.product}</h4>
                    <p className="text-white/60 text-xs mb-1">{order.price}</p>
                    <div className="mb-2">{renderStatusBadge(order.status)}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                  <span>{order.id}</span>
                  <span>{order.date}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-white/10 rounded-full py-2 text-xs">
                    <i className="fas fa-redo text-[#00F5FF] mr-1"></i> Reorder
                  </button>
                  <button className="flex-1 bg-white/10 rounded-full py-2 text-xs">
                    <i className="fas fa-star text-[#FFD700] mr-1"></i> Review
                  </button>
                </div>
              </div>
            ))}
            
            {/* View All Orders */}
            <div className="min-w-[120px] bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <button className="text-[#00F5FF] text-sm">
                View All
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
          
          {/* Accordion list of orders */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <h4 className="p-4 text-sm font-medium border-b border-white/10">All Orders</h4>
            
            {orderHistory.map((order, index) => (
              <div key={index} className="border-b border-white/10 last:border-b-0">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                      <img src={order.image} alt={order.product} className="w-full h-full object-cover" />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">{order.product}</h4>
                      <div className="flex items-center text-xs text-white/60">
                        <span className="mr-2">{order.id}</span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {renderStatusBadge(order.status)}
                    <button className="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Address Book Section */}
      {activeSection === 'addresses' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Address Book</h3>
            <button className="bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] rounded-full px-4 py-2 text-sm">
              <i className="fas fa-plus mr-2"></i> Add New
            </button>
          </div>
          
          {/* Address Cards */}
          <div className="space-y-4 mb-6">
            {addresses.map((address, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 relative overflow-hidden">
                {/* Gradient overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium mr-2">{address.name}</h4>
                    {address.isDefault && (
                      <span className="bg-[#00F5FF]/20 text-[#00F5FF] text-xs px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <i className="fas fa-pen text-xs text-white/80"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <i className="fas fa-trash text-xs text-[#FF2E63]"></i>
                    </button>
                  </div>
                </div>
                
                <div className="text-sm text-white/80 mb-1">{address.address}</div>
                <div className="text-sm text-white/80 mb-3">{address.city}, {address.state} {address.zip}</div>
                
                {!address.isDefault && (
                  <button className="text-xs text-[#00F5FF]">
                    <i className="fas fa-star mr-1"></i> Set as Default
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Payment Methods Section */}
      {activeSection === 'payments' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Payment Methods</h3>
            <button className="bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] rounded-full px-4 py-2 text-sm">
              <i className="fas fa-plus mr-2"></i> Add New
            </button>
          </div>
          
          {/* Payment Method Cards */}
          <div className="space-y-4">
            {paymentMethods.map((payment, index) => {
              const isCard = payment.type === 'Visa' || payment.type === 'Mastercard';
              
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 relative overflow-hidden">
                  {/* Gradient overlay for glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {payment.type === 'Visa' && (
                        <div className="w-10 h-10 rounded-full bg-[#1A1F71]/20 flex items-center justify-center mr-3">
                          <i className="fab fa-cc-visa text-[#1A1F71] text-lg"></i>
                        </div>
                      )}
                      {payment.type === 'Mastercard' && (
                        <div className="w-10 h-10 rounded-full bg-[#EB001B]/20 flex items-center justify-center mr-3">
                          <i className="fab fa-cc-mastercard text-[#EB001B] text-lg"></i>
                        </div>
                      )}
                      {payment.type === 'GPay' && (
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <i className="fab fa-google-pay text-white text-lg"></i>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-sm font-medium">{payment.type}</h4>
                        <p className="text-xs text-white/60">{payment.number}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {payment.isDefault ? (
                        <span className="bg-[#00F5FF]/20 text-[#00F5FF] text-xs px-2 py-0.5 rounded-full mr-2">
                          Default
                        </span>
                      ) : (
                        <button className="text-xs text-[#00F5FF] mr-2">
                          Set Default
                        </button>
                      )}
                      
                      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fas fa-trash text-xs text-[#FF2E63]"></i>
                      </button>
                    </div>
                  </div>
                  
                  {isCard && (
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/60">
                        <span className="mr-1">Expires:</span>
                        <span>{payment.expiry}</span>
                      </div>
                      
                      <button className="text-xs text-white/60">
                        <i className="fas fa-pen mr-1"></i> Edit
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
