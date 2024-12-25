import React from 'react'
import AboutImage from './../assets/aboutImage.svg';
import DrawerDemo from '../utils/AboutEach.jsx';

function About() {
    return (
            <section className='w-full'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex justify-around items-center md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    WHAT, WHY, HOW GDG-MMMUT
                                </h2>
                                {/* This is a comment */}
                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                    architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                    sequi.<br/>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolores asperiores, officia cupiditate enim ex similique sit recusandae accusamus laboriosam?
                                </p>
                            </div>
                            <div flex justify-around items-center md:grid-cols-3 md:items-center md:gap-8>
                            <DrawerDemo label={"What"} color={"#DB4437"}/>
                            <DrawerDemo label={"Why"} color={"#F4B400"}/>
                            <DrawerDemo label={"How"} color={"#E37400"}/>
                            </div>
                        </div>

                            <div>
                            <img
                                src={AboutImage}
                                className="rounded  pt-6 h-[18rem] w-[50rem] mt-[4rem] hidden sm:block"
                                alt=""
                            />
                            </div>
                    </div>
                </div>
            </section>
    )
}

export default About