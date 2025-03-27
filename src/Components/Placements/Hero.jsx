import React from "react";
import { assets } from "@/assets/assetimports";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-b from-[#202B4D] to-[#26355D] text-white py-8">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Launch Your Digital Marketing Career
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
            70% of top digital marketing agency's senior marketers belong to
            RSDM. Join the network of successful digital marketing
            professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold text-xl">150+</span>
              <span className="text-gray-200">Placements Delivered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold text-xl">500+</span>
              <span className="text-gray-200">Active Partners</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold text-xl">3</span>
              <span className="text-gray-200">Layer Placement Process</span>
            </div>
          </div>
          <Button size="lg">
            <Link to="/contact">Contact About Placements</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
