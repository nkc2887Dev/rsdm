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
        formData,
      );
      toast({ title: "Form Submitted Successfully" });
      closeDialog(); // Close the dialog after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ title: "Submission failed", description: "Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3 w-full">
      <h2 className="text-2xl font-semibold text-blue-950 text-center">
        Drop Your Inquiry & Get Free Demo Details
      </h2>

      {/* Name Field */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
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
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
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
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Contact Number Field */}
      <div className="space-y-1">
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-700"
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
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
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
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>

      {/* Submit & Close Buttons */}
      <div className="flex gap-3 justify-center">
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DialogForm;
