import React from "react";
import bigbanner from "../assets/bigbanner.jpg"
const Today = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        {/* Food Image Section - Left Side */}
        <div className="relative w-full md:w-3/5 bg-gray-900">
          <img
            src={bigbanner}
            alt="Juicy hamburger with fries and sauce"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deal Information - Right Side */}
        <div className="w-full md:w-2/5 bg-yellow-300 flex flex-col justify-center p-8">
          <div className="text-white space-y-4">
            <p className="text-sm font-medium">Deal Of The Day</p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              TODAY'S The
              <br />
              Hamburger' DAY
            </h2>

            <div className="flex items-baseline mt-6">
              <p className="mr-2 text-sm">Special Price</p>
              <p className="text-4xl md:text-5xl font-bold">$55</p>
            </div>

            <p className="text-sm max-w-sm mt-4">
              Savor the perfect symphony of flavors. It's the perfect dining
              experience where I experience quick and efficient with our
              signature hamburger, a culinary.
            </p>

            <button className="mt-6 border border-white text-white py-2 px-4 flex items-center text-sm">
              Order Now
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button className="bg-yellow-300 p-3 block mb-1">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="bg-white p-3 block">
            <svg
              className="w-4 h-4 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Today;
