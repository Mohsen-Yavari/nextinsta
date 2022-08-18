import React from 'react'

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
          <img 
            className="h-16 w-16 rounded-full cursor-pointer border p-[2px]"
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            alt="" />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">mohsen</h2>
                <h3 className="text-sm text-gray-400">welcom to instagram</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}
