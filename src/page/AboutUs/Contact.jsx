import { Box, Container } from "@mui/material";
import axios from "axios";
import { Clock10Icon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

import { Toast, ToastAction } from "../../Components/ui/toast";
import { useToast } from "../../hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "@/config/config";
const { PHONE, EMAIL, ADDRESS, AVAILABILTY } = config;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    inquiryFrom: "Contactus",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    number: false,
    message: false,
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {
      name: !formData.name,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      number: !formData.number || !/^\d+$/.test(formData.number),
      message: !formData.message,
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData: ", formData);
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "All fields are required",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
      });
      return;
    }
    if (validate()) {
      setIsSubmitting(true);
      try {
        const result = await axios.post(
          "https://rsdmserver.onrender.com/api/v1/contacts/create",
          formData
        );
        console.log("result: ", result);
        toast({
          title: "Request Submitted Successfully",
          description: "We will get back to you soon.",
          action: <ToastAction altText="Go back">Undo</ToastAction>,
        });
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
          inquiryFrom: "Contactus",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Submission failed. Please try again later.",
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-blue-50">
      <section className="py-5 md:py-5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Fill out the form and we'll get back
              to you shortly.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="h-12"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      {errors.name && (
                        <span className="text-red">"Name is required."</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                      {errors.email && (
                        <span className="text-red">"Enter a valid email."</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="number"
                        name="number"
                        type="text"
                        placeholder="Enter your phone number"
                        className="h-12"
                        value={formData.number}
                        onChange={handleChange}
                        error={errors.number}
                      />
                      {errors.number && (
                        <span className="text-red">
                          "Enter a valid phone number (digits only)."
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        error={errors.message}
                      />
                      {errors.message && (
                        <span className="text-red">
                          "Message cannot be empty."
                        </span>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* <Card className="border-none shadow-md bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2DvmXvvbg3m23JaYChXLtv442aFbCG.png"
                      alt="Map location"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <Link
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" className="font-medium">
                          <MapPin className="mr-2 h-4 w-4" />
                          View Larger Map
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">{ADDRESS}</p>
                      {/* <p className="text-muted-foreground">Gujarat, India</p> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Opening Hours
                      </h3>
                      <p className="text-muted-foreground">
                        {AVAILABILTY.TIME}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">{PHONE}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">{EMAIL} </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="pb-16 md:pb-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.858607910088!2d70.7581320871582!3d22.2793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395927d878f13b95%3A0x2dc90395b210b8d9!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1732599067442!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
