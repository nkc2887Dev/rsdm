import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { useToast } from "@/hooks/use-toast";

const useFetchOthers = () => {
  const [others, setOthers] = useState([]);
  const { toast } = useToast();
  const fetchOthers = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://rsdmserver.onrender.com/api/v1/others",
      );
      setOthers(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error("Error fetching others:", error);
    }
  }, []);
  const createTestimonial = async (otherId, newTestimonial) => {
    try {
      const other = others.find((item) => item._id === otherId);
      const updatedTestimonials = [
        ...(other.testimonials || []),
        newTestimonial,
      ];
      const updatedOther = { ...other, testimonials: updatedTestimonials };

      await updateOther(otherId, updatedOther);
      toast({
        title: "Testimonial added successfully",
      });
    } catch (error) {
      console.error("Error creating testimonial:", error);
      toast({
        title: "Failed to add testimonial",
      });
    }
  };

  const createVideo = async (otherId, newVideo) => {
    try {
      const other = others.find((item) => item._id === otherId);
      const updatedVideos = [...(other.videos || []), newVideo];
      const updatedOther = { ...other, videos: updatedVideos };

      await updateOther(otherId, updatedOther);
      toast({
        title: "Video added successfully",
      });
    } catch (error) {
      console.error("Error creating video:", error);
      toast({
        title: "Failed to add video",
      });
    }
  };

  const updateOther = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `https://rsdmserver.onrender.com/api/v1/others/${id}`,
        updatedData,
      );
      setOthers((prevOthers) =>
        prevOthers.map((other) => (other._id === id ? response.data : other)),
      );
      fetchOthers();
      toast({
        title: "Data Updated Successfully",
      });
    } catch (error) {
      console.error("Error updating other:", error);
      toast({
        title: "Data Update Error",
      });
    }
  };

  const deleteOther = async (id) => {
    try {
      await axios.delete(`https://rsdmserver.onrender.com/api/v1/others/${id}`);
      setOthers((prevOthers) => prevOthers.filter((other) => other._id !== id));
      toast({
        title: "Data Deleted Successfully",
      });
    } catch (error) {
      console.error("Error deleting other:", error);
      toast({
        title: "Data delete error ",
      });
    }
  };

  const deleteAllOthers = async () => {
    try {
      await axios.delete("https://rsdmserver.onrender.com/api/v1/others");
      setOthers([]);
    } catch (error) {
      console.error("Error deleting all others:", error);
    }
  };

  useEffect(() => {
    fetchOthers();
  }, [fetchOthers]);

  return {
    others,
    setOthers,
    updateOther,
    deleteOther,
    deleteAllOthers,
    createTestimonial,
    createVideo,
  };
};

export default useFetchOthers;
