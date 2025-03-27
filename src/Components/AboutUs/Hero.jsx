import React from "react";
import CountUp from "react-countup";
import { assets } from "@/assets/assetimports";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen max-h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={assets.about}
        className="w-full h-full object-cover"
        alt="About Us"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center text-white px-6 sm:px-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Rajkot School of Digital Marketing
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            We have trained more than{" "}
            <span className="font-semibold">
              <CountUp start={0} end={200} />+
            </span>{" "}
            students, and we take immense pride in shaping them.
          </p>
          <Button size="lg" className="mt-8">
            <Link to="/contact">Contact Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
