import React from "react";

import { assets } from "@/assets/assetimports";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Mobile Video */}
      <div className="block md:hidden min-h-screen w-full relative">
        <video
          src={assets.mobileBg} // Replace with the actual vertical video for mobile
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-[91vh] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4 sm:px-6">
            <h1 className="text-3xl font-bold">
              Rajkot School of Digital Marketing
            </h1>
            <p className="text-base">
              70% Top Digital Marketing agency&apos;s senior Digital Marketers
              belong to RSDM.
            </p>
            <p className="text-sm">
              150+ Placement Delivered | 500+ Active Placement Partners | 3
              Layer Placement Process
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Desktop and Tablet Video */}
      <div className="hidden md:block min-h-screen md:max-h-[80vh] w-full relative">
        <video
          src={assets.bgVid}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Rajkot School of Digital Marketing
            </h1>
            <p className="text-lg md:text-2xl">
              70% Top Digital Marketing agency&apos;s senior Digital Marketers
              belong to RSDM.
            </p>
            <p className="text-base md:text-lg">
              150+ Placement Delivered | 500+ Active Placement Partners | 3
              Layer Placement Process
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
