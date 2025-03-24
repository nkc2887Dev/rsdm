import React from "react";
import CountUp from "react-countup";

import { assets } from "@/assets/assetimports";

const Hero = () => {
  return (
    <div className="relative max-h-[70vh] overflow-hidden h-screen">
      <img
        src={assets.about}
        className="w-full h-full object-cover"
        alt="About"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Rajkot School of Digital Marketing
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            We have trained more than{" "}
            <span>
              <CountUp start={0} end={200} />+
            </span>{" "}
            students, and we take immense pride in shaping them.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
