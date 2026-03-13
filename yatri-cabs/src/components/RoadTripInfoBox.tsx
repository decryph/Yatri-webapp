import React from 'react';

export default function RoadTripInfoBox() {
  const listItems = [
    "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.",
    "Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.",
    "We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.",
    "No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.",
    <span key="call">Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at <strong className="font-bold text-gray-700">7860663399</strong> for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.</span>,
    "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip."
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24 w-full xl:px-[5cm]">
      <div className="w-full mx-auto">
        {/* Header Bar */}
        <div className="bg-[#1a4d07] py-4 px-10 text-center shadow-md">
          <h2 className="text-white text-[15px] md:text-[18px] font-bold uppercase tracking-tight leading-snug">
            YATRI CAB: INDIA'S LEADING ONE-WAY INTERCITY TAXI SERVICE PROVIDER FOR ALL STRATEGIC <br className="hidden md:block" />
            AND MEMORABLE ROAD TRIPS AT A TIME
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-[#f4f5f7] rounded-b-xl p-10 md:p-14 shadow-lg border border-gray-100">
          <ul className="space-y-8 list-disc pl-6 marker:text-gray-500">
            {listItems.map((item, index) => (
              <li key={index} className="text-[#555] font-medium text-[16px] md:text-[18px] leading-[1.8]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
