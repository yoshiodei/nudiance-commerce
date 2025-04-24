'use client'

import { Button } from '@/components/ui/button'
import { IoFilterSharp } from "react-icons/io5";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Slider } from "@/components/ui/slider"

import React, {useState} from 'react'
import ProductCard from '@/components/ProductCard';
import { useParams } from 'next/navigation';

export default function SearchProductsSection() {

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const {search} = useParams();

  
  

  // const handlePriceChange = (range: number[]) => {
  //   const updatedRange: [number, number] = [range[0], range[1]]
  //   setPriceRange(updatedRange)
  //   // onFilterChange({ priceRange: updatedRange, categories: selectedCategories, conditions: selectedConditions })
  // }


  return (
    <div className="w-full flex justify-center mt-5">
      <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold sm:text-[1.2em] text-[1em] sm:py-5 py-[20px]">Search Results For &ldquo;{search}&rdquo;</h1>
          <Drawer>
      <DrawerTrigger asChild>
          <Button className="bg-slate-200 h-[2.5em] hover:text-white text-slate-700">
            <IoFilterSharp className="hover:text-white" />
            <p className="hover:text-white">filter</p>
          </Button> 
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Products</DrawerTitle>
            <DrawerDescription>Set parameters for filtering</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <p>Hello World</p>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-2">Price Range</h4>

            <Slider
              value={priceRange}
              min={0}
              max={10000}
              step={10}
              minStepsBetweenThumbs={10} // 10 steps × step size 10 = ₵1000 gap
              onValueChange={(range: number[]) => {
                const updatedRange: [number, number] = [range[0], range[1]]
                setPriceRange(updatedRange)
                // onFilterChange({
                //   priceRange: updatedRange,
                //   categories: selectedCategories,
                //   conditions: selectedConditions
                // })
              }}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              </div>


          </div>
          <DrawerFooter>
            <Button>Filter</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-5 lg:gap-4 sm:gap-3 gap-2">
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
          <div className="h-auto rounded w-full">
            <ProductCard
              image="https://via.placeholder.com/200"
              title="High-Quality Wireless Headphones with Noise Cancellation"
              price="99.99"
              badgeText="New"
              onClick={() => console.log("Product clicked")}
            />
          </div>  
        </div>
      </div>
    </div>
  )
}
