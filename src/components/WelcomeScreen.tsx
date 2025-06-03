import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="h-[762px] w-[375px] bg-[#121214] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20digital%20cityscape%20with%20neon%20grid%20lines%2C%20cyberpunk%20aesthetic%2C%20dark%20background%20with%20subtle%20blue%20and%20pink%20glow%2C%20minimalist%20futuristic%20design%2C%20geometric%20patterns%2C%20low%20opacity%2C%20perfect%20for%20app%20background&width=375&height=762&seq=bg1&orientation=portrait"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Logo */}
      <div className="relative mb-16 transform transition-all duration-700 hover:scale-105">
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[#FF2E63]/30 to-[#00F5FF]/30 rounded-full"></div>
        <img
          src="https://readdy.ai/api/search-image?query=Modern%203D%20fashion%20logo%20design%20for%20FlashFit%2C%20sleek%20and%20minimalist%2C%20floating%20effect%2C%20soft%20glow%2C%20dark%20background%20with%20subtle%20lighting%2C%20professional%20branding%2C%20fashion%20tech%20aesthetic%2C%20high%20detail%20quality&width=200&height=200&seq=logo1&orientation=squarish"
          alt="FlashFit Logo"
          className="w-48 h-48 object-contain relative z-10"
        />
      </div>
      
      {/* Tagline */}
      <h2 className="text-xl text-white/80 mb-10 text-center px-10">
        Fashion delivered at the speed of style
      </h2>
      
      {/* Start Button */}
      <button
        onClick={onStart}
        className="rounded-button relative px-12 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-medium overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63] to-[#00F5FF] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
        <span className="relative z-10">Get Started</span>
      </button>
      
      {/* Skip Button */}
      <button
        onClick={onStart}
        className="rounded-button mt-6 text-white/60 text-sm cursor-pointer"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default WelcomeScreen;
