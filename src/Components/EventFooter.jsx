
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import gdgLogo from './../assets/GdgLogo.svg';




function EventFooter() {
    return (
        <footer className="bg-white text-lg w-full p-5">
                <div className="block text-teal-600">
                                            <img src={gdgLogo} alt="" className='h-[4rem] w-[7rem] inline mb-1' />
                                            <span className='text-[#DB4437] text-xl'>G</span>
                                            <span className='text-[#0F9D58] text-xl'>D</span>
                                            <span className='text-[#F4B400] text-xl'>G</span>
                                            <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                                        </div>

                    <div className="flex flex-col gap-8">

                        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-3 text-center ">
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
                        <div className='text-black flex gap-5 '>
                            <span className='text-2xl'><IoLogoLinkedin /></span>
                            <span className='text-2xl'><FaInstagram /></span>
                            <span className='text-2xl'><AiOutlineWhatsApp /></span>
                            <span className='text-2xl'><FaSquareXTwitter /></span>
                            <span className='text-2xl'><FaDiscord /></span>
                        </div>

                        <div className=" border-t border-gray-100 pt-8 text-center">
                        
                            <p className="mt-8 text-xs text-gray-500">&copy; 2025. GDG-MMMUT. All rights reserved.</p>
                        </div>

                    </div>

        </footer>
    )
}

export default EventFooter