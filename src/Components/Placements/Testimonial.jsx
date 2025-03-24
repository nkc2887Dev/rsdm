import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

import { Card, CardContent } from "../ui/card";

const testimonialsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    review: "Amazing place to learn digital marketing with hands-on training!",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    review: "The teaching style is simple and practical. I learned a lot!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    review:
      "Best decision to join RSDM! It made digital marketing easy for me.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sneha Verma",
    review:
      "I came with zero knowledge, and now I can confidently manage campaigns!",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    review: "The trainers are supportive and make learning fun!",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Ananya Nair",
    review: "I got real-time project experience, which boosted my confidence.",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Rahul Khanna",
    review:
      "Highly recommend RSDM to anyone who wants to grow in digital marketing!",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Meera Joshi",
    review:
      "Great environment and practical sessions. Learning was smooth and fun!",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Siddharth Malhotra",
    review: "Not just theory—actual skills that I can apply in my career!",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Kavita Iyer",
    review:
      "RSDM helped me learn digital marketing and start my freelancing career!",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 11,
    name: "Amit Bansal",
    review:
      "The skills I learned here helped me get my first freelance client.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Pooja Rao",
    review:
      "Now I can work from anywhere and earn as a freelancer, thanks to RSDM!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
          &#10094;
        </CarouselPrevious>
        <CarouselContent className="flex w-full space-x-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-none w-full md:w-1/2 lg:w-1/3"
            >
              <div className="p-4">
                <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <img
                      src={testimonial.img}
                      alt={`Testimonial from ${testimonial.name}`}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {testimonial.review}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
          &#10095;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Testimonial;
