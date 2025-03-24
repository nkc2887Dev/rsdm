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
  },
  {
    title: "Targeted Audience",
    content:
      "Reach the right people at the right time through precise demographic and interest-based targeting.",
    icon: <FaBullseye className="text-red-500 text-4xl" />,
  },
  {
    title: "Increased Engagement",
    content:
      "Enhance customer interaction via social media, content marketing, and direct communication.",
    icon: <FaHandsHelping className="text-green-500 text-4xl" />,
  },
  {
    title: "Higher Conversion Rates",
    content:
      "Boost sales with optimized campaigns and personalized customer experiences.",
    icon: <FaChartLine className="text-orange-500 text-4xl" />,
  },
  {
    title: "Brand Awareness",
    content:
      "Strengthen your online presence and visibility through consistent digital marketing efforts.",
    icon: <FaUsers className="text-purple-500 text-4xl" />,
  },
  {
    title: "Improved Customer Insights",
    content:
      "Utilize data analytics to understand customer behavior and refine marketing strategies.",
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
  },
];

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
              className="p-6 shadow-lg rounded-lg bg-gray-50 text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{benefit.title}</h2>
              <p className="text-gray-600">{benefit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
