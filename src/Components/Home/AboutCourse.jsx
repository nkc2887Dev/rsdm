import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import { assets } from "@/assets/assetimports";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import DialogForm from "./DialogForm";

const AboutCourse = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="w-full text-blue-950 mx-auto text-center font-semibold font-dmSans my-10 text-4xl">
        Professional Certification Program in Digital Marketing & Strategy
      </h1>
      <div className="max-w-7xl gap-8 mx-auto flex flex-col px-4 md:flex-row items-center">
        <div className="flex-1">
          <img height={1000} src={assets.digital2} alt="d2" />
        </div>
        <div className="font-monsterate text-gray-600 text-wrap text-justify space-y-4 md:w-1/2 text-base font-medium">
          <p>
            {`Welcome to RSDM Institute, Rajkot’s leading digital marketing academy, empowering individuals with industry-focused education since 2025. We blend innovation, hands-on learning, and expert-led training to equip students, job seekers, and professionals with in-demand skills. With state-of-the-art facilities and practical courses, RSDM prepares you for career success, business growth, and real-world challenges. Join us and take the first step toward a brighter future!`}
          </p>
          <div>
            <h2 className="text-xl py-3 font-semibold">
              Who can join this course ?
            </h2>
            <p className="flex items-start justify-between md:flex-row flex-col">
              <ul>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Students And fresh Graduates
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Working Professionals
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Job Seekers
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Entrepreneurs and startups
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Corporate Teams
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Home Entrepreneur
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Freelancer
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Beginners Learnngs for intrest
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Educational Institutes
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  NGOs And Special Organizations
                </li>
                <li className="flex items-center gap-3">
                  <TfiArrowCircleRight />
                  Influencers And Bloggers
                </li>
              </ul>
            </p>
          </div>
          <div className="flex gap-7 items-center">
            <button
              onClick={() => navigate("/courses")}
              className="w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300"
            >
              Learn More
            </button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg transition-all duration-300">
                  Inquire Now
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={"About-Home"}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
