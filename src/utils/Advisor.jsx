import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar.jsx"


export default function Advisor() {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg object-center">
            {/* <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
            /> */}
            <Avatar className='h-56 w-full object-cover rounded-none'>
                <AvatarImage src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
                <AvatarFallback>RKT</AvatarFallback>
            </Avatar>



            <div className="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                </p>
            </div>
        </article>
    )
}


export function AdvisorBrief( {flex}) {
    return (

        // <section>
        //     <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        //         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 group">
        //             <div className='flex flex-row-reverse'>
        //             <div>
        //                 <img
        //                     src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
        //                     className="rounded transition-all duration-300 group-hover:rounded-full"
        //                     alt=""
        //                 />
        //             </div>

        //             <div>
        //                 <div className="max-w-lg md:max-w-none">
        //                     <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        //                         Faculty Advisor
        //                     </h2>
        //                     <p className='text-xl'>R . K Tiwari</p>

        //                     <p className="mt-4 text-gray-700">
        //                         
        //                     </p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        <article className="relative rounded-xl border border-gray-700 bg-gray-800 p-4 overflow-hidden group">
  <div className="flex items-center gap-4">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      className="size-16 rounded-full object-cover"
    />

    <div>
      <h3 className="text-lg font-medium text-white">Claire Mac</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> LinkedIn </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="relative mt-4 h-[15rem] overflow-hidden rounded-lg">
    {/* Image Layer */}
    <img
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      alt="Project Image"
      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Text Layer */}
    <div className="absolute inset-0 flex flex-col justify-center p-4 bg-gray-800 bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="text-xs font-medium text-gray-300">
        The GDG Faculty Advisor mentors and supports the group, bridging university goals with GDG activities.
      </p>
      <p className="mt-2 text-xs font-medium text-gray-300">
        Their leadership ensures the chapter thrives as a hub for technical growth and community engagement.
      </p>
      <p className="mt-2 text-xs font-medium text-gray-300">
        Their leadership ensures the chapter thrives as a hub for technical growth and community engagement.
      </p>
      <p className="mt-2 text-xs font-medium text-gray-300">
        Their leadership ensures the chapter thrives as a hub for technical growth and community engagement.
      </p>
    </div>
  </div>
</article>


    )
}
