import React from "react";

import { assets } from "@/assets/assetimports";

const AboutRSDM = () => {
  return (
    // <div className="max-w-7xl mx-auto px-4 md:my-10">
    //   <h1 className="text-center font-semibold text-4xl py-10">About RSDM</h1>
    //   <div className="flex md:flex-row flex-col items-center justify-center gap-8">
    //     <div className="h-full">
    //       <img className="md:w-[85rem]" src={assets.aboutus} alt="ab" />
    //     </div>
    //     <div>
    //       {[
    //         `Located in the heart of Rajkot, RSDM is a premier institute dedicated to shaping future digital marketing leaders. With a strong focus on practical skills and industry-driven education, we empower individuals to thrive in the fast-evolving digital landscape.  `,
    //         `At RSDM, learning goes beyond the classroom. Our expert-led training, hands-on approach, and industry-relevant curriculum equip students with the skills and confidence needed to excel in today’s competitive market.  `,
    //         `What sets us apart is our team of experienced instructors, who bring real-world expertise and personalized mentorship. With their guidance, students gain deep insights into the latest trends and tools, ensuring they graduate job-ready and future-proof.`,
    //       ].map((item, i) => (
    //         <div key={i} style={{ marginBottom: 20 }}>
    //           <p className="text-gray-800 font-monsterate text-sm">{item}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About RSDM</h2>

        <div className="about-content">
          <div className="about-image">
            <img
              className="w-full border border-blue-950 rounded-lg shadow-lg"
              // height={1000}
              src={assets.aboutus}
              alt="ab"
            />
          </div>
          <div className="about-text">
            <p>
              Located in the heart of Rajkot, RSDM is a premier institute
              dedicated to shaping future digital marketing leaders. With a
              strong focus on practical skills and industry-driven education, we
              empower individuals to thrive in the fast-evolving digital
              landscape.
            </p>

            <p>
              At RSDM, learning goes beyond the classroom. Our expert-led
              training, hands-on approach, and industry-relevant curriculum
              equip students with the skills and confidence needed to excel in
              today's competitive market.
            </p>

            <p>
              What sets us apart is our team of experienced instructors, who
              bring real-world expertise and personalized mentorship. With their
              guidance, students gain deep insights into the latest trends and
              tools, ensuring they graduate job-ready and future-proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRSDM;
