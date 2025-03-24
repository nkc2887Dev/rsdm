import React from "react";
import { assets } from "@/assets/assetimports";

const Tools = () => {
  const tools = Array.from({ length: 24 }, (_, i) => ({
    img: assets[`mt${i + 1}`],
    alt: `mt${i + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          Master digital marketing tools like...
        </h1>
        <p className="text-lg font-monsterate mt-4">
          Make Complex Things Easier Or Analyze Your Competitors Strategy By
          Mastering{" "}
          <span className="font-semibold">50+ Digital Marketing Tools</span>{" "}
          (Free & Paid)
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-10">
        {tools.map((tool, index) => (
          <div key={index} className="flex justify-center">
            <img
              className="w-20 h-20 object-contain"
              src={tool.img}
              alt={tool.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
