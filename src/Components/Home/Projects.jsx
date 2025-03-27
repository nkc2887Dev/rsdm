import { MapPinHouse } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiBookCover, GiSpellBook } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineAutoMode, MdOutlineContactSupport } from "react-icons/md";
import { Card, CardContent, CardHeader } from "../ui/card";

const projects = [
  { title: "Latest Updated Course Curriculum", icon: HiArrowTrendingUp },
  { title: "15+ Case Studies and Live Projects", icon: GiSpellBook },
  { title: "Advanced LMS Training Support", icon: MdOutlineContactSupport },
  { title: "Experts Sessions and Guest Lectures", icon: FaPeopleGroup },
  { title: "Globally Recognized Certificates", icon: GrCertificate },
  { title: "100% Placement Assistance", icon: MapPinHouse },
  { title: "Marketing Automation Tools", icon: MdOutlineAutoMode },
  { title: "E-books | E-notes | Assignments", icon: GiBookCover },
];

export function Projects() {
  return (
    <div className="max-w-7xl mx-auto py-5 px-4">
      <p className="font-semibold font-monsterate text-xl my-6 text-gray-700">
        Our digital marketing training program is completely{" "}
        <strong className="text-[#BE4436]">Industry-led</strong> and task
        oriented. Multiple{" "}
        <strong className="text-[#BE4436]">Case studies</strong> and{" "}
        <strong className="text-[#BE4436]">live projects</strong> providing
        practical insight and helping effective strategies.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {projects.map(({ title, icon: Icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 400 }}
            className="w-64 h-64 shadow-lg rounded-xl p-6 bg-white flex flex-col items-center justify-between transition-all duration-200 hover:shadow-blue-300"
          >
            <CardHeader className="flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 400 }}
                className="w-16 h-16 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full"
              >
                <Icon className="w-12 h-12" />
              </motion.div>
            </CardHeader>
            <CardContent className="text-center font-medium text-xl mt-4">
              {title}
            </CardContent>
          </motion.div>
        ))}
      </section>
    </div>
  );
}