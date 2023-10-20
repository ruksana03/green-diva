// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import DivaProductCard from "./DivaProductCard";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const testimonials = [{
    id: 1,
    Name: "Jane Doe",
    details: "I'm in love with Green Diva's makeup products! They feel so natural on my skin, and the results are stunning. Their commitment to using natural ingredients sets them apart. I've found my beauty match with Green Diva!"
},
{
    id: 2,
    Name: "John Smith",
    details: "As a professional makeup artist, I trust Green Diva's products for their quality and versatility. The eyeshadow palettes and setting powders are my go-to choices. My clients always leave feeling confident and beautiful."
},
{
    id: 3,
    Name: "Emily Turner",
    details: "Green Diva's makeup not only enhances my beauty but also respects the environment. Their eco-friendly packaging and cruelty-free practices make me feel good about my choices. Find your beauty match with Green Diva, just like I did!"
}

];



const Testimonials = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <p className="font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                    background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#A0D7AC',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}>Green diva</p>
                <h2 className="mb-5 text-xl font-medium text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Testimonials</h2>

            </div>
            <div className='bg-[#CCA78D] px-32 py-28 text-center'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonials.id}>
                            <h1 className='text-2xl font-medium'>TESTIMONIAL</h1>
                            <p className='font-dancing text-xl'>{testimonial.details}</p>
                            <h1 className='font-dancing'>~{testimonial.Name}~</h1>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;