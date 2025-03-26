import Image from 'next/image'
import React from 'react'

export default function WishlistTab() {
  return (
    <div className="w-full rounded bg-white p-[20px] border border-slate-300 ">
        <div className="">
            <h1 className="text-start text-xl font-bold">Wishlist</h1>
        </div>
        <div className="my-[20px] h-[1px] w-full bg-slate-300" />
        <div className="p-5 flex justify-center">
            <div className="flex items-center flex-col">
            <Image 
                className="w-[75%]"
                src="/images/empty_icon.png"
                alt=""
                width="700" 
                height="700" 
            />
            <p className="text-center leading-tight">You do not have any items in the wishlist</p>
            </div>
        </div> 
    </div>
  )
}
