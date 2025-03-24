/* eslint-disable no-irregular-whitespace */
import React from "react";

import { assets } from "@/assets/assetimports";

import { Button } from "../ui/button";

const Welcome = () => {
  return (
    <div>
      <h1 className="w-full mx-auto text-center text-blue-950 font-semibold font-dmSans my-10 text-4xl">
        Welcome to RSDM
      </h1>
      <div className="max-w-7xl gap-8 mx-auto flex flex-col-reverse px-4 md:flex-row items-center">
        <div className="font-monsterate text-gray-600 text-wrap text-justify space-y-4 md:w-1/2 text-base font-medium">
          <p>
            Welcome to RSDM Institute, Rajkot’s leading digital marketing
            academy, dedicated to providing industry-focused education since
            2025. We empower students, job seekers, and professionals with
            cutting-edge skills to excel in today’s digital landscape.
          </p>
          <p>
            Our expert-led training, hands-on learning approach, and
            state-of-the-art facilities ensure a practical, career-driven
            experience. From SEO and social media marketing to Google Ads and
            content marketing, our courses are designed to keep you ahead in a
            competitive world.
          </p>
          <p>
            Whether you want to land a high-paying job, grow your business, or
            advance your career, RSDM equips you with the right tools and
            expertise. Join us and take the first step toward a brighter, more
            successful future!
          </p>
          {/* <p>
            Our mission is to deliver accessible, industry-relevant education
            that drives personal growth, enhances skills, and prepares students
            for real-world challenges. Join us at RSDM Institute and take the
            first step toward a brighter, more successful future.
          </p> */}
          {/* <div className='flex gap-7 items-center'>
            <button className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300'>
              Learn More
            </button>
            <button className='w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg  transition-all duration-300'>
              Inquire Now
            </button>
          </div> */}
        </div>
        <div className="flex-1">
          <img height={1000} src={assets.welcome} alt="d2" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
