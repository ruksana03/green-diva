/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        Name: "Jane Doe",
        image: "https://i.ibb.co/F0sgh7C/user1.png",
        details: "I'm in love with Green Diva's makeup products! They feel so natural on my skin, and the results are stunning. Their commitment to using natural ingredients sets them apart. I've found my beauty match with Green Diva!"
    },
    {
        id: 2,
        Name: "John Smith",
        image: "https://i.ibb.co/j3C8L8B/user2.png",
        details: "As a professional makeup artist, I trust Green Diva's products for their quality and versatility. The eyeshadow palettes and setting powders are my go-to choices. My clients always leave feeling confident and beautiful."
    },
    {
        id: 3,
        Name: "Emily Turner",
        image: "https://i.ibb.co/gVMYdD0/user3.png",
        details: "Green Diva's makeup not only enhances my beauty but also respects the environment. Their eco-friendly packaging and cruelty-free practices make me feel good about my choices. Find your beauty match with Green Diva, just like I did!"
    }
];

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto mt-12 mb-24'>
            <hr className="w-1/3 line" />
            <div className="mt-6 mb-12">
                <h1 className="styleHead">Testimonial</h1>
                <p className="SubHead">Find your skin type</p>
            </div>
            <div className=''>
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
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    slidesPerView={2} // Show 2 testimonials at a time
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='text-center'>

                                <p className='baseText border p-2' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>""{testimonial.details}""</p>

                                <div className='flex mt-6'>
                                    <img src={testimonial.image} className='rounded-full w-24 h-24 border p-1' alt={testimonial.Name} />
                                    <h1 className='my-auto ml-2' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>~{testimonial.Name}~</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
