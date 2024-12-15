import React from "react";
import { Card, CardContent } from "@/Components/ui/card.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/Components/ui/carousel";

function RecentWinner() {
    return (
        <div>
            <h1 className="text-4xl font-bold justify-self-center my-4">
                Our Recent Winners
            </h1>
            <div className="relative w-full h-fit bg-gray-50">
                {/* Carousel Wrapper */}
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="relative w-[90%] mx-auto"
                >
                    {/* Previous Button */}
                    <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10" />

                    {/* Carousel Content */}
                    <CarouselContent className="flex gap-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                            >
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">
                                                <a
                                                    href="#"
                                                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                                >
                                                    <span
                                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                                    ></span>

                                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                                        <div>
         <h1>{index+1}</h1>                                                   <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                                Building a SaaS product as a software developer
                                                            </h3>

                                                            <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                                                        </div>

                                                        <div className="hidden sm:block sm:shrink-0">
                                                            <img
                                                                alt=""
                                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                                                className="size-16 rounded-lg object-cover shadow-sm"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <p className="text-pretty text-sm text-gray-500">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                                            maiores deleniti consectetur nobis et eaque.
                                                        </p>
                                                    </div>

                                                    <p className="mt-6 flex gap-4 sm:gap-6">
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-medium text-gray-600">Event Date :</p>
                                                            <p className="text-xs text-gray-500">11st Dec, 2024</p>
                                                        </div>

                                                        <div className="flex flex-col-reverse">
                                                            <p className="text-sm font-medium text-gray-600">Result Announced</p>
                                                            <p className="text-xs text-gray-500">3 Days ago</p>
                                                        </div>
                                                    </p>
                                                </a>
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Next Button */}
                    <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </div>
    );
}

export default RecentWinner;
