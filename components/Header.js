import React from 'react';
import Image from 'next/image';

import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (

  <div className="shadow-md border-b sticky top-0 bg-white z-30 pb-5 pt-2">        
 <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">            {/* Left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain "
            />
            </div>
            <div className="cursor-pointer h-10 w-10  relative lg:hidden">
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
            onClick={() => router.push("/")}
          />
            </div>
              {/* Middle */}
              <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                  <SearchIcon className="h-5 text-gray-500" />
                </div>
                <input 
                type="text"
                placeholder="Search "
                className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
              </div>

               {/* Right */}
                <div className="flex space-x-4 items-center">
                  <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 esa-out" />
                  <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 esa-out" />
                  <img 
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                  alt="" />
                </div>
          </div>
        </div>

  

    

  )
}
