import React from 'react';

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium flooring installation services across Canada. Bringing beauty and durability to every step you take.
          </p>
          <div className="space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Free Consultation
            </a>
            <a 
              href="#portfolio" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}