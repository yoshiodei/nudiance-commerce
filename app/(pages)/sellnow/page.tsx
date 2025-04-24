import HorizontalAds from '@/components/ads/HorizontalAds'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-[80vh] w-auto bg-slate-50 flex justify-center">
      <div className="flex justify-center min-h-[80vh] w-full 2xl:w-[1400px] xl:w-[1400px] sm:px-[50px] px-[5vw]">
        <div className="w-full">
          <HorizontalAds />  
          <form className="w-full">
            <div>
              <h1 className="font-bold sm:text-[1.2em] text-[1em] sm:py-5 py-[20px]">Post New Item</h1> 
            </div>
          </form>
        </div>
      </div>  
    </div>
  )
}
