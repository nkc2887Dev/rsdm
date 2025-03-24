import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FaTimes } from "react-icons/fa";

const AutoDialog = ({ closeDialog }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    inquiryFrom: "Popup",
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://rsdmserver.onrender.com/api/v1/contacts/create",
      formData,
    );
    closeDialog();
    toast({
      title: "Form Submitted Successfully",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#2C2A2A] p-6 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
        <button
          className="absolute top-4 right-4 text-white p-2 hover:bg-gray-100 hover:text-gray-600 rounded-full"
          onClick={closeDialog}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold text-[#EFF6FF] text-center m-4 drop-shadow-md">
          Drop Your Inquiry & Get Free Demo Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
            />
          </div>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
            />
          </div>
          {/* Contact Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Contact Number
            </label>
            <input
              type="tel"
              name="number"
              placeholder="Your Contact Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
            />
          </div>
          {/* Submit & Close Buttons */}
          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded-md shadow-lg hover:from-blue-950 hover:to-blue-800 hover:shadow-xl transition-all"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeDialog}
              className="w-full py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-md shadow-lg hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AutoDialog;
