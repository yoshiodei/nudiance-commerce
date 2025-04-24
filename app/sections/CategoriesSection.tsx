'use client'

import React from 'react'
// import { Button } from '@/components/ui/button'
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
  
export default function CategoriesSection() {
  const router = useRouter();

  return (
    <section className="w-full flex justify-center">
      <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold sm:text-[1.2em] text-[1em] sm:py-5 py-[20px]">Browse by Category</h1>
        </div>
        <div className="flex justify-center gap-5 flex-wrap py-[20px]">
          
            <button onClick={() => router.push('/categories/electronics')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
              <HiDevicePhoneMobile className="text-[1.8em] text-slate-600" />
              <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Electronics</p>
            </button>
          
          
          <button onClick={() => router.push('/categories/vehicles')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <FaCar className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Vehicles</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/clothing')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <GiLargeDress className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Clothing</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/home')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <IoHome className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Home</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/health')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <FaSprayCanSparkles className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Health</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/fitness')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <FaDumbbell className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Fitness</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/toys')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <MdOutlineSmartToy className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Toys</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/books')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <IoBookSharp className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Books</p>
          </button>
          
          
          <button onClick={() => router.push('/categories/services')} className="rounded-lg cursor-pointer hover:bg-slate-100 border-2 border-slate-400 p-2 xl:w-[90px] xl:h-[90px] lg:w-[80px] lg:h-[80px] md:w-[90px] md:h-[70px] w-[60px] h-[60px] flex flex-col justify-center items-center">
            <FaUserGear className="text-[1.8em] text-slate-600" />
            <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.8em] lg:text-[0.9em] font-semibold text-slate-500">Services</p>
          </button>
          
        </div>
      </div>
    </section>
  )};