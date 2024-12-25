import React, { useEffect, useState } from 'react'
import gdgLogo from './../assets/GdgLogo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '@/Components/Logo';


function Signup() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(email);

    }, [email])

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailParam = params.get('email');
        if (emailParam) {
            setEmail(emailParam);
            setFormData({ ...formData, email: emailParam });
        }
    }, [location.search]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        console.log(formData);

        try {
            const response = await fetch("http://localhost:4000/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('data = ', data.token);


            if (response.ok) {
                toast.success("Signup successful!")
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
                setSuccess(data.message);
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    // setIsLoggedIn(true);  // Update the login state
                    setTimeout(() => navigate("/"));
                }
                // setTimeout(() => navigate("/"), 3000); 
            } else if (response.status === 409) {
                // User already exists, redirect to login pages
                toast.error(data.message || "User already registered. Please login.");
                setError(data.message || "User already registered. Please login.");
                setEmail(formData.email);
                setTimeout(() => navigate(`/login?email=${encodeURIComponent(formData.email)}`), 1000); // Redirect to login after error message
            } else {
                toast.error(data.message || "Signup failed. Please try again.");
                setError(data.message || "Signup failed. Please try again."); // Handle error messages from API
            }
        } catch (err) {
            toast.error("Network error. Please try again.");
            setError("Network error. Please try again."); // Handle network errors
        }

    }

    return (
        <section className="bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%2520of%2520DF24-Key-Art-Vertical-Editable_gVvdCR7.jpg"}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <h2 className="mt-6 text-3xl relative top-5 font-bold text-blue-600 sm:text-3xl md:text-4xl">
                            Welcome to
                            <span className='text-[#DB4437] text-xl'>&nbsp;G</span>
                            <span className='text-[#0F9D58] text-xl'>D</span>
                            <span className='text-[#F4B400] text-xl'>G</span>
                            <span className=' text-xl'>-MMMUT</span>
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#646362]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                to={"/"}
                            >
                                <img src={gdgLogo} alt="" className='rounded-full h-[6rem] w-[8rem]' />
                            </Link>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to
                                <span className='group '>
                                    <span className='text-[#DB4437] text-2xl group-hover:text-4xl transition-all duration-100'>&nbsp;G</span>
                                    <span className='text-[#0F9D58] text-2xl group-hover:text-3xl transition-all duration-100'>D</span>
                                    <span className='text-[#F4B400] text-2xl group-hover:text-2xl transition-all duration-100'>G</span>
                                    <span className='text-[#4285F4] text-2xl group-hover:text-3xl transition-all duration-100'>-MMMUT</span>
                                </span>
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            {/* <img src={gdgLogo} className='justify-self-center' alt="" /> */}
                            <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png" alt='' width="45rem" />
                            <div className="block justify-self-center text-teal-600 lg:hidden ">
                                <span className='text-[#DB4437] text-xl'>G</span>
                                <span className='text-[#0F9D58] text-xl'>D</span>
                                <span className='text-[#F4B400] text-xl'>G</span>
                                <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                            {error && <p className="col-span-6 text-sm text-red-500">{error}</p>}
                            {success && <p className="col-span-6 text-sm text-green-500">{success}</p>}

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type='submit'
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?&nbsp;
                                    <Link to={"/login"}>
                                        <button className='p-2 border m-2 rounded-md bg-blue-400 text-teal-50'>
                                            Login
                                        </button>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Signup