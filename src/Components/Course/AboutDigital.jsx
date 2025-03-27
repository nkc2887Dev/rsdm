import React from "react";
import CountUp from "react-countup";
import { FcApproval, FcBriefcase, FcMoneyTransfer } from "react-icons/fc";
import { GiSwapBag } from "react-icons/gi";
import { TbMobiledata } from "react-icons/tb";
import { assets } from "@/assets/assetimports";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  Globe,
  Briefcase,
  Video,
  ArrowRight,
  Download,
  MessageCircle,
  Phone,
  CheckCircle,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Faq } from "./Faq";

export const StatCard = ({
  IconComponent,
  count,
  color,
  suffix,
  description,
}) => {
  return (
    <Card className="flex flex-col border border-blue-300 items-center w-full justify-center px-3  shadow-lg hover:shadow-blue-100 hover:shadow-xl transition-shadow duration-300 text-blue-950">
      <CardHeader className={`${color ? color : ""} text-5xl`}>
        {IconComponent && <IconComponent />}
      </CardHeader>
      <CardContent className="text-center font-quickSand">
        <h3 className="flex items-center justify-center text-4xl font-bold">
          <span className="text-lg">
            <CountUp end={count} duration={5} />
          </span>
          <span className="ml-1 text-lg">{suffix}</span>
        </h3>
        <p className=" font-medium  mt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export const CardComponent = ({ title, content }) => {
  return (
    <div>
      <div className="flex items-center gap-3 font-semibold font-dmSans  text-lg">
        <FcApproval className="text-2xl" />
        {title}
      </div>
      <div className="text-sm py-1 md:px-5 text-gray-500">{content}</div>
    </div>
  );
};
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

const AboutDigital = () => {
  return (
    <>
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-950">
              About Digital Marketing With AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore top digital marketing course online. Learn about fees,
              costs, and best classes for internet marketing careers. Enrol
              today!
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-blue-100 grid w-full grid-cols-3 mb-8">
              <TabsTrigger className="text-blue-950" value="overview">
                Overview
              </TabsTrigger>
              {/* <TabsTrigger value="curriculum">Curriculum</TabsTrigger> */}
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    Course Overview
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our Professional Certification Program in Digital
                      Marketing & Strategy is designed to equip you with the
                      skills and knowledge needed to excel in the digital
                      marketing landscape.
                    </p>
                    <p>
                      With a focus on AI-powered tools and techniques, this
                      course provides a comprehensive understanding of digital
                      marketing strategies, tactics, and best practices.
                    </p>
                    <p>
                      Whether you're a beginner looking to start a career in
                      digital marketing or a business owner wanting to grow your
                      online presence, this course offers valuable insights and
                      practical skills.
                    </p>
                  </div>

                  {/* <div className="mt-6 space-y-4">
                    <h4 className="text-lg font-semibold text-blue-950">
                      What you'll learn:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Fundamentals of digital marketing and strategy",
                        "Search Engine Optimization (SEO) techniques",
                        "Social media marketing strategies",
                        "Content marketing and creation",
                        "Email marketing campaigns",
                        "Pay-per-click (PPC) advertising",
                        "Analytics and data-driven decision making",
                        "AI tools for digital marketing automation",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 ">
                          <CheckCircle className="h-4 w-4 mt-1 text-blue-900 flex-shrink-0" />
                          <span className="">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  <div className="mt-6 space-y-4">
                    <h4 className="text-lg font-semibold text-blue-950">
                      Course Offerings:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {offerings.map(({ icon, title }, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-1 rounded-lg shadow-sm transition hover:bg-gray-200 w-full max-w-xs mx-auto"
                        >
                          <div className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full">
                            <img src={icon} alt={title} className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            {title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-primary/10 opacity-30 blur"></div>
                  <div className="relative overflow-hidden rounded-xl border bg-background shadow-md">
                    <img
                      src={assets.digitalAbout}
                      alt="Digital Marketing Overview"
                      width={600}
                      height={400}
                      className="w-full hidden md:block h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-blue-950">
                      For Beginners
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Start your digital marketing journey with a solid
                      foundation. No prior experience required.
                    </p>
                    <Link
                      href="#"
                      className="text-blue-950 font-medium inline-flex items-center hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-blue-950">
                      For Business Owners
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Grow your business online with effective digital marketing
                      strategies and techniques.
                    </p>
                    <Link
                      href="#"
                      className="text-blue-950 font-medium inline-flex items-center hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-blue-950">
                      For Professionals
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Enhance your skills and advance your career with our
                      industry-recognized certification.
                    </p>
                    <Link
                      href="#"
                      className="text-blue-950 font-medium inline-flex items-center hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div> */}
            </TabsContent>

            {/* <TabsContent value="curriculum">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                  Course Curriculum
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      module: "Module 1: Introduction to Digital Marketing",
                      topics: [
                        "Digital Marketing Landscape",
                        "Key Concepts and Terminology",
                        "Digital Marketing Channels",
                        "Setting Marketing Objectives",
                      ],
                    },
                    {
                      module: "Module 2: Search Engine Optimization (SEO)",
                      topics: [
                        "On-page SEO Techniques",
                        "Off-page SEO Strategies",
                        "Technical SEO",
                        "SEO Tools and Analytics",
                      ],
                    },
                    {
                      module: "Module 3: Social Media Marketing",
                      topics: [
                        "Platform-specific Strategies",
                        "Content Creation for Social Media",
                        "Community Management",
                        "Social Media Advertising",
                      ],
                    },
                    {
                      module: "Module 4: Content Marketing",
                      topics: [
                        "Content Strategy Development",
                        "Content Creation and Curation",
                        "Content Distribution",
                        "Content Performance Measurement",
                      ],
                    },
                    {
                      module: "Module 5: Email Marketing",
                      topics: [
                        "Email List Building",
                        "Email Campaign Design",
                        "Automation and Personalization",
                        "Email Analytics and Optimization",
                      ],
                    },
                    {
                      module: "Module 6: Pay-Per-Click (PPC) Advertising",
                      topics: [
                        "Google Ads",
                        "Social Media Advertising",
                        "Display Advertising",
                        "Campaign Management and Optimization",
                      ],
                    },
                    {
                      module: "Module 7: Analytics and Data",
                      topics: [
                        "Google Analytics",
                        "Key Performance Indicators (KPIs)",
                        "Data Analysis and Reporting",
                        "Data-Driven Decision Making",
                      ],
                    },
                    {
                      module: "Module 8: AI in Digital Marketing",
                      topics: [
                        "AI-powered Marketing Tools",
                        "Automation and Personalization",
                        "Predictive Analytics",
                        "Future of AI in Marketing",
                      ],
                    },
                  ].map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold hover:text-blue-950">
                        {module.module}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 py-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-blue-950 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent> */}

            <TabsContent value="benefits">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                  Course Benefits
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Industry-Recognized Certification
                        </h4>
                        <p className="text-muted-foreground">
                          Receive a certification that is recognized by top
                          companies in the industry, enhancing your credibility
                          and employability.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Hands-on Learning Experience
                        </h4>
                        <p className="text-muted-foreground">
                          Gain practical experience through real-world projects,
                          case studies, and hands-on exercises that simulate
                          actual digital marketing scenarios.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Expert Instructors
                        </h4>
                        <p className="text-muted-foreground">
                          Learn from industry professionals with extensive
                          experience in digital marketing, who provide insights
                          and guidance based on real-world expertise.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Comprehensive Curriculum
                        </h4>
                        <p className="text-muted-foreground">
                          Cover all essential aspects of digital marketing, from
                          fundamentals to advanced strategies, ensuring a
                          well-rounded understanding of the field.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Job Placement Assistance
                        </h4>
                        <p className="text-muted-foreground">
                          Receive support in finding job opportunities,
                          including resume building, interview preparation, and
                          connections with industry partners.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Flexible Learning Options
                        </h4>
                        <p className="text-muted-foreground">
                          Choose from various learning formats, including live
                          online sessions, recorded videos, and self-paced
                          modules, to fit your schedule and learning style.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Access to Latest Tools
                        </h4>
                        <p className="text-muted-foreground">
                          Get hands-on experience with the latest digital
                          marketing tools and technologies, including AI-powered
                          platforms and analytics software.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-blue-950">
                          Networking Opportunities
                        </h4>
                        <p className="text-muted-foreground">
                          Connect with fellow students, instructors, and
                          industry professionals, building a network that can
                          help advance your career.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs">
              <Faq />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default AboutDigital;
