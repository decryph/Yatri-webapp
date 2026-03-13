import React from 'react';
import Image from 'next/image';

export default function WhyYatriSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 mt-4">
      <div className="container mx-auto">
        <h2 className="font-m-plus text-[60px] font-extrabold leading-none tracking-normal uppercase text-center text-gray-700 mb-20 drop-shadow-sm flex items-center justify-center gap-3">
          WHY <span className="text-[#2d6a0f]">YATRI</span> ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
          <div className="flex justify-center lg:justify-start lg:-ml-10">
            <div className="relative w-full max-w-[700px] h-[400px]">
              <Image
                src="/yatri-car-new.png"
                alt="Yatri Cab with driver and passenger"
                fill
                className="object-contain object-center scale-110"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col space-y-12 lg:pl-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-8 mt-1 w-12 flex justify-center">
                <i className="fa-solid fa-bolt text-[40px] text-gray-600" style={{WebkitTextStroke: '2px #4b5563', color: 'transparent'}}></i>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#2d6a0f] mb-3 uppercase">Fast Response Time</h3>
                <p className="text-[14.5px] text-gray-600 leading-[1.6] font-medium">
                  Experience the best car rental service with driver for local or outstation trips. Enjoy prompt response times and easy car hire service, ensuring you get on the road quickly.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-8 mt-1 w-12 flex justify-center">
                <i className="fa-solid fa-users text-[40px] text-gray-600" style={{WebkitTextStroke: '2px #4b5563', color: 'transparent'}}></i>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#2d6a0f] mb-3 uppercase">Vast Fleet</h3>
                <p className="text-[14.5px] text-gray-600 leading-[1.6] font-medium">
                  We offer a wide range of rental cars including sedans, SUVs, MUVs, and tempo travellers to meet all your car hire needs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-8 mt-1 w-12 flex justify-center">
                 <div className="border-[3px] border-gray-600 rounded-[10px] w-12 h-12 flex flex-col items-center justify-center relative shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white">
                    <div className="w-[14px] h-[3px] bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-3 h-3 border-[3px] border-gray-600 rounded-full absolute bottom-1.5"></div>
                 </div>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#2d6a0f] mb-3 uppercase">Easy To Order</h3>
                <p className="text-[14.5px] text-gray-600 leading-[1.6] font-medium">
                  Easily book a cab online through our user-friendly website, mobile application, or by calling our customer support team.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-8 mt-1 w-12 flex justify-center">
                 <div className="border-[3px] border-gray-600 rounded-full w-12 h-12 flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white">
                    <span className="text-gray-600 font-bold text-[22px] leading-none mb-0.5">$</span>
                 </div>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#2d6a0f] mb-3 uppercase">Great Tariffs</h3>
                <p className="text-[14.5px] text-gray-600 leading-[1.6] font-medium">
                  Rent a car at competitive rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

