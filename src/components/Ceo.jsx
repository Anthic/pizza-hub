import React from "react";
import menImage from "../assets/ceo.jpg"
import founder from "../assets/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg"
const Ceo = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" ">
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          {/* Left side with chef image */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="relative">
              <img
                src={menImage}
                alt="Chef presenting a dish"
                className="rounded-md border-2 border-gray-800"
              />
            </div>
          </div>

          {/* Right side with text content */}
          <div className="md:w-3/5 px-6">
            <div className="mb-4">
              <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                LEARN SOMETHING COOKING
              </span>
            </div>

            <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Welcome To Our Culinary Haven, Where Each Dish Is A Symphony Of
              Flavors Meticulously Crafted Tantalize Your Taste Buds. Nestled In
              The Heart Of [City], Our Restaurant Is An Inviting Space That
              Combines.
            </h1>

            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 mr-3">
                <img
                  src={founder}
                  alt="Michael V. Christensen"
                  className="rounded-full w-12 h-12 border border-gray-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Michael V. Christensen
                </p>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
