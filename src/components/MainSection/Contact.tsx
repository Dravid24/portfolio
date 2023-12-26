import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button, useTheme, Alert } from "@mui/material";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";

const StyledContectWrapper = styled.div`
  max-width: 1080px;
  margin-bottom: 50px;
  .heading {
    display: flex;
    align-items: center;
    padding: 70px 0 20px;
    width: 100%;
    font-size: clamp(26px, 5vw, 36px);
    white-space: nowrap;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      margin-left: 20px;
      background: #969493;
      @media (max-width: 1080px) {
        width: 100%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
  p {
    margin: 20px auto;
    margin-bottom: 40px;
    max-width: 540px;
    font-size: clamp(14px, 5vw, 20px);
  }

  .message-form {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    margin: auto;
  }

  .input-box {
    margin: 10px 0;
  }

  .form-btn {
    margin-top: 10px;
    width: fit-content;
  }
`;

type MessageFormProps = {
  email: string;
  fullname: string;
  message: string;
};

const Contact = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_vtk34se",
        "template_0kgvdop",
        e.currentTarget,
        "mCAQ6m3v4-cxm-FkZ"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMsg("Email sent successfully");
          setTimeout(() => {
            setSuccessMsg(null);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Something went wrong");
          setTimeout(() => {
            setErrorMsg(null);
          }, 3000);
        }
      );
  };

  const validate = (values: MessageFormProps) => {
    const errors: MessageFormProps = {
      email: "",
      fullname: "",
      message: "",
    };
    if (!values.fullname) {
      errors.fullname = "Name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Enter valid email address";
    } else if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <StyledContectWrapper id="contact">
      <h1 className="heading">Get In Touch</h1>
      <div style={{ color: dark ? "#ccd6f6" : "#696969", textAlign: "center" }}>
        <p>
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          fullname: "",
          message: "",
        }}
        validate={validate}
        onSubmit={(values, actions) =>
          actions.resetForm({
            values: {
              email: "",
              fullname: "",
              message: "",
            },
          })
        }
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form
            className="message-form"
            onSubmit={(e) => {
              submitForm(e);
              handleSubmit();
            }}
          >
            <TextField
              error={touched.fullname && errors.fullname ? true : false}
              className="input-box"
              label="Name"
              variant="outlined"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              error={touched.email && errors.email ? true : false}
              className="input-box"
              label="Email"
              variant="outlined"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              error={touched.message && errors.message ? true : false}
              className="input-box"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.fullname && errors.fullname && (
              <Alert severity="error">{errors.fullname}</Alert>
            )}
            {touched.email && errors.email && (
              <Alert severity="error">{errors.email}</Alert>
            )}
            {touched.message && errors.message && (
              <Alert severity="error">{errors.message}</Alert>
            )}
            {successMsg && <Alert severity="success">{successMsg}</Alert>}
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Button
              variant="contained"
              size="large"
              className="form-btn"
              type="submit"
              disabled={loading}
            >
              Send Message
            </Button>
          </form>
        )}
      </Formik>
    </StyledContectWrapper>
  );
};

export default Contact;
