"use client";
import React from 'react';

export default function AppDownloadPromo() {
  return (
    <section className="bg-white py-20 w-full xl:px-[5cm] px-8 md:px-16 border-t border-gray-200">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_0.1fr_1fr_0.1fr_1.5fr] items-center gap-4">
        
        {/* Left Column: App Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[24px] md:text-[28px] font-black text-[#606060] mb-2 leading-tight uppercase tracking-tighter">
            GET YOUR <br /> <span className="text-[#2d6a0f]">YATRI CABS</span> <br /> APP NOW!
          </h2>
          <p className="text-[13px] text-gray-500 font-bold mb-6">DOWNLOAD NOW</p>
          <div className="flex space-x-3 items-center justify-center md:justify-start">
            <a href="#" className="block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
              Google Play
            </a>
            <a href="#" className="block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
              App Store
            </a>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-px h-[200px] bg-gray-200 mx-auto"></div>

        {/* Middle Column: Phone Image */}
        <div className="flex justify-center items-center">
          <img 
            src="/yatriphn.png" 
            alt="Yatri Cabs App on Phone" 
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-px h-[200px] bg-gray-200 mx-auto"></div>

        {/* Right Column: Driver Partner Promo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6">
          <h2 className="text-[24px] md:text-[26px] font-black text-[#606060] mb-4 leading-tight tracking-tighter uppercase whitespace-nowrap">
            BECOME A <span className="text-[#2d6a0f]">DRIVER</span> PARTNER
          </h2>
          
          <p className="text-[14px] text-[#555] font-medium leading-[1.6] mb-8">
            Join <strong className="text-[#2d6a0f] font-bold">Yatri Car Rental</strong> and attach your car to our platform. Earn more by serving our passengers.
          </p>

          <button className="bg-[#4d7e3a] hover:bg-[#3a622a] text-white font-bold text-[14px] py-3 px-8 rounded-sm transition duration-300 shadow-md">
            DOWNLOAD THE APP
          </button>
        </div>

      </div>
    </section>
  );
}
