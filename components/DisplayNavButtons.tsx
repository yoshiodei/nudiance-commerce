'use client'

import React from 'react'
import NavTooltipButton from './NavTooltipButton'
import { FiHeart } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa6';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import ProfileButton from './ProfileButton';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function DisplayNavButtons() {
  const router = useRouter();

  return (
    <>
      <NavTooltipButton link="/profile/id/notifications" label="Notifications" icon={<FaRegBell className="text-primary" />} />
      <NavTooltipButton link="/profile/id/wishlist" label="Wishlist" icon={<FiHeart className="text-primary" />} />
      <NavTooltipButton link="/profile/messages/098765" label="My Messages" icon={<IoChatboxEllipsesOutline className="text-primary" />} />
      <ProfileButton />
      <Button onClick={() => router.push("/sell-now")} className="bg-yellow-300 hover:bg-yellow-300 text-primary">Sell Now</Button>  
    </>
  )
}
