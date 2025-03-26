import React from 'react'

interface IChatList {
    toggleChatList: (tab: boolean) => void
}

export default function ChatList({toggleChatList}: IChatList) {
  return (
    <div className="w-[100vw] h-[90vh] flex flex-col bg-slate-50">
      <div className="h-[6em] w-full flex justify-center items-center px-[5vw] bg-slate-100">
        <h1 className="text-[1.5em] font-bold ">Chatlist (2)</h1>        
      </div>  
      { false && (<div className="flex-1 p-[5vw]">
        <h1 className="text-center font-bold text-slate-300 text-[1.7em] mt-[50px]">Chat list is empty.</h1>
      </div>)}
      
         <button onClick={() => toggleChatList(false)} className="h-[10vh] w-full bg-white flex items-center gap-3 p-[2vh] border-t border-slate-100">
            <div className="w-[70px] h-[70px] rounded-full bg-slate-400"></div>
            <div >
              <h6 className="text-left font-semibold text-[1em]">User Name</h6>
              <p className="text-left text-[0.8em] text-slate-300">Last message</p>  
            </div>
          </button>
          <button onClick={() => toggleChatList(false)} className="h-[10vh] w-full bg-white flex items-center gap-3 p-[2vh] border-t border-slate-100">
            <div className="w-[70px] h-[70px] rounded-full bg-slate-400"></div>
            <div >
              <h6 className="text-left font-semibold text-[1em]">User Name</h6>
              <p className="text-left text-[0.8em] text-slate-300">Last message</p>  
            </div>
          </button>
      
    </div>
  )
}
