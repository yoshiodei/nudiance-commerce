import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IoSendSharp } from "react-icons/io5";
import React from 'react'

export default function LargeChatScreen() {
  return (
    <div className="2xl:w-[1400px] xl:w-[1400px] w-[100vw] h-[90vh] flex">
      <div className="flex w-full h-full sm:p-[0px] lg:py-[50px] lg:px-[15vw] 2xl:px-[8vw]">

        <div className="w-[350px] h-full bg-slate-100 border border-slate-400 flex flex-col">
          <div className="flex items-center h-[10vh] px-3">
            <h1 className="text-[1.7em] font-bold">Chats (2)</h1>
          </div>
          <div className="p-3">
            <Input className="border border-slate-200 bg-white" placeholder="Search" />
          </div>
          <div className="flex-1 w-full">

          <button className="h-[10vh] w-full bg-white flex items-center gap-3 p-[2vh] border-t border-slate-100">
            <div className="w-[70px] h-[70px] rounded-full bg-slate-400"></div>
            <div >
              <h6 className="text-left font-semibold text-[1em]">User Name</h6>
              <p className="text-left text-[0.8em] text-slate-300">Last message</p>  
            </div>
          </button>
          <button  className="h-[10vh] w-full bg-white flex items-center gap-3 p-[2vh] border-t border-slate-100">
            <div className="w-[70px] h-[70px] rounded-full bg-slate-400"></div>
            <div >
              <h6 className="text-left font-semibold text-[1em]">User Name</h6>
              <p className="text-left text-[0.8em] text-slate-300">Last message</p>  
            </div>
          </button>

          </div>
        </div>

        <div className="flex flex-col w-full h-full bg-white border-s-0 border border-slate-400">
          <div className="w-full h-[10vh] bg-slate-200 flex justify-center items-center border-b border-slate-400"></div>
          
          <div className="flex-1 w-full bg-slate-50 flex flex-col flex-1 p-[15px]">
          <div className="self-start p-[10px] rounded-xl bg-purple-400 inline-block max-w-[400px] text-white my-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel itaque laboriosam expedita cupiditate voluptate, illum id ipsa culpa ipsum consequuntur nobis, aliquam delectus sequi officiis molestiae qui dicta, quos eos?
          </div>
          <div className="self-start p-[10px] rounded-xl bg-purple-400 inline-block max-w-[400px] text-white my-1">
            Lorem ipsum.
          </div>
          <div className="self-end p-[10px] rounded-xl bg-slate-300 inline-block max-w-[400px] text-white my-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, temporibus. Necessitatibus perferendis placeat amet similique!
          </div>
          <div className="self-end p-[10px] rounded-xl bg-slate-300 inline-block max-w-[400px] text-white my-1">
            Lorem ipsum.
          </div>
          </div>

          <div className="w-full h-[10vh] border-t border-slate-400 bg-slate-200 flex justify-center items-center">
            <div className="flex gap-3 w-[60%]">
              <Input className="bg-white border border-slate-400" />
              <Button className=""><IoSendSharp /></Button>  
            </div>
          </div>
        </div>

      </div>  
    </div>  
  )
}