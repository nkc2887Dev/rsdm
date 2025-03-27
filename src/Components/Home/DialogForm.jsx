import axios from "axios";
import React, { useState } from "react";

import { submitForm } from "@/lib/formutil";
import { useToast } from "@/hooks/use-toast";

const DialogForm = ({ from, closeDialog }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    inquiryFrom: from,
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/contacts/create",
        formData
      );
      toast({ title: "Form Submitted Successfully" });
      console.log(response.data);
      closeDialog(); // Close the dialog after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ title: "Submission failed", description: "Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3 w-full">
      <h2 className="text-xl font-semibold text-[#EFF6FF] text-center m-4 mt-10 drop-shadow-md">
        Drop Your Inquiry & Get Free Demo Details
      </h2>

      {/* Name Field */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
        />
      </div>

      {/* Contact Number Field */}
      <div className="space-y-1">
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-300"
        >
          Contact Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="Your Contact Number"
          value={formData.number}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#EFF6FF] border border-gray-600 text-white focus:ring-maroon-500 focus:border-maroon-500 shadow-md"
          rows="4"
        ></textarea>
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
  );
};

export default DialogForm;
