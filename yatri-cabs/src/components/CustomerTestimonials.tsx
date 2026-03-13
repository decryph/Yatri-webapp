import React from 'react';

export default function CustomerTestimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Needed a cab from Lucknow to Varanasi and was pleasantly surprised by the rates. Much cheaper than I expected for a one-way trip. Driver was good, car was clean. Would book again.",
      author: "Vikram K.",
      location: "Kalyan"
    },
    {
      stars: 4,
      text: "The GPS tracking thing is pretty cool - you can see exactly where you're going and what you're being charged for. Made the long ride to Ayodhya much less stressful.",
      author: "Rajesh K.",
      location: "Kanpur"
    },
    {
      stars: 5,
      text: "Took the family from Gorakhpur to Prayagraj in their SUV. Plenty of space for all our luggage and the kids were comfortable. Driver knew the route well which helped.",
      author: "Anjali M.",
      location: "Gorakhpur"
    },
    {
      stars: 4,
      text: "Travel for work a lot and these guys are reliable for one-way trips. Don't have to pay for return like other services. Booking through the app is straightforward.",
      author: "Siddharth V.",
      location: "Delhi"
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fa-solid fa-star text-blue-500 text-[18px]"></i>
    ));
  };

  return (
    <section className="bg-[#2d6a0f] py-16 w-full">
      <div className="w-full xl:px-[5cm] px-8 md:px-16 mx-auto">
        <h2 className="text-center text-white text-[32px] md:text-[40px] font-bold mb-12 border-b-2 border-white inline-block mx-auto">
          Customer Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 md:p-8 flex flex-col h-full shadow-lg">
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.6] mb-8 font-medium italic flex-grow">
                {testimonial.text}
              </p>
              <div className="mt-auto">
                <p className="text-black font-bold text-[16px]">{testimonial.author}</p>
                <p className="text-gray-500 text-[13px]">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
