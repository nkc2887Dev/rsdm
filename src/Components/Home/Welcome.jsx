/* eslint-disable no-irregular-whitespace */
import React from "react";
import { assets } from "@/assets/assetimports";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Welcome = () => {
  return (
    <>
      <div className="">
        {/* Welcome to RSDM Section */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-blue-950">
                Welcome to RSDM
              </h1>
              <p className="text-lg text-gray-700 mt-2">
                Rajkot's Leading Digital Marketing Academy
              </p>
              <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-md">
                <span className="block text-gray-800 font-medium">
                  Honored to be awarded Top & Best Institute by NEEMIE 2023
                </span>
                <span className="block text-blue-600 font-semibold mt-1">
                  India's Premier Digital Marketing Training Center
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                className="w-full border border-blue-950 rounded-lg shadow-lg"
                src={assets.welcome}
                alt="Award"
              />
            </div>
          </div>
        </section>
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-content">
              <p>
                Welcome to RSDM Institute, Rajkot's leading digital marketing
                academy, dedicated to providing industry-focused education since
                2025. We empower students, job seekers, and professionals with
                cutting-edge skills to excel in today's digital landscape.
              </p>
              <p>
                Our expert-led training, hands-on learning approach, and
                state-of-the-art facilities ensure a practical, career-driven
                experience. From SEO and social media marketing to Google Ads
                and content marketing, our courses are designed to keep you
                ahead in a competitive world.
              </p>
              <p>
                Whether you want to land a high-paying job, grow your business,
                or advance your career, RSDM equips you with the right tools and
                expertise. Join us and take the first step toward a brighter,
                more successful future!
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Features Section */}
      <section className="features-section bg-blue-50">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Industry-Focused Education</h3>
              <p>Curriculum designed with real-world applications in mind</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h3>Hands-On Learning</h3>
              <p>Practical training with real projects and case studies</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from professionals with years of industry experience</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaTrophy />
              </div>
              <h3>Award-Winning Institute</h3>
              <p>
                Recognized as India's Premier Digital Marketing Training Center
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
