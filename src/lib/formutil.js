import axios from "axios";

export const submitForm = async (toast, formData, url, resetForm) => {
  try {
    await axios.post(url, formData);
    toast({
      title: "Request Submitted Successfully. We will get back to you soon.",
    });
    if (resetForm) resetForm();
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({ title: "Submission failed. Please try again later." });
  }
};
