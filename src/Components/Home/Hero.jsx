import { useState } from "react";

import { assets } from "@/assets/assetimports";

import DialogForm from "../Home/DialogForm";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Stats from "./Stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  GraduationCap,
  Users,
  Award,
  Building,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-12">
        <img
          src={assets.bgImg}
          alt="bg"
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
        />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Leading Digital Marketing Institute in Rajkot
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950">
                Professional Certification Program in Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground">
                Best Digital Marketing Course in Rajkot for Students, Working
                Professionals, and Entrepreneurs
              </p>
              {/* Course Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="font-medium">
                      Job Placement & Internships
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="font-medium">
                      Live Projects with Experts
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="font-medium">
                      44 Modules, 5+ Certifications
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="font-medium">Affordable Course Fee</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="font-medium">
                      Practical & Live Training
                    </span>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Tools Section */}
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  40+ Digital Marketing Tools including latest AI Tools
                </h3>
                <div className="flex items-center mt-2 space-x-3">
                  <img src={assets.ai} alt="ai" />
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="mt-6">
                <Button size="lg" className="w-full md:w-auto px-8">
                  Inquire Now
                </Button>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary/60 opacity-30 blur"></div>
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-md">
                <img
                  src={assets.hero}
                  width={800}
                  height={400}
                  className="w-full hidden h-auto md:block object-cover"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Hero;
