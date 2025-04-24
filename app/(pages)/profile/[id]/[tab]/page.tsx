'use client'

import React, { useState } from 'react'
import { FiHeart as Wishlist } from 'react-icons/fi';
import { FaRegBell as Notifications } from 'react-icons/fa6';
import { IoChatboxEllipsesOutline as Chats } from 'react-icons/io5';
import { MdArrowForwardIos as Arrow } from "react-icons/md";
import { BsBagHeart as Posts } from "react-icons/bs";
import NotificationsTab from './component/NotificationsTab';
import PostsTab from './component/PostsTab';
import WishlistTab from './component/WishlistTab';
import { useParams, useRouter } from 'next/navigation';

export default function Profile() {
  const { tab:tabParam }: { tab: string } = useParams();

  const [tab, setTab] = useState(tabParam);
  const router = useRouter();

  return (
    <section className="w-full flex justify-center">
      <div className="gap-5 flex lg:flex-row flex-col sm:min-h-[80vh] min-h-auto w-full 2xl:w-[1400px] xl:w-[1400px] py-5 sm:px-[50px] px-[5vw]">
        <aside className="lg:w-[300px] w-full">
          
          <div className="w-full rounded bg-white p-[20px] flex flex-col items-center border border-slate-300 gap-2 mb-4">
            <div className="w-[100px] h-[100px] bg-slate-400 rounded-full"></div>
            <h1 className="text-xl text-center font-semibold">Your Name</h1>
            <div className="flex flex-col gap-2 items-center leading-none">
              <p>my number</p>
              <p>email</p>
            </div>
          </div> 

          <div className="lg:flex md:grid sm:grid grid-cols-2 flex flex-col gap-2 py-3">
            <button onClick={() => setTab('posts')} className={`${tab === "posts" ? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-slate-200"} cursor-pointer w-full border border-slate-300 rounded flex items-center sm:justify-between justify-center h-[2.8em] px-5 font-semibold`}>
              <div className="flex gap-4 items-center justify-start">
                <Posts />
                <h2>My Posts</h2>
              </div>
              <Arrow className="lg:block hidden" />
            </button>
            <button onClick={() => setTab('notifications')} className={`${tab === "notifications" ? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-slate-200"} cursor-pointer w-full border border-slate-300 rounded flex items-center sm:justify-between justify-center h-[2.8em] px-5 font-semibold`}>
              <div className="flex gap-4 items-center justify-start">
                <Notifications />
                <h2>Notifications</h2>
              </div>
              <Arrow className="lg:block hidden" />
            </button>
            <button onClick={() => router.push('/profile/messages/098765') } className="cursor-pointer hover:bg-slate-200 w-full border border-slate-300 rounded flex items-center sm:justify-between justify-center h-[2.8em] px-5 font-semibold">
              <div className="flex gap-4 items-center justify-start">
                <Chats />
                <h2>My Message</h2>
              </div>
              <Arrow className="lg:block hidden" />
            </button>
            <button onClick={() => setTab('wishlist')} className={`${tab === "wishlist" ? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-slate-200"} cursor-pointer w-full border border-slate-300 rounded flex items-center sm:justify-between justify-center h-[2.8em] px-5 font-semibold`}>
              <div className="flex gap-4 items-center justify-start">
                <Wishlist />
                <h2>Wishlist</h2>
              </div>
              <Arrow className="lg:block hidden" />
            </button>
          </div>

        </aside>
        <main className="flex-1">
          {(tab === 'notifications') && (<NotificationsTab />)}
          {(tab === 'wishlist') && (<WishlistTab />)}
          {(tab === 'posts') && (<PostsTab />)}
        </main>
      </div> 
    </section>
  )
}
