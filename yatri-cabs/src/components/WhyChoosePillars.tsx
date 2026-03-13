import React from 'react';

export default function WhyChoosePillars() {
  const pillars = [
    {
      title: "For Any Budget",
      icon: (
        <div className="flex justify-center mb-6">
          <img src="/fig1.png" alt="For Any Budget" className="h-32 w-auto object-contain" />
        </div>
      ),
      description: "Choose from hatchbacks, sedans, mini SUVs, prime SUVs, and mini buses like Tempo Travellers 12-seater to 25-seater to find a ride within your budget and at your convenience with our car rental and cab service options."
    },
    {
      title: "For Any Distance",
      icon: (
        <div className="flex justify-center mb-6">
          <img src="/fig2.png" alt="For Any Distance" className="h-32 w-auto object-contain" />
        </div>
      ),
      description: "Book daily rides with multiple stops within the city or travel to your favourite destinations across the country with our oneway or round trip outstation cab service. Enjoy easy cab booking for all your travel needs."
    },
    {
      title: "For Any Duration",
      icon: (
        <div className="flex justify-center mb-6">
          <img src="/fig3.png" alt="For Any Duration" className="h-32 w-auto object-contain" />
        </div>
      ),
      description: "Plan a day out with our hourly-based packages for local city tours or book our car rental services with a driver for long or multiple-day trips. Our taxi service ensures reliable transportation tailored to your car hire needs."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Composite Container */}
              {pillar.icon}
              
              {/* Title */}
              <h3 className="text-[22px] md:text-[24px] font-bold text-gray-700 mb-4 tracking-tighter">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-gray-600 font-medium leading-[1.6]">
                {pillar.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
