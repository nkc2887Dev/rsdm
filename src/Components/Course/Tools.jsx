import { cn } from "@/lib/utils";
import { assets } from "@/assets/assetimports";

import Marquee from "../ui/marquee";

// Replace these with your actual company logos
const companyLogos = [
  assets.Tool1,
  assets.Tool2,
  assets.Tool3,
  assets.Tool4,
  assets.Tool5,
  assets.Tool6,
  assets.Tool7,
  assets.Tool8,
  assets.Tool9,
  assets.Tool10,
  assets.Tool11,
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
      className="w-full object-contain mix-blend-multiply max-h-16 min-h-16 min-w-48 max-w-48 md:max-h-28 md:min-h-28 md:max-w-72 md:min-w-72"
    />
  </div>
);

export function ToolsMarquee() {
  return (
    <div className=" relative flex-col flex py-8  w-full items-center border-none justify-center overflow-hidden rounded-lg border bg-white dark:bg-gray-900 gap-8">
      <h1 className="mt-10 font-openSans font-bold text-blue-950 text-4xl text-center px-8">
        Master these Tools
      </h1>
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        {/* Added padding to the sides */}{" "}
        <Marquee className="[--duration:60s]">
          {" "}
          {companyLogos.map((logo, index) => (
            <div key={index}>
              {" "}
              <LogoCard logo={logo} />{" "}
            </div>
          ))}{" "}
        </Marquee>{" "}
        <Marquee reverse className="[--duration:60s]">
          {" "}
          {companyLogos.map((logo, index) => (
            <div key={index}>
              {" "}
              <LogoCard logo={logo} />{" "}
            </div>
          ))}{" "}
        </Marquee>{" "}
        <div className="pointer-events-none absolute inset-y-0 left-0 md:left-32 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10"></div>{" "}
        {/* Added z-index */}{" "}
        <div className="pointer-events-none absolute inset-y-0 right-0 md:right-32 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10"></div>{" "}
        {/* Added z-index */}{" "}
      </div>
      {/* First Marquee Row */}
    </div>
  );
}

export default ToolsMarquee;
