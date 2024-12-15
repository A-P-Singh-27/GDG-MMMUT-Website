import React from 'react'
import { FaQuestion } from "react-icons/fa";
import { Button } from "@/Components/ui/button.jsx"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import RecruitmentHead from './../utils/recruitmenthead.jsx';


function FirstYear() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <RecruitmentHead />
            <Drawer className=''>
                <DrawerTrigger asChild>
                    <Button className='text-[#DB4437] bg-white'>
                        First Know the Criterias
                        <FaQuestion className='text-xl' />
                    </Button>

                </DrawerTrigger>
                <DrawerContent className="text-blue-400 bg-red-50">
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle className='text-green-500'>GDG-MMMUT Recruitment Criteria<FaQuestion className='text-2xl' /></DrawerTitle>
                            <DrawerDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, rerum.</DrawerDescription>
                        </DrawerHeader>
                        <div >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique magni fugit eos, porro sapiente et quas id quae, qui illum. Beatae eligendi eos corrupti maiores, eius vitae. Reprehenderit odio aperiam mollitia. Assumenda commodi error dolor dignissimos. Tenetur, consequuntur soluta asperiores doloremque recusandae, dolores molestiae nobis quam esse repellendus quod possimus culpa blanditiis minima sit, dolorum voluptas est! Error reiciendis molestiae natus accusamus modi vitae, laudantium excepturi eum ut consequatur qui velit, laborum quasi architecto a ea officiis non distinctio consequuntur quis sit! Incidunt commodi tenetur libero vero voluptatem, rem culpa? Quasi natus nesciunt vel architecto debitis autem, quaerat enim.
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-xl text-[#DB4437] justify-self-center'>Application not Started Yet</h1>
                            <Button variant="outline" className='text-[#DB4437] bg-red-50 '>Notify me !</Button>
                        </div>

                        <DrawerFooter>
                            <DrawerClose asChild>
                                <button className='border-red-400 border rounded-lg hover:shadow-md'>Close</button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
//had a change
export default FirstYear
