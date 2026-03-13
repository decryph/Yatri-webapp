import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white py-3 px-4 md:px-12 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative z-20">
      {/* Logo Container */}
      <div className="flex items-center">
        <img
          src="/yatrilogo.png"
          alt="Yatri Cabs Logo"
          className="h-65px md:h-65px w-auto object-contain"
        />
      </div>

      {/* Contact Pill */}
      <div className="hidden md:flex items-center drop-shadow-md">
        <img
          src="/247.png"
          alt="24/7 Customer Support: +917860663399"
          className="h-40px w-auto object-contain cursor-pointer transition-transform hover:scale-105"
        />
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-8">
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-10 h-10 rounded flex flex-col items-center justify-center mb-1 bg-white shadow-sm overflow-hidden relative group-hover:bg-gray-100 transition">
            <img
              src="/download.png"
              alt="Download App"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[12px] font-semibold text-gray-900">Download App</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="bg-[#39ff14] text-black rounded-full w-10 h-10 flex items-center justify-center mb-1 shadow-sm border border-gray-200 group-hover:bg-[#32e012] transition">
            <i className="fa-regular fa-user text-xl"></i>
          </div>
          <span className="text-[12px] font-semibold text-gray-900">Hi, Ravi</span>
        </div>
      </div>
    </header>
  );
}
