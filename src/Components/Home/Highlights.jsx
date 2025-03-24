import { cn } from "@/lib/utils";
import { assets } from "@/assets/assetimports";

import Marquee from "../ui/marquee";

// Replace these with your actual company logos
const companyLogos = [
  assets.l1,
  assets.l2,
  assets.l3,
  assets.l4,
  assets.l5,
  assets.l6,
  assets.l7,
  assets.l8,
  assets.l9,
  assets.l10,
  assets.l11,
  assets.l12,
  assets.l13,
  assets.l14,
  assets.l15,
  assets.l16,
  assets.l17,
  assets.l18,
  assets.l19,
  assets.l20,
  assets.l21,
  assets.l22,
  assets.l23,
  assets.l24,
  assets.l25,
  assets.l26,
  assets.l27,
  assets.l28,
];

const LogoCard = ({ logo }) => (
  <div
    className={cn(
      "flex items-center justify-center  mix-blend-multiply p-4 bg-gray-100 dark:bg-gray-800",
      "rounded-lg shadow-md",
    )}
  >
    <img
      src={logo}
      alt="Company Logo"
      className="w-full object-contain mix-blend-multiply max-h-20  min-h-20 min-w-32 max-w-32"
    />
  </div>
);

export function LogoMarquee() {
  return (
    <div className="relative flex-col flex  w-full items-center justify-center overflow-hidden rounded-lg border bg-white dark:bg-gray-900 gap-8">
      <h1 className="mt-10 text-4xl font-bold text-blue-950 mb-10">
        Students Placed and Hired in Companies
      </h1>
      {/* First Marquee Row */}
      <Marquee className="[--duration:80s]">
        {companyLogos.map((logo, index) => (
          <div key={index}>
            <LogoCard logo={logo} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:80s]">
        {companyLogos.map((logo, index) => (
          <div key={index}>
            <LogoCard logo={logo} />
          </div>
        ))}
      </Marquee>

      {/* Second Marquee Row (Reverse) */}
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {companyLogos.map((logo, index) => (
          <LogoCard key={`reverse-${index}`} logo={logo} />
        ))}
      </Marquee> */}

      {/* Gradient Effects */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
    </div>
  );
}

export default LogoMarquee;
