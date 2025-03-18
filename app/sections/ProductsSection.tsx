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

import React from 'react'
import ProductCard from '@/components/ProductCard';

export default function ProductsSection() {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold sm:text-[1.2em] text-[1em] sm:py-5 py-[20px]">Explore Products</h1>
          
          <Drawer>
      <DrawerTrigger asChild>
          <Button className="bg-slate-200 h-[2.5em] text-slate-700">
            <IoFilterSharp />
            <p>filter</p>
          </Button> 
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <p>Hello World</p>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
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
