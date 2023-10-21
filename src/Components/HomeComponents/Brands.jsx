import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Brands = () => {

    const [brands, setBrands] = useState([]);
    const [BrandsSlidesPerView, setBrandsSlidesPerView] = useState(6);

    useEffect(() => {
        async function handleBrands() {
            try {
                const response = await fetch('https://green-diva-server-b5eulip49-ruksanas-projects.vercel.app/brands')
                if (response.ok) {
                    const data = await response.json();
                    setBrands(data);
                }
                else {
                    console.error("fail to fetch")
                }
            } catch (error) {
                console.error('An error occurred while fetching brands:', error);
            }
        }
        handleBrands();
    }, [])


    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768 && screenWidth < 1024) {
            setBrandsSlidesPerView(4);
        } else if (screenWidth < 768) {
            setBrandsSlidesPerView(2);
        }
    }, []);


    return (
        <div className="my-12">
            <div className="my-12">

                <div>
                <h1 className="mb-5 text-xl font-medium text-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Explore Our Brand Partnerships</h1>
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
                        slidesPerView={BrandsSlidesPerView}
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand._id}>
                                <BrandCard brand={brand} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
            </div>
           
        </div>
    );
};

export default Brands;


