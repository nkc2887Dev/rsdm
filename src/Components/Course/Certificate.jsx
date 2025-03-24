import React from "react";

import { assets } from "@/assets/assetimports";

const Certificate = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 md:my-10 px-4 py-16">
      <div className="space-y-4">
        <h1 className="text-3xl text-blue-950 font-bold text-center flex items-center">
          <img className="h-14" src={assets.certi} /> Get Certified
        </h1>
        <div className="flex items-center md:flex-row flex-col ">
          <div className="space-y-16 py-8">
            <p className="text-xl underline">Digital Marketing With AI</p>
            <p className="text-2xl font-semibold">
              Complete course videos, assignments, and quizzes to earn your
              certificate*—Elevate your resume and stand out!
            </p>
            <p className="text-xl text-gray-500">
              <span className="text-gray-600">{">"}</span>
              Scored 60% in the assignments
            </p>
          </div>
          <div className="w-1/3">
            <img src={assets.certificate} alt="cc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
