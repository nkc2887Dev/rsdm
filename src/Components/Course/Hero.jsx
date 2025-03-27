import React, { useState } from "react";

import { assets } from "@/assets/assetimports";
import { Button } from "@/components/ui/button";
import DialogForm from "../Home/DialogForm";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import BreadcrumbLayout from "../BreadCrumbLayout";
import Badge from "../ui/badge";
import {
  Briefcase,
  CalendarDays,
  Clock,
  Download,
  Globe,
  Video,
} from "lucide-react";
import { Card } from "../ui/card";
import { CardContent } from "@mui/material";

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
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded-full">
                  #New
                </Badge>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Registrations close on </span>
                  <span className="text-red-500 font-semibold">
                    28th December
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-950">
                Professional Certification Program in Digital Marketing &
                Strategy
              </h1>

              <p className="text-lg text-muted-foreground">
                Dive into Digital Marketing with our AI-powered Beginner's
                Certification Course. Ideal for newcomers, self-learners, and
                business owners seeking digital growth. This comprehensive
                program prepares you for entry-level roles, making you
                industry-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="px-8">
                      Inquire Now
                    </Button>
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
                    <Button size="lg" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
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

            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary/60 opacity-30 blur"></div>
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-md">
                {/* <img
                  src="https://sjc.microlink.io/FpNr3JHF238GCWw7lhj6SaxAwJ0oMdu0BCZsMTLTyZWBTMJyQslZkKGCDC4o-I0CvfDBnPXlZuT9xKbdtLcfGQ.jpeg"
                  alt="Digital Marketing with AI"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                /> */}
                <img
                  src={assets.digital}
                  alt="Digital Marketing with AI"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <CalendarDays className="h-8 w-8 text-primary mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    29 December 2024
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Date of Commencement
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-primary">3 Months</h3>
                  <p className="text-sm text-muted-foreground">Duration</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <Globe className="h-8 w-8 text-primary mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-primary">English</h3>
                  <p className="text-sm text-muted-foreground">Language</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <Briefcase className="h-8 w-8 text-primary mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    Job Assistance
                  </h3>
                  <p className="text-sm text-muted-foreground">Program</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <Video className="h-8 w-8 text-primary mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-primary">Live</h3>
                  <p className="text-sm text-muted-foreground">Delivery Mode</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
