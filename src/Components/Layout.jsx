import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

import BottomBar from "./Home/BottomBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-[50] w-full">
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
      {/* <div className="fixed bg-blue-950 w-full bottom-0 z-[50]">
        <BottomBar />
      </div> */}
    </div>
  );
};

export default Layout;
