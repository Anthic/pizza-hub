import React from 'react';
import { ChevronRight, Facebook, Instagram } from 'lucide-react';
import masrum from "../assets/masrum.jpg"
import food from "../assets/food.jpg"
const Footer = () => {
    return (
        <div>
             <footer className="relative bg-blue-50 pt-16 pb-8">
      {/* Background illustrations */}
      <div className="absolute left-0 top-0 w-64 h-full opacity-20 pointer-events-none">
        <img src={food} alt="Food illustration" className="object-contain" />
      </div>
      <div className="absolute right-0 top-0 w-64 h-full opacity-20 pointer-events-none">
        <img src={masrum} alt="Mushroom illustration" className="object-contain" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info Section */}
          <div className="bg-red-500 rounded-lg p-8 text-white">
            <div className="mb-6">
              <h3 className="font-bold text-xl">pizza hut</h3>
              <p className="text-sm uppercase">FOOD & RESTAURANT</p>
            </div>
            
            <div className="mb-6">
              <p className="mb-2">Tuesday - Saturday: 12:00pm - 23:00pm</p>
              <p className="font-bold">Closed on Sunday</p>
            </div>
            
            <div className="mt-auto">
              <p className="text-sm">5 star rated on TripAdvisor</p>
            </div>
          </div>
          
          {/* About & Menu Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* About Column */}
            <div>
              <h3 className="font-bold text-xl mb-4 relative">
                About
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-yellow-400"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Fredoka One</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Special Dish</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Reservation</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Contact</span>
                </li>
              </ul>
            </div>
            
            {/* Menu Column */}
            <div>
              <h3 className="font-bold text-xl mb-4 relative">
                Menu
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-yellow-400"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Steaks</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Burgers</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Coctails</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Bar B Q</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Desserts</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold text-xl mb-4 relative">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <p className="mb-4">Get recent news and updates.</p>
            
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            <span className="text-red-500">© 2024 pizza hut</span> | All shawonetc3 Themes
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-red-500 transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition duration-300">
              Instagram
            </a>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="flex justify-center mt-8">
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C3 0 5 8 12 4C19 0 21 8 24 4" stroke="#E5E7EB" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;