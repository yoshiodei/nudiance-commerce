import { Button } from '@/components/ui/button'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full h-[320px] bg-slate-50 flex justify-center">
      <div className="h-full bg-slate-100 xl:w-[1400px] w-full flex justify-center items-center flex-col gap-4 p-5">
        <p className="text-[1em] sm:text-[1.2em] md:text-[1.6em] font-bold text-center">Everything you need, all in one place. Enjoy effortless shopping with Nudiance!</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  )
}
