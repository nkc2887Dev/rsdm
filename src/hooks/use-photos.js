import axios from "axios";
import { useState } from "react";

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async ({ type }) => {
    try {
      const response = await axios.get(
        `https://rsdmserver.onrender.com/api/v1/photos?type=${type}`,
      );
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  return { photos, fetchPhotos };
};
