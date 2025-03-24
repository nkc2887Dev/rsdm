import React from "react";

import { assets } from "@/assets/assetimports";

import { Separator } from "../ui/separator";

const PriceCard = () => {
  const priceCardData = [
    {
      img: assets.basicP,
      title: "Basic",
      price: "30,000",
      description: "Registrations will close on 28th December.",
      data: [
        {
          title: "Job Assistance Course",
          desc: "Hands On Learning",
        },
        {
          title: "Experienced Industry Mentors",
          desc: "Certificate of Completion",
        },
      ],
      comment:
        "Kickstart your upskilling journey with our Basic Plan – The Beginner's Choice!",
    },
    {
      img: assets.cohortP,
      title: "Jan Cohort",
      price: "32,999",
      recommendation: "Recommended",
      description: "Batch Starts Soon",
      data: [
        {
          title: "Job Assistance Course",
          desc: "Hands On Learning",
        },
        {
          title: "Experienced Industry Mentors",
          desc: "Certificate of Completion",
        },
        {
          title: "Doubt Session",
          desc: "Doubt Session, Dashboard Doubt Support, Community Channel",
        },
        {
          title: "Interview Preparation",
          desc: "Resume review, Resume Building",
        },
      ],
      comment: "Get end-to-end placement support with our Plan.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-blue-950 font-dmSans text-center font-semibold p-10">
        Choose Your Plan
      </h1>
      <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center space-y-8 md:space-y-0">
        {priceCardData.map((item, i) => (
          <div
            key={i}
            className="bg-white border focus:border-blue-700 border-gray-400 hover:border-blue-700 shadow-lg rounded-lg overflow-hidden min-h-[500px] w-full md:w-96"
          >
            <img className="px-6 pt-6" src={item.img} alt={item.title} />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
                {item.recommendation && (
                  <span className="ml-2 text-sm text-white bg-green-500 rounded-full px-2 py-1">
                    {item.recommendation}
                  </span>
                )}
              </h2>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ₹ {item.price}
              </p>
              <p className="text-gray-500 text-xs">{item.description}</p>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ">
                Buy Now
              </button>
              <Separator className={"my-4 bg-blue-500"} />
              <ul className="mt-4 space-y-2">
                {item.data.map((feature, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                    <p className="text-sm">{feature.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
