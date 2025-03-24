import React from "react";

import { Projects } from "@/Components/Home/Projects";
import { useAutoPopup } from "@/lib/use-Auto-Dialog";
import AboutCourse from "@/Components/Home/AboutCourse";
import AutoDialog from "@/Components/Home/AutoDialogue";
import Benifits from "@/Components/Home/Benifits";
import CourseDetails from "@/Components/Course/CourseDetails";
import Freelancers from "@/Components/Placements/Freelancers";
import Hero from "@/Components/Home/Hero";
import LogoMarquee from "@/Components/Home/Highlights";
import Opportunity from "@/Components/Home/Opportunity";
import RecentPlacement from "@/Components/Placements/RecentPlacement";
import Representitive from "@/Components/Placements/Representitive";
import Tools from "@/Components/Home/Tools";
import Welcome from "@/Components/Home/Welcome";
import JoinCall from "@/Components/Home/JoinCall";

const Home = () => {
  const { showDialog, closeDialog } = useAutoPopup();
  // const courseDetailsData = [
  //   { title: "29 December 2024", subtitle: "Date of Commencement" },
  //   { title: "3 Months", subtitle: "Duration" },
  //   { title: "English", subtitle: "Language" },
  //   { title: "Job Assistance", subtitle: "Program" },
  //   { title: "Live", subtitle: "Delivery Mode" },
  // ];
  return (
    <div>
      <Hero />
      {showDialog && (
        <div className="fixed z-[150] inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-fit px-10">
            <AutoDialog closeDialog={closeDialog} />
          </div>
        </div>
      )}
      <LogoMarquee />
      {/* <Welcome /> */}
      {/* <AboutCourse />
      <div className="mt-8">
        <CourseDetails courseDetails={courseDetailsData} />
      </div> */}
      {/* <Projects /> */}
      <Benifits />
      <Tools />
      <Opportunity />
      <RecentPlacement />
      <Freelancers />
      <Representitive />
      <JoinCall />
    </div>
  );
};

export default Home;
