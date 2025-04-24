'use client'

import React from 'react'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { MdOutlineSmartToy } from 'react-icons/md'
import { FaDumbbell } from 'react-icons/fa6'
import { FaSprayCanSparkles } from 'react-icons/fa6'
import { GiLargeDress } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'
import { FaUserGear } from 'react-icons/fa6'
import { IoBookSharp } from 'react-icons/io5'
import { FaCar } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function CategoryList() {
  const router = useRouter();

  return (
    <section className="w-full flex justify-center">
      <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center font-bold sm:text-[1.6em] text-[1em] pt-[20px] pb-[10px]">Select Category of Product to be Posted</h1>
          <div className="w-[150px] h-[4px] mb-5 bg-slate-400" />
        </div>
        <div className="flex justify-center sm:gap-7 gap-2 flex-wrap py-[20px]">
          
            <button onClick={() => router.push("/sellnow/electronics")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <HiDevicePhoneMobile className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Electronics</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes mobile phones, laptops, tablets, gaming consoles etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/vehicles")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <FaCar className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Vehicles</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes cars, motorcycles, scooters, spare parts, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/clothing")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <GiLargeDress className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Clothing</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes men&apos;s, women&apos;s, and children&apos;s apparel, shoes, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/home")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <IoHome className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Home</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes furniture, kitchenware, decor, appliances, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/health")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <FaSprayCanSparkles className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Health</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes personal care, supplements, medical equipment, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/fitness")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <FaDumbbell className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Fitness</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes personal care, supplements, gym equipment, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/toys")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <MdOutlineSmartToy className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Toys</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes kids’ toys, educational games, action figures, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/books")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <IoBookSharp className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Books</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes textbooks, novels, magazines, comics, etc.</p>
            </button>
          

            
            <button onClick={() => router.push("/sellnow/services")} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-3 xl:w-[180px] xl:h-auto lg:w-[180px] lg:h-auto md:w-[180px] md:h-auto sm:w-[180px] sm:h-auto w-[38vw] h-auto flex flex-col justify-center items-center">
              <FaUserGear className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[1.2em] font-semibold text-slate-500">Services</p>
              <div className="h-[3px] w-[50px] bg-slate-400 mb-3 mt-1" />
              <p className="text-sm text-slate-400 leading-tight">Includes repair, cleaning, tutoring, and delivery services, etc.</p>
            </button>
          

        </div>    
      </div>
    </section>    
  )
}
