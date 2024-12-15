"use client"

import * as React from "react"

import { Button } from "@/Components/ui/button"
import { FaQuestion } from "react-icons/fa";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer"



export default function DrawerDemo({ label, color }) {
    console.log("color" , color);
    

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className={`text-[${color}]`}>
                    {label}
                    <FaQuestion className='text-xl' />
                </Button>

            </DrawerTrigger>
            <DrawerContent className="text-blue-400 bg-red-50">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className='text-green-500'>{label} is GDG-MMMUT <FaQuestion className='text-2xl' /></DrawerTitle>
                        <DrawerDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, rerum.</DrawerDescription>
                    </DrawerHeader>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique magni fugit eos, porro sapiente et quas id quae, qui illum. Beatae eligendi eos corrupti maiores, eius vitae. Reprehenderit odio aperiam mollitia. Assumenda commodi error dolor dignissimos. Tenetur, consequuntur soluta asperiores doloremque recusandae, dolores molestiae nobis quam esse repellendus quod possimus culpa blanditiis minima sit, dolorum voluptas est! Error reiciendis molestiae natus accusamus modi vitae, laudantium excepturi eum ut consequatur qui velit, laborum quasi architecto a ea officiis non distinctio consequuntur quis sit! Incidunt commodi tenetur libero vero voluptatem, rem culpa? Quasi natus nesciunt vel architecto debitis autem, quaerat enim.
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
