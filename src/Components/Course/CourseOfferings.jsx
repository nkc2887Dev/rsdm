import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const CourseOfferings = () => {
  const offerings = [
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/1d152650-ad63-495f-ab8f-6bec070aec06.webp",
      title: "Career Centric Syllabus",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/660c03bd44db5e9bd29244a8.svg",
      title: "Industry Experts Led Live Sessions",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/660c03cd44db5e61f29244bb.svg",
      title: "Doubt Clearing Session",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/660c03e244db5e833f9244ce.svg",
      title: "Skill Elevation: Practice Exercises",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/661a37475a3fe9042395c578.svg",
      title: "Industry Relevant Project",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/661a368f5a3fe9191095c3b0.svg",
      title: "Interview Preparation",
    },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/660bc48f9709e6db38248923.svg",
      title: "Certificate",
    },
    // {
    //   icon: 'https://cdn.pwskills.com/assets/uploads/course_offering_icons/6619229c5a3fe9709f9527b7.svg',
    //   title: 'Mail Support',
    // },
    {
      icon: "https://cdn.pwskills.com/assets/uploads/course_offering_icons/55c09844-f867-4c14-b1a2-ca38eae319d5.webp",
      title: "Job Assistance",
    },
    // {
    //   icon: 'https://cdn.pwskills.com/assets/uploads/course_offering_icons/fe29f1c6-6589-448d-bd13-5f1a23e1b752.jpeg',
    //   title: 'Community Channel',
    // },
  ];

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl text-blue-950 font-dmSans font-bold text-center mb-8">
        Course Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border-t border-l border-gray-200">
        {offerings.map((offering, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform transform hover:scale-105 border-r border-b border-gray-200 border-opacity-50 p-6"
          >
            <CardHeader className="flex items-center justify-center">
              <img src={offering.icon} alt={offering.title} className="w-20" />
            </CardHeader>
            <CardContent>
              <p className="whitespace-nowrap text-center text-base">
                {offering.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseOfferings;
