import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import DialogForm from "./DialogForm";
import { config } from "@/config/config";
const { PHONE } = config;

const BottomBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="border-t border-white ">
      <div className="max-w-5xl mx-auto flex items-center justify-between ">
        {/* Call Now Button */}
        <div className="flex justify-center">
          <Link to={`tel:${PHONE}`}>
            <button className="flex text-white gap-2 items-center border-r border-white px-2">
              <span className="hidden md:block">
                <MdOutlineCall />
              </span>
              Call Now
            </button>
          </Link>
        </div>

        {/* WhatsApp Message Button */}
        <div className="flex justify-center">
          <Link to={`https://wa.me/${PHONE}`}>
            <button className="flex text-white gap-2 items-center">
              <span className="hidden md:block">
                <FaWhatsapp />
              </span>
              Leave a WhatsApp Message
            </button>
          </Link>
        </div>

        {/* Inquire Now Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="flex text-white bg-green-500 px-4 py-2 gap-2 items-center hover:bg-green-700 border-l border-white">
              <span className="hidden md:block">
                <GoQuestion />
              </span>
              Inquire Now
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto">
            <DialogForm closeDialog={handleCloseDialog} from={"Bottom-Bar"} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BottomBar;
