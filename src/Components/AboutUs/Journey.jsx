/* eslint-disable react/no-unknown-property */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Calendar, Award, Users, Globe, TrendingUp } from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

const Journey = ({ events }) => {
  const iconMap = {
    work: <WorkflowIcon />,
    education: <SchoolIcon />,
    milestone: <StarIcon />,
  };
  const title = "The Path to Excellence";
  const subtitle = "Our journey of growth and innovation since 2020";
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && (
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Timeline items */}
            <div className="relative">
              {events.map((item, index) => (
                <EnhancedTimelineNode
                  key={index}
                  item={item}
                  index={index}
                  isLast={index === events.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function EnhancedTimelineNode({ item, index, isLast }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6" />;
      case "users":
        return <Users className="w-6 h-6" />;
      case "globe":
        return <Globe className="w-6 h-6" />;
      case "trending-up":
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  // Assign default icons based on index if not provided
  const defaultIcons = ["calendar", "award", "users", "globe", "trending-up"];
  const icon = item.icon || defaultIcons[index % defaultIcons.length];

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center ${isLast ? "" : "mb-20 md:mb-28"}`}
    >
      {/* Content - alternating left and right */}
      <motion.div
        className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:order-3 md:ml-auto"}`}
        variants={{
          hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          {item.title && (
            <h3 className="text-lg font-semibold text-blue-300 mb-3">
              {item.title}
            </h3>
          )}
          <ul className="space-y-3">
            {item.description.map((point, i) => (
              <motion.li
                key={i}
                className="text-slate-300 text-sm flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <span className="text-blue-400 mt-1">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Center circle and date */}
      <motion.div
        className={`flex flex-col items-center my-8 md:my-0 md:w-2/12 z-10 ${
          index % 2 === 0 ? "md:order-2" : "md:order-2"
        }`}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            {getIcon(icon)}
          </div>
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </motion.div>
        <div className="mt-3 font-semibold text-blue-300 bg-slate-800/90 px-4 py-1 rounded-full shadow-inner shadow-blue-500/10 border border-blue-500/20">
          {item.date}
        </div>
      </motion.div>

      {/* Empty space for alternating layout */}
      <div
        className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:order-3" : "md:order-1"}`}
      ></div>
    </div>
  );
}

export default Journey;
