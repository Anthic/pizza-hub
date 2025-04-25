import React from "react";
import { Instagram } from "lucide-react";
const Images = () => {
  const instagramPhotos = [
    {
      id: 1,
      image: "https://i.ibb.co.com/WN39fDDJ/35627.jpg",
      alt: "People scanning QR code menu with smartphones",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/WN39fDDJ/35627.jpg",
      alt: "Juicy steak in a cast iron pan",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/WN39fDDJ/35627.jpg",
      alt: "Steak grilling on flames",
    },
    {
      image: "https://i.ibb.co.com/WN39fDDJ/35627.jpg",

      alt: "Pouring drink into a crystal glass",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/WN39fDDJ/35627.jpg",
      alt: "Elegant dessert table setup",
    },
  ];

  return (
    <div>
      <div className="w-full bg-pink-50 py-12 px-4 relative">
        {/* Grid background pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Instagram Icon and Follow Section */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-2">
              Follow @shawonetc3
            </h2>
            <p className="text-gray-600 text-center">
              Join our community to inspire your desires
            </p>
          </div>

          {/* Instagram Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {instagramPhotos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square overflow-hidden relative group"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
