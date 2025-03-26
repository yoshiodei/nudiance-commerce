'use client'

import ChatList from "./ChatList";
import ChatWall from "./ChatWall";
import { useState } from "react";


export default function MobileChatScreen() {
  const [openChatList, setOpenChatList] = useState(true);
  
  const toggleChatList = (tab: boolean) => {
    setOpenChatList(tab);
  }

  return (
    <div>
      {openChatList && (<ChatList toggleChatList={toggleChatList} />)}
      {!openChatList && (<ChatWall toggleChatList={toggleChatList} />)}
    </div>
  )
}
