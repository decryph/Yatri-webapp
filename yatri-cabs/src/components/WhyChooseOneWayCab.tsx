import React from 'react';

export default function WhyChooseOneWayCab() {
  const leftFeatures = [
    "Instant Booking & Confirmation",
    "Confirmed Booking Immediately",
    "No return fare for one-way trip",
    "Clean & Professional Cab Services",
    "Transparent Billing With GPS Based Billing System"
  ];

  const rightFeatures = [
    "Pick-Up From Your House",
    "Dedicated cab just for you",
    "Drop to your desired destination",
    "Completed More Than 20,000+ Oneway Trips",
    "Multiple payment option including credit card."
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12 w-full">
      <div className="container mx-auto max-w-[1200px]">

        {/* Section Title Bar */}
        <div className="bg-[#1a4d07] py-4 px-10 text-center shadow-md mb-12">
          <h2 className="text-white text-[15px] md:text-[18px] font-bold uppercase tracking-tight">
            WHY CHOOSE ONE WAY CAB?
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">

          {/* Left Column: Feature Box */}
          <div className="bg-[#f5f4f5] border border-gray-400 rounded-xl p-6 md:p-8 h-full shadow-sm">
            <ul className="space-y-6 list-disc pl-4 marker:text-gray-800">
              {leftFeatures.map((feature, index) => (
                <li key={index} className="text-[#333] font-medium text-[15px] md:text-[16px] leading-snug">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column: GIF Image */}
          <div className="flex justify-center h-full items-center">
            <img
              src="/yatri2.gif"
              alt="Yatri Car Animation"
              className="w-full max-w-[400px] h-auto rounded-xl object-contain"
            />
          </div>

          {/* Right Column: Feature Box */}
          <div className="bg-[#f5f4f5] border border-gray-400 rounded-xl p-6 md:p-8 h-full shadow-sm">
            <ul className="space-y-6 list-disc pl-4 marker:text-gray-800">
              {rightFeatures.map((feature, index) => (
                <li key={index} className="text-[#333] font-medium text-[15px] md:text-[16px] leading-snug">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center px-4 md:px-12">
          <p className="text-[17px] md:text-[20px] text-gray-500 font-medium leading-[1.8] tracking-wide">
            Discover affordable travel with our <strong className="text-[#2d6a0f]">intercity car rental</strong> in India – where quality meets affordability with standardized rates in every city. Start your journey today!
          </p>
        </div>

      </div>
    </section>
  );
}
