import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BrandDetailsBanner = () => {

    return (
        <div>
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
                slidesPerView={1}>

                <SwiperSlide
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/4KgL4J1/nailpolish7.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '80vh',
                    }}
                >

                   <div className="py-24 px-32">
                   <h1 className="text-left  text-7xl font-thin font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>ORIGINAL STYLE</h1>
                    <p className="text-left text-base font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}> Green Diva represents a commitment to timeless beauty and individuality. Its a celebration of unique self-expression through makeup, skincare, and beauty products that are designed to bring out the authentic beauty in each person</p>
                    <button className="bg-transparent border-2 py-2 px-4 my-4 mx-auto font-dancing font-bold text-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>VIEW MORE... </button>
                   </div>


                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/v32rBHm/face3.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '80vh',

                    }}>
                    <div className="py-24 px-32">
                        <h1 className="text-left  text-7xl font-thin font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>SUMMER LOOK</h1>
                        <p className="text-left text-base font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>With Green Divas products, you can embrace your style, experiment with different looks, and express yourself confidently. Whether its a natural, minimalistic look or a bold and artistic statement, Green Diva empowers you to create your original style, reflecting your inner beauty and personal charm. </p>
                        <button className="bg-transparent border-2 py-2 px-4 my-4 mx-auto font-dancing font-bold text-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>VIEW MORE... </button>
                    </div>

                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: 'url(https://i.ibb.co/XDWL6DX/face4.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '80vh',
                }}>
                    <div className="py-24 px-32">
                    <h1 className="text-left  text-7xl font-thin font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>INFINITY BEAUTY</h1>
                    <p className="text-left  text-base font-dancing text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Its about embracing your unique qualities and letting your true self shine through your beauty choices. With Green Diva, you wll always find the products you need to enhance your original style and showcase your true beauty to the world.</p>
                    <button className="bg-transparent border-2 py-2 px-4 my-4 mx-auto font-dancing font-bold text-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>VIEW MORE... </button>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BrandDetailsBanner;