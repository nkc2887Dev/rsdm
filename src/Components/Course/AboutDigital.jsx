import React from "react";
import CountUp from "react-countup";
import { FcApproval, FcBriefcase, FcMoneyTransfer } from "react-icons/fc";
import { GiSwapBag } from "react-icons/gi";
import { TbMobiledata } from "react-icons/tb";

import { assets } from "@/assets/assetimports";

import { Card, CardContent, CardHeader } from "../ui/card";

export const StatCard = ({
  IconComponent,
  count,
  color,
  suffix,
  description,
}) => {
  return (
    <Card className="flex flex-col border border-blue-300 items-center w-full justify-center px-3  shadow-lg hover:shadow-blue-100 hover:shadow-xl transition-shadow duration-300 text-blue-950">
      <CardHeader className={`${color ? color : ""} text-5xl`}>
        {IconComponent && <IconComponent />}
      </CardHeader>
      <CardContent className="text-center font-quickSand">
        <h3 className="flex items-center justify-center text-4xl font-bold">
          <span className="text-lg">
            <CountUp end={count} duration={5} />
          </span>
          <span className="ml-1 text-lg">{suffix}</span>
        </h3>
        <p className=" font-medium  mt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export const CardComponent = ({ title, content }) => {
  return (
    <div>
      <div className="flex items-center gap-3 font-semibold font-dmSans  text-lg">
        <FcApproval className="text-2xl" />
        {title}
      </div>
      <div className="text-sm py-1 md:px-5 text-gray-500">{content}</div>
    </div>
  );
};
const AboutDigital = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl text-blue-950 font-extrabold font-dmSans leading-snug  text-center my-7 md:my-14">
          About Digital Marketing With Ai
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8">
          <div className="w-full md:w-1/2">
            <p className="text-gray-500 my-4">
              Explore top digital marketing course online. Learn about fees,
              costs, and best classes for internet marketing careers. Enrol
              today!
            </p>
            <div className="flex md:flex-row flex-col gap-6 md:gap-8">
              <div className=" space-y-6 md:space-y-10">
                <CardComponent
                  title={"Career Transition"}
                  content={
                    "Transition into high-demand digital marketing careers"
                  }
                />
                <CardComponent
                  title={"Market Leadership"}
                  content={
                    "Achieve market leadership with strategic, data-driven approaches."
                  }
                />
                <CardComponent
                  title={"Industry Influence"}
                  content={
                    "Stay ahead with trends, tech, and data-driven decisions for industry influence."
                  }
                />
              </div>
              <div className="space-y-6 md:space-y-8">
                <CardComponent
                  title={"Highly Paid Salaries"}
                  content={
                    "Experience Competitive Salaries in Digital Marketing Career"
                  }
                />
                <CardComponent
                  title={"Entrepreneurial Opportunities"}
                  content={
                    "Explore abundant entrepreneurial opportunities within the digital marketing landscape."
                  }
                />
                <CardComponent
                  title={"Roles in Digital Marketing"}
                  content={
                    "Explore careers: Digital Marketing, Social Media, SEO, Content - diverse paths await!"
                  }
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:p-8 rounded-lg ">
            <img
              className="rounded-xl max-w-full "
              src={assets.digitalAbout}
              alt="digital"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 py-8">
          <StatCard
            IconComponent={FcBriefcase}
            count={500}
            suffix="+"
            description="Hiring Partners"
          />
          <StatCard
            color={"text-blue-500"}
            IconComponent={TbMobiledata}
            count={1000}
            suffix="+"
            description="Career Transitions"
          />
          <StatCard
            IconComponent={FcMoneyTransfer}
            count={6}
            suffix="LPA"
            description="Highest Package"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDigital;
