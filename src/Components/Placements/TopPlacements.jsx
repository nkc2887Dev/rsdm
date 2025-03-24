import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

import { assets } from "@/assets/assetimports"; // Ensure this is the correct import path
import { usePhotos } from "@/hooks/use-photos";

const TopPlacements = () => {
  const { photos, fetchPhotos } = usePhotos();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchPhotos({ type: "Top Placement" });
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const images = photos.map((photo) => photo.img);

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Top Placements</h2>
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
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex-none w-full md:w-1/3">
              <div className="p-4">
                <img
                  src={image}
                  alt={`Placement ${index + 1}`}
                  className="w-full h-[370px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
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

export default TopPlacements;
