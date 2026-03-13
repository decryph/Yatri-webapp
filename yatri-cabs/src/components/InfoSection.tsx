import React from 'react';

export default function InfoSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 mt-8">
      <div className="container mx-auto">
        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
          
          {/* Pillar 1: Return Fare */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-300">
            <div className="h-16 mb-4 flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar text-5xl text-[#1a4d07]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#1a4d07] mb-3 uppercase">Return Fare, Not Fair!</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Why pay for return journey when you are travelling oneway? Now get discounted AC taxi at just half of the round trip cost for your one way travel.
            </p>
          </div>

          {/* Pillar 2: GPS Billing */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-300">
            <div className="h-16 mb-4 flex items-center justify-center">
              <i className="fa-solid fa-location-dot text-5xl text-[#1a4d07]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#1a4d07] mb-3 uppercase">GPS Based Billing System</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Since the GPS data captures the actual distance and time travelled, it reduces the chance of kilometer tampering or discrepancies in billing.
            </p>
          </div>

          {/* Pillar 3: Available Routes */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 mb-4 flex items-center justify-center">
              <i className="fa-solid fa-car text-5xl text-[#1a4d07]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#1a4d07] mb-3 uppercase">Now Available Routes Are!</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
            </p>
          </div>
          
        </div>

        {/* Introduction Text Block */}
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-[26px] md:text-[32px] font-black text-gray-700 uppercase mb-4 tracking-tighter">
            India&apos;s Premier Intercity and Local Taxi Services
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-medium">
            At Yatri Cabs, we pride ourselves on being a top-tier online oneway cab booking service, delivering reliable intercity and local taxi services. With over a decade of experience, instead of self-drive car rental, we have become the leading driver-driven one way car rental company in India, renowned for our extensive coverage across the country.
          </p>
        </div>
      </div>
    </section>
  );
}
