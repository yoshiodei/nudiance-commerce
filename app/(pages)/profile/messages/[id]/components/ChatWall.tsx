import { Input } from '@/components/ui/input'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


interface IChatList {
  toggleChatList: (tab: boolean) => void
}

export default function ChatWall({toggleChatList}: IChatList) {

 

  return (
    <div className="w-[100vw] h-[90vh] flex flex-col">
        <div className="h-[6em] w-full flex items-center px-[5vw] bg-slate-100 gap-3">
          <button onClick={() => toggleChatList(true)} className="w-[2em] h-[4.5em] flex items-center">
            <IoIosArrowBack className="text-[1.5em]" />
          </button>
          <div className="w-[4.5em] h-[4.5em] rounded-full bg-slate-400"></div>
          <div className="">
            <h1 className="font-semibold text-[1.4em]">User Name</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full bg-white p-[5vw]">
          <div className="self-start p-[10px] rounded-xl bg-purple-400 inline-block max-w-[70vw] text-white my-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel itaque laboriosam expedita cupiditate voluptate, illum id ipsa culpa ipsum consequuntur nobis, aliquam delectus sequi officiis molestiae qui dicta, quos eos?
          </div>
          <div className="self-start p-[10px] rounded-xl bg-purple-400 inline-block max-w-[70vw] text-white my-1">
            Lorem ipsum.
          </div>
          <div className="self-end p-[10px] rounded-xl bg-slate-300 inline-block max-w-[70vw] text-white my-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, temporibus. Necessitatibus perferendis placeat amet similique!
          </div>
          <div className="self-end p-[10px] rounded-xl bg-slate-300 inline-block max-w-[70vw] text-white my-1">
            Lorem ipsum.
          </div>
        </div>
        <div className="flex justify-center items-center h-[6em] bg-slate-100">
          <Input 
            placeholder="Type a message"
            className="rounded bg-white w-[90%] h-[2.5em]" 
          />
        </div>  
      </div>
  )
}
