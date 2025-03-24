import React from "react";

const CourseDetails = ({ courseDetails }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {courseDetails.map((item, index) => (
          <div
            key={index}
            className="flex  flex-col md:flex-row justify-evenly items-start md:items-center pb-4 md:pb-0"
          >
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-gray-800">
                {item.title}
              </div>
              <div className="text-sm text-gray-500">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
