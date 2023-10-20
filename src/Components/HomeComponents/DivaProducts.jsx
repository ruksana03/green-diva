import {  useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DivaProductCard from "./DivaProductCard";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const DivaProducts = () => {
  const [divaProducts, setDivaProducts] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setDivaProducts(data));
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && screenWidth < 1024) {
      setSlidesPerView(3);
    } else if (screenWidth < 768) {
      setSlidesPerView(2);
    }
  }, []);

  return (
    <div>
      <div className="text-center mt-12">
        <p className="font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                        background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#A0D7AC' ,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>Green diva</p>
        <h2  className="mb-5 text-xl font-medium text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>FIND YOUR BEAUTY MATCH</h2>
       
      </div>
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
                    slidesPerView={slidesPerView}
        >
          {divaProducts.map((divaProduct) => (
            <SwiperSlide key={divaProduct._id}>
              <DivaProductCard divaProduct={divaProduct} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DivaProducts;
