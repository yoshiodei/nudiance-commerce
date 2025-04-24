import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full h-auto sm:h-[320px] bg-[#701f7d]  flex justify-center">
      <div className="bg-[url('/images/banner-bg.jpg')] bg-cover bg-center h-full bg-slate-100 xl:w-[1400px] w-full flex sm:flex-row flex-col justify-center items-center xl:gap-5 lg:gap-[35px] md:gap-[40px] py-5 lg:px-[120px] md:px-[60px] sm:px-[60px] px-[20px]">
        <div className="flex-1 flex sm:justify-end justify-center order-2 sm:order-1">
          <div className="xl:w-[450px] lg:w-[350px] sm:w-[350px] w-auto">
            <p className="mb-4 text-[1em] sm:text-[1.2em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.8em] font-bold text-center text-white sm:text-right text-center">Everything you need, all in one place. Enjoy effortless shopping with Nudiance!</p>
            <div className="flex sm:justify-end justify-center">
              <Button className="w-[160px]">Shop Now</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 sm:order-2">
          <Image 
            alt="banner" 
            src="/images/banner-image.png" 
            width="1000" 
            height="1000" 
            className="h-auto w-[450px] lg:w-[350px] sm:w-[350px] w-[300px]" 
          />
        </div>
      </div>
    </div>
  )
}
