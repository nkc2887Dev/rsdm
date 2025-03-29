"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "@/assets/assetimports";
import {
  FaHome,
  FaBook,
  FaBriefcase,
  FaInfoCircle,
  FaPhone,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GraduationCap, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogForm from "./Home/DialogForm";
import { config } from "@/config/config";
const { PHONE } = config;

const links = [
  { title: "Home", url: "/", icon: FaHome },
  { title: "Courses", url: "/courses", icon: FaBook },
  { title: "Placements", url: "/placements", icon: FaBriefcase },
  { title: "About Us", url: "/about", icon: FaInfoCircle },
  { title: "Contact Us", url: "/contact", icon: FaPhone },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  // Close mobile menu when route changes
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
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
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6">
            {links.map((link) => {
              const isActive = location.pathname === link.url;

              return (
                <Link
                  key={link.url}
                  to={link.url}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span
                    className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <Link to={`tel:${PHONE}`}>
              <Button variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </Link>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Download Ebook
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={"Download Ebook"}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      {/* Sidebar Nav */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-64 h-full text-white bg-[#EFF6FF]  shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-700 p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close menu"
        >
          <FaTimes size={20} />
        </button>
        <nav
          className="flex flex-col my-14 p-4 space-y-2"
          aria-label="Mobile Navigation"
        >
          {links.map((link) => {
            const isActive = location.pathname === link.url;
            const Icon = link.icon;

            return (
              <Link
                key={link.url}
                to={link.url}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-950"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={18} />
                <span>{link.title}</span>
              </Link>
            );
          })}
          <div className="flex flex-col items-start gap-4">
            <Link to={`tel:${PHONE}`}>
              <Button className="bg-blue-950 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </Link>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-950 text-white">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Download Ebook
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={"Download Ebook"}
                />
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
