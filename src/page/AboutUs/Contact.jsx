import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Clock10Icon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

import { Toast, ToastAction } from "../../Components/ui/toast";
import { useToast } from "../../hooks/use-toast";
import { config } from "@/config/config";
const { PHONE, EMAIL } = config;

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
    if (validate()) {
      setIsSubmitting(true);
      try {
        await axios.post(
          "https://rsdmserver.onrender.com/api/v1/contacts/create",
          formData,
        );
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
    <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
      <Typography
        variant="h4"
        className="text-center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          color: "#333",
        }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: "1rem",
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        We&apos;d love to hear from you! Fill out the form and we&apos;ll get
        back to you shortly.
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              boxShadow: 2,
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    helperText={errors.name && "Name is required."}
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email && "Enter a valid email."}
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="number"
                    type="text"
                    value={formData.number}
                    onChange={handleChange}
                    error={errors.number}
                    helperText={
                      errors.number &&
                      "Enter a valid phone number (digits only)."
                    }
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    error={errors.message}
                    helperText={errors.message && "Message cannot be empty."}
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: "20px",
                    textTransform: "none",
                    boxShadow: 2,
                    backgroundColor: "#172554",
                    "&:hover": { backgroundColor: "#172690" },
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h5"
              display={"flex"}
              sx={{ mb: 2, fontWeight: 600 }}
            >
              <CiLocationOn sx={{ verticalAlign: "middle", marginRight: 1 }} />
              Address:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: 2,
                boxShadow: 1,
                fontWeight: 500,
                color: "#333",
              }}
            >
              Astorn Chowk, Rajkot
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              display={"flex"}
              gap={1}
              sx={{ mb: 2, fontWeight: 600 }}
            >
              <Clock10Icon />
              Opening Hours:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: 2,
                boxShadow: 1,
                fontWeight: 500,
                color: "#333",
              }}
            >
              Monday-Saturday, 9:00 AM to 9:00 PM
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h6"
              display={"flex"}
              gap={1}
              sx={{ mb: 2, fontWeight: 600 }}
            >
              <PhoneIcon />
              Contact Info:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: 2,
                boxShadow: 1,
                fontWeight: 500,
                display: "flex",
                flexDirection: "column",
                color: "#333",
              }}
            >
              <strong>Email:</strong> {EMAIL}
              <strong>Call:</strong> +91 {PHONE}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.858607910088!2d70.7581320871582!3d22.2793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395927d878f13b95%3A0x2dc90395b210b8d9!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1732599067442!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
};

export default ContactUs;
