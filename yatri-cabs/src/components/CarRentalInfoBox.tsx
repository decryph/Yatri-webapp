import React from 'react';

export default function CarRentalInfoBox() {
  return (
    <section className="bg-white py-20 w-full xl:px-[5cm] px-8 md:px-16">
      <div className="w-full mx-auto">
        {/* Header Bar */}
        <div className="bg-[#1a4d07] py-4 px-10 text-center shadow-md">
          <h2 className="text-white text-[15px] md:text-[18px] font-bold uppercase tracking-tight">
            CAR RENTAL IN INDIA - DOCUMENTATION CLEAR FOR ALL YOUR TRIPS
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-[#f4f5f7] rounded-b-xl p-10 md:p-14 shadow-lg border border-gray-100">
          <p className="text-[#555] text-[18px] md:text-[20px] leading-[2] mb-10 font-medium">
            Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:
          </p>

          <div className="space-y-8">
            <p className="text-[#555] text-[18px] md:text-[20px] leading-[2]">
              <strong className="text-gray-700 font-bold">1. Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need local transportation or long-distance travel, they are adept at navigating India's roads for a smooth travel experience.
            </p>

            <p className="text-[#555] text-[18px] md:text-[20px] leading-[2]">
              <strong className="text-gray-700 font-bold">2. Dedicated Oneway Service:</strong> We offer specialized oneway services across India, allowing you to pay only for the distance you travel. This makes intercity trips both cost-effective and convenient.
            </p>

            <p className="text-[#555] text-[18px] md:text-[20px] leading-[2]">
              <strong className="text-gray-700 font-bold">3. Well-Maintained Fleet:</strong> Our fleet is kept in top condition, ensuring you enjoy a comfortable and secure ride for any journey.
            </p>

            <p className="text-[#555] text-[18px] md:text-[20px] leading-[2]">
              <strong className="text-gray-700 font-bold">4. Transparent Pricing:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of kilometer tampering. With real-time distance measurement and live location tracking, you get transparency and peace of mind.
            </p>

            <p className="text-[#555] text-[18px] md:text-[20px] leading-[2]">
              <strong className="text-gray-700 font-bold">5. 24/7 Customer Support:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns, ensuring a smooth and enjoyable experience throughout your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
