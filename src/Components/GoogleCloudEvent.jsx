import React from 'react'
import { Card, CardContent } from "@/Components/ui/card.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel.jsx"


function GoogleCloudEvent() {
    return (
        <div className='flex flex-col justify-center items-center p-0'>
            <div className='justify-self-center'>
                <h1 className='text-3xl text-balance font-bold p-10 justify-self-center sm:text-3xl md:text-4xl lg:text-5xl'><span className='text-[#0F9D58]'>Google</span> <span className='text-[#F4B400]'>Cloud</span> <span className='text-[#4285F4]'>Skill</span> <span className='text-[#DB4437]'>Boost</span> <span className='text-[#E37400]'>Events</span></h1>
            </div>
            <div className="m-5 rounded-full">
                <Carousel className="w-full max-w-xs flex flex-col items-center">
                    {/* Carousel Content */}
                    <CarouselContent className="flex w-[90vw]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-shrink-0 w-full sm:w-80 md:w-96"
                            >
                                <Card className="rounded-lg w-full">
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            <article className="rounded-lg shadow transition hover:shadow-lg">
                                                <img
                                                    alt="Event"
                                                    src="https://wetranscloud.com/wp-content/uploads/2024/09/BlogHeader_Set2_D_ShTJD99.max-2600x2600-1-1024x427.png"
                                                    className="h-56 w-full object-cover rounded-lg"
                                                />
                                                <div className="bg-white p-4 sm:p-6">
                                                    <time
                                                        dateTime="2022-10-10"
                                                        className="block text-xs text-gray-500"
                                                    >
                                                        10th Oct 2022
                                                    </time>
                                                    <a href="#">
                                                        <h3 className="mt-0.5 text-lg text-gray-900">
                                                            How to position your furniture for positivity
                                                        </h3>
                                                    </a>
                                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Recusandae dolores,
                                                        possimus pariatur animi temporibus nesciunt
                                                        praesentium dolore sed nulla ipsum eveniet
                                                        corporis quidem, mollitia itaque minus
                                                        soluta, voluptates neque explicabo tempora
                                                        nisi culpa eius atque dignissimos.
                                                        Molestias explicabo corporis voluptatem?
                                                    </p>
                                                </div>
                                            </article>
                                        </span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Buttons Container */}
                    <div className="flex justify-end gap-4 mt-4 sm:gap-2 md:gap-1">
                        <CarouselPrevious className="px-4 py-2 bg-gradient-to-r from-[#111111] via-[#3e4858] to-[#807f7d] rounded-lg shadow-lg shadow-green-200 hover:bg-gray-300 text-white hidden md:block" />
                        <CarouselNext className="px-4 py-2 bg-gradient-to-r from-[#111111] via-[#3e4858] to-[#807f7d] rounded-lg shadow-lg shadow-green-200 hover:bg-gray-300 text-white hidden md:block" />
                    </div>

                </Carousel>
            </div>

        </div>
    )
}

export default GoogleCloudEvent
