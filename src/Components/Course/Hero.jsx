import React, { useState } from "react";

import { assets } from "@/assets/assetimports";

import DialogForm from "../Home/DialogForm";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import BreadcrumbLayout from "../BreadCrumbLayout";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    { title: "Digital Marketing" }, // No `href` for the current page
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbLayout items={breadcrumbItems} />

      <section className="mt-6 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Content Section */}
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block">
            <span className="bg-gradient-to-tr from-cyan-800 to-blue-900 text-white py-2 px-4 rounded-lg text-sm font-medium tracking-wide">
              #New
            </span>
          </div>

          <h1 className="text-4xl font-extrabold font-dmSans leading-snug text-blue-950">
            Professional Certification Program in Digital Marketing & Strategy
          </h1>

          <p className="text-lg font-openSans text-gray-700">
            Dive into Digital Marketing with our AI-powered Beginner&apos;s
            Certification Course. Ideal for newcomers, self-learners, and
            business owners seeking digital growth. This comprehensive program
            prepares you for entry-level roles, making you industry-ready.
          </p>

          <p className="text-xl font-semibold font-openSans text-blue-900">
            Registrations will close on{" "}
            <span className="text-red-600">28th December</span>.
          </p>
          <div className="flex items-center gap-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="w-full py-3 bg-gradient-to-tr from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-bold font-quickSand rounded-lg transition-all duration-300 shadow-md">
                  Inquire Now
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={"About-Course-Hero"}
                />
              </DialogContent>
            </Dialog>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="w-full py-3 bg-gradient-to-tr from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-bold font-quickSand rounded-lg transition-all duration-300 shadow-md">
                  Download Brochure
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={"Download Brochure - AboutCourse"}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
            src={assets.digital}
            alt="Digital Marketing Course"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
