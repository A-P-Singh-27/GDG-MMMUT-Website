import React, { useEffect, useState } from 'react'
import gdgLogo from './../assets/GdgLogo.svg';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';


function Footer() {
    const navigate = useNavigate();
    // const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // state to track login status
    const [feedback, setFeedback] = useState(""); // state to track login status
    const [email, setEmail] = useState(""); // state to track login status

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve token
                if (token) {
                    // Decode the token to extract email
                    const decoded = jwtDecode(token);
                    setEmail(decoded.email);

                    if (email) {
                        // Fetch user data based on email
                        let response = await fetch(`http://localhost:4000/api/v1/users?email=${encodeURIComponent(email)}`);
                        console.log(response);

                        if (!response.ok) {
                            throw new Error("Failed to fetch user data");
                        }
                        const data = await response.json();
                        console.log('Decoded User Data:', data); // Check the fetched data here
                        setUserData(data.data); // Set the user data in state
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (isLoggedIn) {  // Only fetch user data if logged in
            fetchUserData();
        }
    }, [isLoggedIn]);

    const handlesaveFeedback = async () => {
        if (feedback) {
                  try {
                    const response = await fetch(`http://localhost:4000/api/v1/saveFeedback`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email: email, feedback: feedback }),
                    });
                    // console.log('response', response);
        
                    if (response.ok) {
                      toast.success("Feedback saved successfully!");
                      setFeedback("");
                    } else {
                      toast.error("Failed to save feedback.");
                    }
                  } catch (err) {
                    console.error("Error saving feedback:", err);
                    toast.error("An error occurred. Please try again later.");
                  }
                }
    }




    const handleCheckUserandRedirect = async () => {

        try {
            const response = await fetch(`http://localhost:4000/api/v1/checkUser?email=${encodeURIComponent(email)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();

            if (response.ok && data.isRegistered) {
                toast.success("You are already registered. Redirecting to login...");
                setTimeout(() => navigate(`/login?email=${encodeURIComponent(email)}&feedback=${encodeURIComponent(feedback)}`), 1000);
            } else {
                navigate(`/signup?email=${encodeURIComponent(email)}&feedback=${encodeURIComponent(feedback)}`);
            }
        } catch (err) {
            console.error("Error checking user:", err);
            toast.error("An error occurred. Please try again later.");
        }
    };


    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token from localStorage:', token); // Log token to check if it's there

        if (token) {
            fetch("http://localhost:4000/api/v1/verifyToken", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            })
                .then((response) => {
                    console.log('Response Status:', response.status); // Log status code to ensure request success
                    return response.json(); // Parse response to JSON
                })
                .then((data) => {
                    console.log('Token verify response:', data); // Log entire response data
                    if (data.success) {
                        setIsLoggedIn(true);
                    } else {
                        localStorage.removeItem("token");
                        setIsLoggedIn(false);
                    }
                })
                .catch((error) => {
                    console.error('Error verifying token:', error); // Log any error
                    toast.error("An error occurred while verifying your token!");
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                });
        } else {
            setIsLoggedIn(false); // If no token is found, log out the user
        }
    }, []); // This will run once when the component mounts




    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="block text-teal-600">
                            <img src={gdgLogo} alt="" className='h-[4rem] w-[7rem] inline mb-1' />
                            <span className='text-[#DB4437] text-xl'>G</span>
                            <span className='text-[#0F9D58] text-xl'>D</span>
                            <span className='text-[#F4B400] text-xl'>G</span>
                            <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                        </div>

                        <div className="mt-8 space-y-4 lg:mt-0">
                            <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

                            <div>
                                <h2 className="text-2xl font-medium text-gray-900">Give Your Feedback</h2>
                            </div>

                            {
                                isLoggedIn ? (
                                    <form className="mt-6 h-fit w-full"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handlesaveFeedback();
                                        }}
                                    >
                                        <div
                                            className="rounded-xl flex flex-col border-[3px] border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                        >
                                            <textarea
                                                type="text"
                                                id="userFeedback"
                                                placeholder="Your Feedback"
                                                required
                                                value={feedback}
                                                onChange={(e) => {
                                                    setFeedback(e.target.value);
                                                }}
                                                style={{ minHeight: '10rem', resize: 'none' }}
                                                className="sm:flex-1 border-2 rounded-xl w-full"
                                            />
                                            <button
                                                className="mt-1 w-full rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none border-blue-600 bg-blue-600 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:mt-0 sm:w-auto"
                                            >
                                                Send Feedback
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <form className="mt-6 h-fit w-full"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleCheckUserandRedirect();
                                        }}
                                    >
                                        <div
                                            className="rounded-xl flex flex-col border-[3px] border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                        >
                                            <input
                                                type="email"
                                                id="UserEmail"
                                                placeholder="abcd@gmail.com"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                value={email}
                                                className="w-full sm:flex-1 border-2 rounded-xl"
                                            />
                                            <textarea
                                                type="text"
                                                id="userFeedback"
                                                placeholder="Your Feedback"
                                                required
                                                value={feedback}
                                                onChange={(e) => {
                                                    setFeedback(e.target.value);
                                                }}
                                                style={{ minHeight: '10rem', resize: 'none' }}
                                                className="sm:flex-1 border-2 rounded-xl w-full"
                                            />

                                            <button type='submit'
                                                className="mt-1 w-full rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none border-blue-600 bg-blue-600 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:mt-0 sm:w-auto"
                                            >
                                                Sign Up
                                            </button>
                                        </div>

                                    </form>
                                )
                            }
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">

                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="font-medium text-gray-900">Services</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
                                    </li>

                                    <li>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Company</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-black flex m-3 gap-5'>
                            <span className='text-2xl'><IoLogoLinkedin /></span>
                            <span className='text-2xl'><FaInstagram /></span>
                            <span className='text-2xl'><AiOutlineWhatsApp /></span>
                            <span className='text-2xl'><FaSquareXTwitter /></span>
                            <span className='text-2xl'><FaDiscord /></span>
                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs text-gray-500">&copy; 2025. GDG-MMMUT. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer