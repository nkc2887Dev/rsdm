import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/utils/styles/carousel.css";
import { NextArrow, PrevArrow } from "../common/Arrow";
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
  let sliderRef = useRef(null);

  const settings = {
    ...(testimonials.length <= 4 ? { dots: true } : { dots: false }),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets & small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className="carousel-container relative overflow-hidden max-w-7xl mx-auto py-8 my-6">
      <h1 className="text-center text-4xl font-bold text-blue-950 mb-10">
        Success Stories
      </h1>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3">
            <div className="p-4">
              <Card className="border-right shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full overflow-hidden">
                      <img
                        src={testimonial.img || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full bg-gray-200"
                      />
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "{testimonial.review}"
                    </p>
                    <h4 className="font-bold text-navy-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
