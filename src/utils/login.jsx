import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/Components/ui/dialog.jsx";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const [open, setOpen] = useState(false); // Dialog opens automatically
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    if (email) {
      setFormData({ ...formData, email });
    }
  }, [location.search,])

  // Automatically open the dialog if the user is on the /login route
  useEffect(() => {
    if (window.location.pathname === "/login") {
      setOpen(true);
    }
  }, [window.location.pathname]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    try {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!", {
          position: 'bottom-right'
        });
        const params = new URLSearchParams(location.search);
        const email = params.get('email');
        const feedback = params.get('feedback');
        if (feedback) {
          try {
            const response = await fetch(`http://localhost:4000/api/v1/saveFeedback`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: email, feedback: feedback }),
            });
            console.log('response', response);

            if (response.ok) {
              toast.success("Feedback saved successfully!");
            } else {
              toast.error("Failed to save feedback.");
            }
          } catch (err) {
            console.error("Error saving feedback:", err);
            toast.error("An error occurred. Please try again later.");
          }
        }

        console.log("Login successful:", data);
        if (data.token) {
          console.log(data.token);

          localStorage.setItem("token", data.token);
        }
        setTimeout(() => navigate("/"), 1000);; // Redirect to the homepage after successful login
      } else {
        toast.error(data.message || "Login failed. Please try again.");
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
      setError("Network error. Please try again.");
    }
  };

  // Handle dialog close and redirect
  const handleClose = () => {
    setOpen(false);
    navigate("/"); // Redirect to homepage if dialog is closed
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            <h1 className="text-2xl font-bold">Welcome Back to GDG MMMUT! 🚀</h1>
            <p className="text-xl">
              Empowering innovation and fostering a vibrant developer community.
            </p>
            <p>Log in to access exclusive events, resources, and connect with like-minded enthusiasts!</p>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
