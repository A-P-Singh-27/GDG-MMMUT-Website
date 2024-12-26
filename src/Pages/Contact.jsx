"use client";
import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import './contact.css'


import animationData from "../lib/contact.json";
import Header from "@/Components/Header";
import { toast } from "react-toastify";
import BottomTabBar from "@/Components/BottomTabBar";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSaveContactandSendMail = async () => {
    try {
      const response = await fetch("https://gdg-mmmut.vercel.app/api/v1/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const defaultOptions = {
    animationData: animationData,
  };

  return (
    <>
      <div className="hidden sm:block">
          <Header className="hidden sm:block"/>
        </div>
        <BottomTabBar/>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveContactandSendMail();
        }}
        className="my-0 sm:my-8 h-[124vh] sm:h-[500px] flex items-center flex-col justify-center" >
        <div className="w-full h-[100%] px-10 lg:px-0" >
          <div
            className="text-center pt-5 w-full sm:pt-6 sm:p-0"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-3/4"></div>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-0 w-full justify-center">
            <Lottie
              options={defaultOptions}
              height={250}
              width={400}
              className="!m-0"
              data-aos="fade-right"
            />
            <Box
              sx={{
                mt: 4,
                maxWidth: 600,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              className="w-full"
              data-aos="fade-left"
            >
              <TextField
                required
                label="Name"
                variant="outlined"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#4F46E5" },
                    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
                }}
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#4F46E5" },
                    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
                }}
              />
              <TextField
                required
                label="Message"
                variant="outlined"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                fullWidth
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#4F46E5" },
                    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                data-aos="zoom-in"
              >
                Reach Out to Us
              </Button>
            </Box>
          </div>
        </div>
      </form>
    </>
  );
}
