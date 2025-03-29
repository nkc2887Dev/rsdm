import { assets } from "@/assets/assetimports";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "@/config/config";
const { PHONE, EMAIL, ADDRESS, AVAILABILTY } = config;
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] text-white">
      {/* PR Logos Section - Floating Cards */}
      <div className="container mx-auto px-4">
        <div className="relative -top-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[assets.pr1, assets.pr2, assets.pr3, assets.pr4].map(
              (logo, index) => (
                <div
                  key={index}
                  className="bg-white/10 border backdrop-blur-md p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-white/50 transition-colors"
                >
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Partner ${index + 1}`}
                    width={100}
                    height={60}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo and Description */}
          <div>
            <img
              src={assets.logo || "/placeholder.svg"}
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

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span> Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span> Placements
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p>{AVAILABILTY.TIME}</p>
                  <p>{AVAILABILTY.TEXT}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>{EMAIL}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>{PHONE}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <div className="flex md:flex-row justify-left items-center gap-1">
              <img className="w-24" src={assets.sb} alt="sb" />
              <img className="w-24" src={assets.mia} alt="mia" />
              <img className="w-24" src={assets.startup} alt="startup" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link
                to="https://www.facebook.com/share/1A9LvXP46D/?mibextid=wwXIfr"
                target="_blank"
                className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                // className="text-slate-400 hover:text-white transition-colors"
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
              {/* <Link
                  to="/"
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
                </Link> */}
              <Link
                to="https://www.instagram.com/rsdminstitute?igsh=dmlhaHJ4aWkxNzFp&utm_source=qr"
                target="_blank"
                className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
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
              {/* <Link
                  to="/"
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
                </Link> */}
              <Link
                to="https://www.linkedin.com/company/rajkot-school-of-digital-marketing/"
                target="_blank"
                className="bg-slate-800 p-2 pl-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 7h4v14h-4V7zm6.5 0h3.5v2.1h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.42 2.45 4.42 5.64V21h-4v-7.1c0-1.7-.03-3.89-2.37-3.89-2.38 0-2.74 1.85-2.74 3.76V21h-4V7z" />
                </svg>
              </Link>
              <Link
                to="https://youtube.com/@rajkotschoolofdigitalmarketing?si=eokgBCrmiN9Zx1fS"
                target="_blank"
                className="bg-slate-800 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.89 2.89 0 00-2.034-2.039C19.245 3.75 12 3.75 12 3.75s-7.245 0-9.464.397A2.89 2.89 0 00.5 6.186 30.987 30.987 0 000 12.021a30.986 30.986 0 00.5 5.835 2.89 2.89 0 002.036 2.038C4.755 20.25 12 20.25 12 20.25s7.245 0 9.464-.397a2.89 2.89 0 002.034-2.038 30.985 30.985 0 00.5-5.835 30.986 30.986 0 00-.5-5.835zM9.75 15.375v-6.75l6.375 3.375-6.375 3.375z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Pashium. Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
