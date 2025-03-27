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
import GrowCareer from "@/Components/Placements/GrowCareer";

const Placements = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <GrowCareer />
      <TopPlacements />
      {/* <RecentPlacement /> */}
      <Freelancers />
      {/* <Representitive /> */}
      <TestimonialVideos />
      <Testimonial />
    </div>
  );
};

export default Placements;
