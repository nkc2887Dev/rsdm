import React from "react";

import { assets } from "@/assets/assetimports";
import { Faq } from "@/Components/Course/Faq";
import { Projects } from "@/Components/Home/Projects";
import AboutDigital from "@/Components/Course/AboutDigital";
import BreadcrumbLayout from "@/Components/BreadCrumbLayout";
import Certificate from "@/Components/Course/Certificate";
import CourseDetails from "@/Components/Course/CourseDetails";
import CourseOfferings from "@/Components/Course/CourseOfferings";
import Hero from "@/Components/Course/Hero";
import PriceCard from "@/Components/Course/PriceCard";
import ToolsMarquee from "@/Components/Course/Tools";

const Course = () => {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    { title: "Digital Marketing" }, // No `href` for the current page
  ];

  const courseDetailsData = [
    { title: "29 December 2024", subtitle: "Date of Commencement" },
    { title: "3 Months", subtitle: "Duration" },
    { title: "English", subtitle: "Language" },
    { title: "Job Assistance", subtitle: "Program" },
    { title: "Live", subtitle: "Delivery Mode" },
  ];

  return (
    <div>
      <div className="bg-blue-50">
        <Hero />

        {/* EMI Information */}
        {/* <div className='max-w-7xl mx-auto pl-7 py-4 font-openSans text-gray-500 text-md font-semibold'>
          <p>EMI options available</p>
        </div> */}

        {/* <CourseDetails courseDetails={courseDetailsData} /> */}
      </div>
      {/* Hero Section */}
      <AboutDigital />
      {/* <CourseOfferings /> */}
      {/* <ToolsMarquee /> */}
      {/* <PriceCard /> */}
      <div className="bg-blue-50">
      <Certificate />
      </div>
      {/* <Faq /> */}
    </div>
  );
};

export default Course;
