import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../components/ui/dialog';



function Contact() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {/* <Button variant="outline" className='border-none shadow-none text-2xl font-normal p-0 m-0'>Contact</Button> */}
                <button
                    type="submit"
                    className="border-none shadow-none text-2xl font-normal p-0 m-0"
                >
                Contact
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="mx-auto max-w-screen-xl w-full px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
                        <h1 className="text-center text-2xl font-bold text-[#4285F4] sm:text-3xl">Get in Contact with
                            <span className='text-[#DB4437] text-2xl'> G</span>
                            <span className='text-[#0F9D58] text-2xl'>D</span>
                            <span className='text-[#F4B400] text-2xl'>G</span>
                            <span className='text-[#dd4b39] text-2xl'>-MMMUT</span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            Type your Query here. Our Responders will respond you on Gmail Soon...
                        </p>

                        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                            <p className="text-center text-lg font-medium">Enter Query and Username</p>

                            <div>
                                <label htmlFor="email" className="">Query/ Doubt</label>

                                <div className="">
                                    <textarea
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Your Query and Doubts"
                                    />


                                </div>
                            </div>

                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white hover:scale-102 hover:shadow-md shadow-blue-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default Contact