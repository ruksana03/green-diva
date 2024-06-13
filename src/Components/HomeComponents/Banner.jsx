import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import face1 from '../../assets/face/face1.png';
import face2 from '../../assets/face/face2.png';
import face3 from '../../assets/face/face3.png';
import face4 from '../../assets/face/face4.png';

const Banner = () => {
    const { user } = useContext(AuthContext);

    // Array of face images
    const faceImages = [face1, face2, face3, face4];

    // Array of corresponding texts
    const textArray = [
        {
            title: "Hello Diva’S",
            description: "Elevate Your Beauty, Naturally with Green Diva"
        },
        {
            title: "Skin Types",
            description: "Discover your skin type and products with Green Diva."
        },
        {
            title: "Summer Beauty",
            description: "Enhance your glow this summer with Green Diva."
        },
        {
            title: "Winter Sale",
            description: "Unlock your radiance with Green Diva."
        }
    ];

    return (
        <div className="h-auto w-10/12 mx-auto">
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
                className="mySwiper hidden md:block"
            >
                {faceImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-between items-center h-full">
                            <div className="w-1/2 px-6 pl-10 pr-8 md:pl-12 lg:pl-32 lg:pr-8">
                                <h1 className="styleHead">
                                    {textArray[index].title}
                                </h1>
                                <p className="SubHead break-word my-6">
                                    {textArray[index].description}
                                </p>
                                {user?.email ? (
                                    <Link to='/products'>
                                        <button className="btn-style">
                                            Shop Now
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to='/joinUs'>
                                        <button className="btn-style">
                                            Shop Now
                                        </button>
                                    </Link>
                                )}
                            </div>
                            <div className="md:w-1/2">
                                <img src={image} alt="" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </div>
    );
};

export default Banner;
