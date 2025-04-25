import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const FoodCategori = () => {
  const foodItems = [
    {
      id: 1,
      name: "Delicious Classic Italian Pizza",
      image: "https://i.ibb.co.com/ZzwWpTmH/pizza2.jpg",
    },
    {
      id: 2,
      name: "Tasty Vegetable Hamburger",
      image: "https://i.ibb.co.com/ynf78G0j/testyburgger.jpg",
    },
    {
      id: 3,
      name: "Roasted Chicken Drumsticks Italian Pizza",
      image: "https://i.ibb.co.com/60G76JKW/dramstickjpg.jpg",
    },
    {
      id: 4,
      name: "Roll Shaped Cigar Samosa",
      image: "https://i.ibb.co.com/0ybzVFNS/samosha.jpg",
    },
  ];
  return (
    <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {foodItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center justify-center space-x-4 py-4">
                <div className="rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl">{item.name}</h3>
                  <button className="flex items-center mt-2 text-sm font-medium">
                    Order Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default FoodCategori;
