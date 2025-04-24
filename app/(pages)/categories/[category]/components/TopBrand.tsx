import React from 'react'

export default function TopBrand() {
  return (
      <section className="w-full flex justify-center">
        <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-bold sm:text-[1.2em] text-[1em] sm:py-5 py-[20px]">Browse by Category</h1>
          </div>
          <div className="flex justify-center gap-5 flex-wrap py-[20px]">
            
              <button className="rounded-full cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
                
                <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Electronics</p>
              </button>
            
          </div>
        </div>
      </section>
    )
}
