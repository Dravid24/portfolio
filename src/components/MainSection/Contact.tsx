import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button, useTheme, Typography, Box } from "@mui/material";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const Section = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 80px 0;

  .heading {
    margin-bottom: 70px;

    h1 {
      display: flex;
      align-items: center;
      font-size: clamp(26px, 5vw, 36px);
      white-space: nowrap;
      span {
        background: linear-gradient(to right, #3b82f6, #2dd4bf);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        margin-left: 20px;
        background: #969493;
      }
    }

    p {
      font-size: clamp(13px, 5vw, 20px);
      margin-top: 10px;
      color: #94a3b8;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Card = styled(Box)`
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  .icon {
    padding: 14px;
    border-radius: 12px;
    background: linear-gradient(135deg, #3b82f6, #2dd4bf);
    color: white;
    display: flex;
  }

  .label {
    font-size: 16px;
    color: #94a3b8;
  }

  .value {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [loading, setLoading] = useState(false);

  const submitForm = (e: any, resetForm: any) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_vtk34se",
        "template_0kgvdop",
        e.currentTarget,
        "mCAQ6m3v4-cxm-FkZ",
      )
      .then(() => {
        setLoading(false);
        resetForm();
        alert("Message sent successfully ✅");
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong ❌");
      });
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.fullname) errors.fullname = "Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.message) errors.message = "Message is required";
    return errors;
  };

  return (
    <Section id="contact">
      <div className="heading">
        <h1>
          Let's&nbsp;<span>Connect</span>
        </h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div className="wrapper">
        {/* LEFT SIDE */}
        <div>
          <Typography
            variant="h6"
            mb={2}
            sx={{ fontSize: "23px", fontWeight: 600 }}
          >
            Contact Information
          </Typography>

          <InfoItem>
            <div className="icon">
              <EmailIcon />
            </div>
            <div>
              <div className="label">Email</div>
              <div className="value">dravidmani1998@gmail.com</div>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon">
              <PhoneIcon />
            </div>
            <div>
              <div className="label">Phone</div>
              <div className="value">+91 8667377046</div>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon">
              <LocationOnIcon />
            </div>
            <div>
              <div className="label">Location</div>
              <div className="value">Chennai, Tamilnadu</div>
            </div>
          </InfoItem>

          {/* Social */}
          {/* <Typography variant="h6" mt={4} mb={2}>
            Follow Me
          </Typography>

          <Box display="flex" gap={2}>
            <IconButton
              onClick={() =>
                window.open("https://github.com/Dravid24", "_blank")
              }
              sx={{
                border: "1px solid #1e293b",
                borderRadius: "10px",
                color: "#cbd5f5",
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              onClick={() => window.open("https://linkedin.com", "_blank")}
              sx={{
                border: "1px solid #1e293b",
                borderRadius: "10px",
                color: "#cbd5f5",
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box> */}
        </div>

        {/* RIGHT SIDE FORM */}
        <Card
          sx={{
            border: isDark ? "1px solid #1e293b" : "1px solid #E0E6EE",
          }}
        >
          <Typography
            variant="h6"
            mb={2}
            sx={{ fontSize: "23px", fontWeight: 600 }}
          >
            Send a Message
          </Typography>

          <Formik
            initialValues={{
              email: "",
              fullname: "",
              message: "",
            }}
            validate={validate}
            onSubmit={() => {}}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              touched,
              resetForm,
            }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm(e, resetForm);
                  handleSubmit();
                }}
              >
                <TextField
                  fullWidth
                  label="Your Name"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  error={touched.fullname && !!errors.fullname}
                  helperText={touched.fullname && errors.fullname}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Your Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                  margin="normal"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<SendIcon />}
                  disabled={loading}
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    background: "linear-gradient(135deg, #3b82f6, #2dd4bf)",
                  }}
                >
                  Send Message
                </Button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
