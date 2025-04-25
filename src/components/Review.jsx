import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
const Review = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      rating: 5,
      comment:
        "The pizza was absolutely delicious! Crispy crust with fresh toppings that burst with flavor. Will definitely be coming back for more.",
      image: "https://i.ibb.co.com/KpQ79sFC/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-s.jpg",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Regular Customer",
      rating: 5,
      comment:
        "The vegetable burger exceeded my expectations. As a vegetarian, it's hard to find tasty options, but this was incredible. Highly recommend!",
      image: "https://i.ibb.co.com/KpQ79sFC/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-s.jpg",
    },
    {
      id: 3,
      name: "Jennifer Lee",
      role: "Food Blogger",
      rating: 4,
      comment:
        "Their chicken drumsticks are incredible - juicy, flavorful, and perfectly cooked. The Italian seasoning gives it a unique twist.",
      image: "https://i.ibb.co.com/KpQ79sFC/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-s.jpg",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "First-time Visitor",
      rating: 5,
      comment:
        "The cigar samosas were a delight! Crispy exterior with a flavorful filling. A perfect appetizer that left me wanting more.",
      image: "https://i.ibb.co.com/KpQ79sFC/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-s.jpg",
    },
  ];
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ));
  };
  return (
    <div>
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 mt-2">
              Discover why our food makes people come back for more
            </p>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-lg">
                            {review.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{review.role}</p>
                        </div>
                      </div>
                      <Quote className="text-red-500 w-8 h-8 opacity-20" />
                    </div>

                    <div className="flex mb-3">
                      {renderStars(review.rating)}
                    </div>

                    <p className="text-gray-700 italic flex-grow">
                      {review.comment}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="hidden md:block">
              <button
                onClick={() => swiperRef.slidePrev()}
                className="absolute top-1/2 -left-4 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => swiperRef.slideNext()}
                className="absolute top-1/2 -right-4 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
