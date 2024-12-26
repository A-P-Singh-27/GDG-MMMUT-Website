import Logo from '@/Components/Logo'


import styles from "../Pages/Events.module.css"
import { Navbar } from '@/stylings/Navbar'
import { Main } from '@/stylings/Main'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "./ui/dropdown-menu.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { toast } from 'react-toastify'
import { jwtDecode } from "jwt-decode";



function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state to track login status
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token); // Log token to check if it's there

    if (token) {
      fetch("https://gdg-mmmut.vercel.app/api/v1/verifyToken", {
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

  useEffect(() => {
    console.log('User login state:', isLoggedIn); // Log after isLoggedIn has been updated
  }, [isLoggedIn]);

  const handleNavigate = () => {
    navigate("/signup"); // This takes the user to the signup page
  };

  const handlelogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/login");
  };


  // const [decodedToken, setDecodedToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token
        if (token) {
          // Decode the token to extract email
          const decoded = jwtDecode(token);
          const email = decoded.email;
    
          if (email) {
            // Fetch user data based on email
            let response = await fetch(`https://gdg-mmmut.vercel.app/api/v1/users?email=${encodeURIComponent(email)}`);
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
  }, [isLoggedIn]);  // Empty dependency array ensures this runs only on the first render
  useEffect(()=>{
    console.log(userData);
    setFirstname(userData?.firstName);
    setLastname(userData?.lastName);
    console.log(firstname);
    console.log(lastname);
    
  },[userData]);

  return (
    <Navbar className='flex justify-between items-center'>
      <Logo />
      <Main >
        <NavLink to='/' classname={`${styles.navlink} hidden sm:block`}>Home</NavLink>
        <NavLink to='/blogs' classname={`${styles.navlink} hidden sm:block`}>Blogs</NavLink>
        <NavLink to='/events' classname={`${styles.navlink} hidden sm:block`}>Events</NavLink>
        <NavLink to='/team' classname={`${styles.navlink} hidden sm:block`}>Team</NavLink>
        <NavLink to="/contact" classname={`${styles.navlink} hidden sm:block`}>Contact Us</NavLink>

      </Main>

      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer flex jsutify-center items-center">
            {/* <Button variant="outline">Open</Button> */}
            <Avatar>
            <AvatarImage src={`https://api.dicebear.com/9.x/initials/svg?seed=${userData?.firstName} ${userData?.lastName}&radius=50`} />
            </Avatar>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handlelogout}>
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>



      ) : (
        // Button for non-logged-in users to navigate to signup
        <button
          onClick={handleNavigate} // Change this to handle navigation to signup
          className='bg-blue-600 p-2 w-[106px] h-[44px] rounded-lg'>
          Join Us
        </button>
      )}
    </Navbar>
  )
}

export default Header