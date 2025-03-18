import React from 'react'
import NavTooltipButton from './NavTooltipButton'
import { FiHeart } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa6';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import ProfileButton from './ProfileButton';
import { Button } from './ui/button';

export default function DisplayNavButtons() {
  return (
    <>
      <NavTooltipButton link="/" label="Notifications" icon={<FaRegBell className="text-primary" />} />
      <NavTooltipButton link="/" label="Wishlist" icon={<FiHeart className="text-primary" />} />
      <NavTooltipButton link="/" label="My Messages" icon={<IoChatboxEllipsesOutline className="text-primary" />} />
      <ProfileButton />
      <Button className="bg-yellow-300 text-primary">Sell Now</Button>  
    </>
  )
}
