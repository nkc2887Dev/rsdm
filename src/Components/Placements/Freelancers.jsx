import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePhotos } from "@/hooks/use-photos";
import { NextArrow, PrevArrow } from "../common/Arrow";

const Freelancers = () => {
  const { photos, fetchPhotos } = usePhotos();
  const [loading, setLoading] = useState(true);
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    ...(photos.length <= 4 ? { dots: true } : { dots: false }),
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
    (async () => {
      await fetchPhotos({ type: "Student as Freelancer" });
      setLoading(false);
    })();
  }, []);

  // if (loading) {
  //   return <div className="text-center py-8">Loading...</div>;
  // }

  return (
    <>
      {!loading && (
        <div className="carousel-container relative overflow-hidden max-w-7xl mx-auto py-10">
          <h1 className="text-center text-4xl font-bold text-blue-950 mb-10">
            Stundents As a Freelancer
          </h1>
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {photos.map((image, index) => (
              <div key={index} className="p-4 slide">
                <img
                  src={image.img}
                  alt={`Placement ${index + 1}`}
                  className="w-full h-auto max-h-[400px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Freelancers;
