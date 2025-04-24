'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdAdd } from "react-icons/io";

export default function PostsTab() {
  const router = useRouter();

  return (
    <div className="w-full rounded bg-white p-[20px] border border-slate-300 ">
            <div className="flex justify-between items-center">
                <h1 className="text-start text-xl font-bold">My Posts</h1>
                <button onClick={() => router.push("/sellnow/select-category")} className="flex cursor-pointer items-center gap-2 bg-primary text-white rounded h-[2.2em] px-2">
                  <IoMdAdd />  
                  <h6 className="sm:block hidden">Add Post</h6>
                </button>
            </div>
            <div className="my-[20px] h-[1px] w-full bg-slate-300" />
            <div className="p-5 flex justify-center">
                <div className="flex items-center flex-col gap-5">
                  <Image 
                    className="w-[75%]"
                    src="/images/empty_icon.png"
                    alt=""
                    width="700" 
                    height="700" 
                  />
                  <p className="text-center leading-tight">You do not have any post yet</p>
                  <button onClick={() => router.push("/sellnow/select-category")} className="flex cursor-pointer items-center gap-2 bg-primary text-white rounded h-[2.2em] px-2">
                    <IoMdAdd />  
                    <h6>Add Post</h6>
                  </button>
                </div>
            </div> 
        </div>
  )
}
