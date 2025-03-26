import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button'
import { FaFlag } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";


export default function ButtonsBoxDisplay() {
  return (
    <div className="shadow-lg border border-slate-300 rounded p-5">
      <div className="flex flex-col gap-3">
        <Button className="flex items-center border text-primary border-primary hover:bg-white bg-white">
          <FaRegHeart className="mt-1" />
          <h6>Add to wishlist</h6>
        </Button>
        <Button className="flex items-center border text-red-500 border-red-500 hover:bg-white bg-white">
          <FaFlag className="mt-1" />
          <h6>Report Abuse</h6>
        </Button>
        <Button variant="secondary" className="flex items-center border border-slate-400">
          <IoMdShare className="mt-1" />
          <h6>Share</h6>
        </Button>
      </div>
    </div>
  )
}
