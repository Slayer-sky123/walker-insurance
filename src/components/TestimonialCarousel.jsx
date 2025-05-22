import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const TestimonialCarousel = ({ testimonials }) => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className='my-5'>
                        <div className="bg-white shadow-lg rounded-xl p-6 space-y-3 text-gray-800 min-h-[250px] select-none">
                            {/* Stars */}
                            <div className="flex gap-1 text-[var(--primary__color)] text-2xl">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-gray-600">{testimonial.message}</p>

                            {/* Name & Role */}
                            <div>
                                <p className="text-blue-800 font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCarousel;