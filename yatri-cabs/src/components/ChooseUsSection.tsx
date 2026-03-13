import React from 'react';
import Image from 'next/image';

export default function ChooseUsSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">

          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-[26px] md:text-[30px] font-black text-gray-700 uppercase mb-6 leading-tight tracking-tighter">
              WHY CHOOSE AC TAXI <br className="hidden md:block" />
              FOR YOUR <span className="text-[#2d6a0f]">ONE-WAY JOURNEY?</span>
            </h2>

            <p className="text-[18.5px] text-[#555] leading-[1.8] font-medium text-justify">
              Our oneway car rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one-way taxi will come to your doorstep and take you to your desired destination. So, book your cheapest one-way cab from Lucknow to Gorakhpur or Varanasi to Ayodhya with our reliable oneway car rental service with driver. Experience the convenience of our taxi service, where you can rent a car effortlessly and enjoy easy cab booking. Choose our car hire option for a hassle-free and comfortable travel experience. We offer outstation cab and intercity travel services, ensuring a smooth and enjoyable ride wherever you need to go.
            </p>
          </div>

          {/* Right Column: GIF Animation */}
          <div className="flex w-full justify-center lg:justify-end lg:-mr-12">
            <img
              src="/yatri.gif"
              alt="Yatri minimal map animation"
              className="w-full h-auto max-h-[600px] object-contain object-right"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
