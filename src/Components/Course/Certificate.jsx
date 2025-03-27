import React from "react";
import { assets } from "@/assets/assetimports";

const Certificate = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl text-blue-950 font-bold text-center flex items-center justify-center gap-3">
        <img className="h-12 w-12" src={assets.certi} alt="Certification Icon" />
        Get Certified
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl font-semibold underline">
            Digital Marketing With AI
          </p>
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            Complete course videos, assignments, and quizzes to earn your
            certificate*—Elevate your resume and stand out!
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-bold">{">"} </span>Scored 60% in the assignments
          </p>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <img
            src={assets.certificate}
            alt="Certificate"
            className="w-2/3 max-w-xs md:max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
