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
import { assets } from "@/assets/assetimports";

export default function HomeTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={assets.logo || "/placeholder.svg"}
              alt="RSDM Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#placements"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Placements
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button>
              <GraduationCap className="mr-2 h-4 w-4" />
              Download Ebook
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Leading Digital Marketing Institute in Rajkot
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                Professional Certification Program in{" "}
                <span className="text-primary">Digital Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Best Digital Marketing Course in Rajkot for Students, Working
                Professionals, and Entrepreneurs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary/60 opacity-30 blur"></div>
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-md">
                <img
                  src="/images/students.png"
                  alt="RSDM Students"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Course Includes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing training with practical experience
              and industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Job Placement & Internships
                      </h3>
                      <p className="text-muted-foreground">
                        Get placed in top companies with our dedicated placement
                        assistance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Live Projects with Experts
                      </h3>
                      <p className="text-muted-foreground">
                        Work on real-world projects guided by industry
                        professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        44 Modules, 5+ Certifications
                      </h3>
                      <p className="text-muted-foreground">
                        Comprehensive curriculum covering all aspects of digital
                        marketing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Affordable Course Fee
                      </h3>
                      <p className="text-muted-foreground">
                        Quality education at competitive pricing with flexible
                        payment options
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Practical & Live Training
                      </h3>
                      <p className="text-muted-foreground">
                        Hands-on experience with real accounts and campaigns
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-primary">
                  40+ Digital Marketing Tools including latest AI Tools
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {/* Tool logos */}
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src="/images/tool-aws.png"
                      alt="AWS"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src="/images/tool-google.png"
                      alt="Google"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src="/images/tool-facebook.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src="/images/tool-shopify.png"
                      alt="Shopify"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src="/images/tool-wordpress.png"
                      alt="WordPress"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="w-full">
                    Inquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-none bg-white shadow-md text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary">96+</h3>
                <p className="text-muted-foreground">Students Enrolled</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white shadow-md text-center">
              <CardContent className="p-6">
                <Building className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary">319+</h3>
                <p className="text-muted-foreground">Partner Companies</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white shadow-md text-center">
              <CardContent className="p-6">
                <Award className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary">23+</h3>
                <p className="text-muted-foreground">Awards Won</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white shadow-md text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary">32+</h3>
                <p className="text-muted-foreground">Expert Trainers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-white" id="courses">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Explore Our Course Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed to make you industry-ready
            </p>
          </div>

          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="specialization">Specialization</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
            </TabsList>
            <TabsContent value="fundamentals" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Digital Marketing Basics
                    </h3>
                    <p className="text-muted-foreground">
                      Introduction to digital marketing concepts and strategies
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      SEO Fundamentals
                    </h3>
                    <p className="text-muted-foreground">
                      Learn search engine optimization basics and techniques
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Content Marketing
                    </h3>
                    <p className="text-muted-foreground">
                      Create engaging content that drives traffic and
                      conversions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Advanced SEO</h3>
                    <p className="text-muted-foreground">
                      Technical SEO, link building, and advanced optimization
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Paid Advertising
                    </h3>
                    <p className="text-muted-foreground">
                      Google Ads, Facebook Ads, and other PPC platforms
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Analytics & Reporting
                    </h3>
                    <p className="text-muted-foreground">
                      Data analysis, KPIs, and performance reporting
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="specialization" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Social Media Marketing
                    </h3>
                    <p className="text-muted-foreground">
                      Platform-specific strategies and community management
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Email Marketing
                    </h3>
                    <p className="text-muted-foreground">
                      List building, automation, and campaign optimization
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      E-commerce Marketing
                    </h3>
                    <p className="text-muted-foreground">
                      Strategies for online stores and conversion optimization
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="certification" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Google Certification
                    </h3>
                    <p className="text-muted-foreground">
                      Google Analytics, Google Ads, and other Google
                      certifications
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Facebook Blueprint
                    </h3>
                    <p className="text-muted-foreground">
                      Facebook advertising and marketing certification
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      HubSpot Academy
                    </h3>
                    <p className="text-muted-foreground">
                      Inbound marketing and sales certification
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Digital Marketing Journey?
              </h2>
              <p className="text-white/80 text-lg">
                Join RSDM today and transform your career with our
                industry-leading digital marketing program.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="/images/logo-white.png"
                alt="RSDM Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-slate-400 mt-4">
                Rajkot School of Digital Marketing - Empowering careers through
                quality digital education.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#placements"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Placements
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-slate-400">
                <p>123 Digital Avenue</p>
                <p>Rajkot, Gujarat 360001</p>
                <p className="mt-2">info@rsdm.in</p>
                <p>+91 9876543210</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Rajkot School of Digital Marketing.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t flex items-center justify-between p-2 z-50">
        <Button variant="ghost" size="sm" className="flex-1">
          <Phone className="h-4 w-4 mr-1" />
          Call Now
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <MessageCircle className="h-4 w-4 mr-1" />
          WhatsApp
        </Button>
        <Button variant="primary" size="sm" className="flex-1">
          <GraduationCap className="h-4 w-4 mr-1" />
          Inquire
        </Button>
      </div>
    </div>
  );
}
