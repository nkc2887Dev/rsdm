import React from "react";
import HeroVideoDialog from "../ui/hero-video-dialog";

const TestimonialVideos = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 mt-20">
<h1 className="text-center text-4xl font-bold text-blue-950 mb-10">
Our Students Testimonial Videos
      </h1>
      <div className="grid md:grid-cols-2 ">
        <div className="p-4">
          <HeroVideoDialog
            className=" block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/ne7-Jpd9VHI?si=InnqdFyDRGVi2Elv"
            thumbnailSrc="https://i.ytimg.com/vi_webp/ne7-Jpd9VHI/maxresdefault.webp"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="p-4">
          <HeroVideoDialog
            className=" block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/tOwjEOt1zYU?si=V47EKgdBNwZzzxKU"
            thumbnailSrc="https://i.ytimg.com/vi_webp/tOwjEOt1zYU/maxresdefault.webp"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideos;
