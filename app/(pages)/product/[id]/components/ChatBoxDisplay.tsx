import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MdOutlineMessage } from "react-icons/md";
import React from 'react'

export default function ChatBoxDisplay() {
  return (
    <div className="shadow-lg border border-slate-300 rounded p-5">
      <div className="flex flex-col gap-3">
        <h1 className="leading-none font-semibold">Message Vendor</h1>
        <Input placeholder="type your message" />
        <Button className="flex items-center">
          <MdOutlineMessage className="mt-1" />
          <h6>Start Message</h6>
        </Button>
      </div>
    </div>
  )
}
