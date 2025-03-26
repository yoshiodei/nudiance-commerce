"use client";

import Image from 'next/image'
import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { IoSearch } from 'react-icons/io5';
// import { Input } from './ui/input';
import { FiHeart as Wishlist } from 'react-icons/fi';
import { FaRegBell as Notifications } from 'react-icons/fa6';
import { LuUserRound as Profile } from 'react-icons/lu';
import { IoChatboxEllipsesOutline as Chats } from 'react-icons/io5';

// import DisplayNavButtons from './DisplayNavButtons';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DisplayNavButtons from '@/components/DisplayNavButtons';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

export default function ChatNav() {
  const [open, setOpen] = useState(false);
    const router = useRouter();
    
      const handleClose = (tab: string ) => {
        if(tab === 'sell-now'){
          router.push(`/${tab}`);
        }
        if(tab === 'messages'){
          router.push(`/profile/messages/098765`);
        } else {
          router.push(`/profile/id/${tab}`);
        }
  
        setOpen(false);
      };

  return (
    <div className="w-full flex justify-center min-h-[10vh] bg-primary">
      <div className="flex 2xl:flex-row xl:flex-row flex-col bg-primary min-h-[10vh] w-full 2xl:w-[1400px] xl:w-[1400px] sm:px-[50px] px-[5vw]">
      {/* flex 2xl:flex-row xl:flex-row flex-col 2xl:bg-red-100 xl:bg-yellow-100 lg:bg-blue-100 md:bg-green-100 sm:bg-black bg-primary min-h-[10vh] w-full 2xl:w-[1400px] xl:w-[1400px] sm:px-[50px] px-[5vw] */}
        <div className="flex items-center w-full h-[10vh]">
          <div className="flex flex-1 justify-start">
            
            <Link href="/" className="">
              <Image 
                className="w-auto 2xl:h-[6.5vh] xl:h-[6.5vh] h-[5.5vh]"
                alt="nudiance logo"
                src="/images/nudiance_logo.png"
                width={1000}
                height={800}
              />
            </Link>  
          </div>
          <div className="flex-1 flex justify-center 2xl:block xl:block hidden">
            {/* <div className="h-[2.3em] rounded w-[400px] bg-white relative">
              <Button className="absolute h-[2.1em] w-auto px-5 rounded right-[0.3em] top-[0.3em] flex items-center">
                  <IoSearch className="text-white" />
                  <p className="leading none">Search</p>
              </Button>
              <Input
                type="text"
                className="w-full h-full rounded ps-2 pe-[100px]" 
                placeholder="I am looking for..."
              />
            </div>   */}
          </div>
          <div className="flex-1 flex items-center justify-end gap-[15px] sm:flex hidden">
            <DisplayNavButtons />   
          </div>
          <div className="flex-1 flex items-center justify-end gap-[15px] sm:hidden block">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild><GiHamburgerMenu className="text-white text-[1.6em]" /></SheetTrigger>
              <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>  
          
            {/* Navigation Buttons */}
          <div className="flex flex-col">
              <div className="w-full flex justify-center mb-[15px]">
                <Button className="py-[1.2em] flex gap-3 justify-center items-center w-full text-center text-[1em] border-b border-slate-300 rounded w-[95%]" onClick={() => handleClose('sell-now')}>
                  Sell Now
                </Button>
              </div>
              <Button  variant="ghost" className="py-[1.5em] flex gap-5 justify-start items-center w-full text-left text-[1.2em] border-y border-slate-300 rounded-none" onClick={() => handleClose('notifications')}>
                <Notifications />
                Notifications
              </Button>
              <Button variant="ghost" className="py-[1.5em] flex gap-5 justify-start items-center w-full text-left text-[1.2em] border-b border-slate-300 rounded-none" onClick={() => handleClose('wishlist')}>
                <Wishlist />
                Wishlist
              </Button>
              <Button variant="ghost" className="py-[1.5em] flex gap-5 justify-start items-center w-full text-left text-[1.2em] border-b border-slate-300 rounded-none" onClick={() => handleClose('messages')}>
                <Chats />
                My Messages
              </Button>
              <Button variant="ghost" className="py-[1.5em] flex gap-5 justify-start items-center w-full text-left text-[1.2em] border-b border-slate-300 rounded-none" onClick={() => handleClose('posts')}>
                <Profile />
                My Account
              </Button>
          </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-red-300 h-[1.5em] text-[1em] py-[1.2em]" type="button">Log Out</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>    
    </div>
  )
}
