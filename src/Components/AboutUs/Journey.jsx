/* eslint-disable react/no-unknown-property */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import React from "react";

import "react-vertical-timeline-component/style.min.css";

const Journey = ({ events }) => {
  const iconMap = {
    work: <WorkflowIcon />,
    education: <SchoolIcon />,
    milestone: <StarIcon />,
  };

  return (
    <div className="py-8 px-4 md:mt-20">
      <h1 className="font-semibold text-blue-950 font-dmSans text-4xl text-center">
        The Path to Excellence From 2020
      </h1>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            contentStyle={{
              background: "#fff",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              border: "1px solid #172554",
              color: "#172554",
            }}
            contentArrowStyle={{
              borderRight: `7px solid #172554`,
            }}
            date={<span className="text-[#172554]">{event.date}</span>}
            iconStyle={{
              background: "#172554",
              color: "#fff",
            }}
            icon={iconMap[event.type]}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {event.subtitle}
            </h4>
            {event.description.map((desc, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: desc }}></p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <style jsx>{`
        .vertical-timeline::before {
          background: #000;
          content: "";
          height: 100%;
          left: 50%;
          position: absolute;
          top: 0;
          width: 4px;
          z-index: 0;
          transform: translateX(-50%);
        }
        @media (max-width: 768px) {
          .vertical-timeline::before {
            background: #fff;
          }
        }
      `}</style>
    </div>
  );
};

export default Journey;
