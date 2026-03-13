import React from 'react';
import BookingWidget from './BookingWidget';

export default function HeroSection() {
  return (
    <main className="hero-section relative flex items-center justify-center px-4 md:px-8 lg:px-12 py-8 md:py-10 min-h-140 md:min-h-155">
      <div className="blurred-ellipse"></div>

      <div className="absolute inset-0 z-0 bg-transparent"></div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center relative z-10">
        <div className="text-white max-w-155 lg:pl-2 xl:pl-4">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.97rem] font-light leading-[1.2] tracking-[0.01em] uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
            INDIA&apos;S <span className="text-[#45d203] font-semibold">LEADING</span><br />
            <span className="text-[#45d203] font-semibold">ONE WAY INTERCITY</span><br />
            <span className="whitespace-nowrap">CAB SERVICE PROVIDER</span>
          </h2>
        </div>

        <div className="w-full max-w-160 lg:w-170 lg:h-116 justify-self-center lg:justify-self-end">
          <BookingWidget />
        </div>
      </div>
    </main>
  );
}
