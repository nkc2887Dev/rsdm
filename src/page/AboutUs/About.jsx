/* eslint-disable react/jsx-key */
import React from "react";

import AboutRSDM from "@/Components/AboutUs/AboutRSDM";
import Hero from "@/Components/AboutUs/Hero";
import Journey from "@/Components/AboutUs/Journey";
import OurTeam from "@/Components/AboutUs/OurTeam";
import Welcome from "@/Components/Home/Welcome";
import "@/utils/styles/AboutUs.css";

const events = [
  {
    type: "work",
    date: "2020-2021",
    // title: 'Founder',
    // subtitle: 'Miami, FL',
    description: [
      "RSDM was founded in 2020 by Mr. Krunal Pitroda and Ms. Laher Rathod, leveraging over 3 years of expertise, experience, and dedication.",
      "Created a strong idea and designed a business model to take every business and service online.",
    ],
    background: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    date: "2021- 2022",
    // title: 'Art Director',
    // subtitle: 'San Francisco, CA',
    description: [
      "Engaged with business owners, job seekers, and entrepreneurs to identify their needs and highlight the benefits effectively.",
      "The demand for digital marketing will skyrocket and become essential in the future.",
    ],
    background: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    date: "2022 - 2023",
    // title: 'Web Designer',
    // subtitle: 'Los Angeles, CA',
    description: [
      "With growing future demand and a strong idea, we decided to offer education.",
      "The curriculum was designed to benefit everyone.",
    ],
    background: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    date: "2023 - 2024",
    // title: 'Web Designer',
    // subtitle: 'San Francisco, CA',
    description: [
      "In March 2023, we introduced the first-ever online batch, featuring top industry professionals and entrepreneurs.",
      "RSDM organized a giant seminar on digital marketing and seminars at universities in Gujarat.",
      "We hosted Rajkot’s largest live workshop, engaging over 100+ participants.",
    ],
    background: "rgb(33, 150, 243)",
  },
  {
    type: "work",
    date: "2024 - 2025",
    description: [
      "After thorough research, our idea proved valuable due to the high demand and need for it.",
      "That’s why we chose to establish an Education Institute for Digital and Social Media Marketing.",
      "<strong>RSDM has created an innovative training center in Rajkot, fostering a motivating and dynamic work environment.</strong>",
      "Recognized for the Best Startup Ideas and Business Model by the Northeast Government for the first time.",
      "RSDM has established a robust network, linking over 50+ leading global brands for placements and consultations.",
      "Trained students at RSDM, achieving unparalleled success and top placement rates.",
    ],
    background: "rgb(33, 150, 243)",
  },
];

const About = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutRSDM />
      <OurTeam />
      <Journey events={events} />
    </div>
  );
};

export default About;
