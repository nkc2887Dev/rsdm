import React from "react";
import { assets } from "@/assets/assetimports";

const Certificate = () => {
  return (
    <div className="w-full py-12 px-4 md:px-6 bg-[#f0f7ff]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={assets.certi || "/placeholder.svg"}
              alt="Certification Icon"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-2xl md:text-3xl text-[#1e3a8a] font-bold">
              Get Certified
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-lg font-semibold text-[#1e3a8a] underline">
              Digital Marketing With AI
            </p>
            <p className="text-xl font-semibold leading-snug">
              Complete course videos, assignments, and quizzes to earn your
              certificate*—Elevate your resume and stand out!
            </p>
            <p className="text-base text-gray-700 flex items-start">
              <span className="font-bold mr-2">&gt;</span>
              <span>Scored 60% in the assignments</span>
            </p>
          </div>

          {/* Center Certificate img */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative p-4 bg-gradient-to-b from-[#f5d78e] to-[#e9c46a] rounded-lg shadow-md">
              <img
                src={assets.certificate || "/placeholder.svg"}
                alt="Certificate"
                width={300}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Certificates */}
          <div className="flex flex-col gap-6 order-3">
            <div className="w-full">
              <img
                src={assets.certifi || "/placeholder.svg"}
                alt="Certificate Example 1"
                width={350}
                height={250}
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="w-full">
              <img
                src={assets.certifi2 || "/placeholder.svg"}
                alt="Certificate Example 2"
                width={350}
                height={250}
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
