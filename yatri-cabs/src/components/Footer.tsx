import React from 'react';

export default function Footer() {
  const cities = ["Lucknow", "Ayodhya", "Gorakhpur", "Varanasi", "Allahabad (Prayagraj)", "Kanpur"];
  
  const navLinks = ["Home", "About", "Services", "Career", "Contact", "Privacy Policy", "Terms & Condition"];

  return (
    <footer className="w-full flex flex-col">
      {/* Top Banner (White) */}
      <div className="bg-white py-6 border-b border-gray-200 flex flex-col md:flex-row justify-center items-center px-4">
        <span className="text-black font-extrabold text-[16px] md:text-[20px] mb-4 md:mb-0 md:mr-6 uppercase tracking-tighter">
          Operational Cities :
        </span>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
          {cities.map((city, index) => (
            <span key={index} className="text-black font-extrabold text-[14px] md:text-[18px] border-b-2 border-black inline-block leading-tight cursor-default">
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer (Black) */}
      <div className="bg-black text-white pt-10 pb-6 flex flex-col items-center justify-center text-center">
        
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/yatrilogo.png" 
            alt="Yatri Cabs Logo" 
            className="h-10 w-auto object-contain brightness-100"
          />
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 w-full">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-[11px] md:text-[12px] text-gray-400 font-bold uppercase tracking-wider">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-[9px] md:text-[10px] text-gray-600 mt-2 tracking-widest uppercase font-bold">
          All Copyrights are reserved by YATRI CABS
        </div>
      </div>
    </footer>
  );
}
