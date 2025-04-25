import pizzaone from "../assets/pizzaone.jpg";
import pizzatwo from "../assets/pizzatwo.jpg";
import pizzathree from "../assets/pizzathere.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${pizzaone})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        >
          <div className="bg-black/50 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold mb-4">Awesome Delicious Pizza</h1>
            <button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600">
              Order Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${pizzatwo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        >
          <div className="bg-black/50 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold mb-4">Awesome Delicious Pizza</h1>
            <button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600">
              Order Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${pizzathree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        >
          <div className="bg-black/50 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold mb-4">Awesome Delicious Pizza</h1>
            <button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600">
              Order Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
