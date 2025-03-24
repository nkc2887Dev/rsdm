import React from "react";

import { assets } from "@/assets/assetimports";
import Freelancers from "@/Components/Placements/Freelancers";
import Hero from "@/Components/Placements/Hero";
import RecentPlacement from "@/Components/Placements/RecentPlacement";
import Representitive from "@/Components/Placements/Representitive";
import Stats from "@/Components/Placements/Stats";
import Testimonial from "@/Components/Placements/Testimonial";
import TestimonialVideos from "@/Components/Placements/TestimonialVideos";
import TopPlacements from "@/Components/Placements/TopPlacements";

const Placements = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <div className="max-w-7xl mx-auto px-4 my-10">
        <h1 className="text-4xl font-dmSans text-center font-semibold">
          Unlock Your Career Potential with RSDM - The Premier Digital Marketing
          Institute in Rajkot
        </h1>
        <p className="text-sm mt-6 font-monsterate text-gray-600 text-wrap">
          In today’s digital age, skilled marketers are in high demand as
          businesses embrace online transformation. Success now depends on
          experts who can navigate digital marketing, drive growth, and build
          strong brands. Choosing the right institute is key to launching a
          thriving career.
        </p>
        <p className="text-sm mt-4 font-monsterate text-gray-600 text-wrap">
          Welcome to RSDM, Rajkot’s premier Digital Marketing Institute, where
          we equip individuals with cutting-edge skills, industry insights, and
          hands-on expertise to excel in this dynamic field.
        </p>
        <p className="text-sm mt-4 font-monsterate text-gray-600 text-wrap">
          With a mission to bridge the gap between academia and industry, RSDM
          stands as a leader in digital marketing education. Our industry-driven
          curriculum, expert-led training, and commitment to excellence make us
          the top choice for aspiring digital marketers.
        </p>
      </div>
      <TopPlacements />
      <RecentPlacement />
      <Freelancers />
      <Representitive />
      <TestimonialVideos />
      <Testimonial />
    </div>
  );
};

export default Placements;
