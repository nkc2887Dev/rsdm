import React from "react";
import { Projects } from "@/Components/Home/Projects";
import { useAutoPopup } from "@/lib/use-Auto-Dialog";
import AboutCourse from "@/Components/Home/AboutCourse";
import AutoDialog from "@/Components/Home/AutoDialogue";
import Benifits from "@/Components/Home/Benifits";
import Freelancers from "@/Components/Placements/Freelancers";
import Hero from "@/Components/Home/Hero";
import LogoMarquee from "@/Components/Home/Highlights";
import Opportunity from "@/Components/Home/Opportunity";
import RecentPlacement from "@/Components/Placements/RecentPlacement";
import Representitive from "@/Components/Placements/Representitive";
import Tools from "@/Components/Home/Tools";
import JoinCall from "@/Components/Home/JoinCall";

const sections = [
  LogoMarquee,
  // AboutCourse,
  Projects,
  Benifits,
  Tools,
  Opportunity,
  RecentPlacement,
  Freelancers,
  // Representitive,
  JoinCall,
];

const Home = () => {
  const { showDialog, closeDialog } = useAutoPopup();

  return (
    <div>
      <Hero />
      {showDialog && (
        <div className="z-[150] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-[#2C2A2A] p-6 m-3 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
            <AutoDialog closeDialog={closeDialog} />
          </div>
        </div>
      )}

      {sections.map((Section, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
        >
          <Section />
        </div>
      ))}
    </div>
  );
};

export default Home;
