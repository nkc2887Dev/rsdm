import React from "react";
import {
  FaChartLine,
  FaBullseye,
  FaHandsHelping,
  FaMoneyBillWave,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const benefitsData = [
  {
    title: "Cost-Effective",
    content:
      "Maximize ROI with budget-friendly marketing strategies, ideal for businesses of all sizes.",
    icon: <FaMoneyBillWave className="text-blue-500 text-4xl" />,
    color: "blue",
  },
  {
    title: "Targeted Audience",
    content:
      "Reach the right people at the right time through precise demographic and interest-based targeting.",
    icon: <FaBullseye className="text-red-500 text-4xl" />,
    color: "red",
  },
  {
    title: "Increased Engagement",
    content:
      "Enhance customer interaction via social media, content marketing, and direct communication.",
    icon: <FaHandsHelping className="text-green-500 text-4xl" />,
    color: "green",
  },
  {
    title: "Higher Conversion Rates",
    content:
      "Boost sales with optimized campaigns and personalized customer experiences.",
    icon: <FaChartLine className="text-orange-500 text-4xl" />,
    color: "orange",
  },
  {
    title: "Brand Awareness",
    content:
      "Strengthen your online presence and visibility through consistent digital marketing efforts.",
    icon: <FaUsers className="text-purple-500 text-4xl" />,
    color: "purple",
  },
  {
    title: "Improved Customer Insights",
    content:
      "Utilize data analytics to understand customer behavior and refine marketing strategies.",
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    color: "yellow",
  },
];

// Mapping Tailwind color classes
const colorClasses = {
  blue: "border-blue-700 text-blue-500",
  red: "border-red-700 text-red-500",
  green: "border-green-700 text-green-500",
  orange: "border-orange-700 text-orange-500",
  purple: "border-purple-700 text-purple-500",
  yellow: "border-yellow-700 text-yellow-500",
};

const Benefits = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          Benefit With RSDM
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 border-2 shadow-lg bg-gray-50 text-center transform transition duration-200 hover:scale-105
              rounded-bl-lg rounded-tl-3xl rounded-br-lg ${colorClasses[benefit.color]}`}
            >
              <div className={`mb-4 flex justify-center`}>
                {benefit.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-blue-950">{benefit.title}</h2>
              <p className="text-gray-600">{benefit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
