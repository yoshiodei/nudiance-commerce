import React from 'react'
import ProductCarousel from './components/ProductCarousel'
import { FaRegBookmark } from "react-icons/fa6";
import VendorDisplay from './components/VendorDisplay'
import ChatBoxDisplay from './components/ChatBoxDisplay'
import ButtonsBoxDisplay from './components/ButtonsBoxDisplay'
import { FaLocationDot } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaEye } from "react-icons/fa";

export default function Product() {
  return (
    <section className="w-full flex justify-center">
          <div className="gap-5 flex lg:flex-row flex-col sm:min-h-[80vh] min-h-auto w-full 2xl:w-[1400px] xl:w-[1400px] py-5 sm:px-[50px] px-[5vw]">
            <main className="flex flex-col flex-1 gap-5">
              <div className="sm:border sm:border-slate-300 rounded sm:p-5">
                <ProductCarousel />

                

              </div>
              <div className="border border-slate-300 rounded p-5">
                <div className="flex flex-col gap-3">
                  <div className="flex sm:items-center sm:flex-row gap-3 flex-col justify-between"> 
                    <h1 className="text-[2.5em] font-bold leading-none">$ 999.99</h1>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <FaEye />
                        <p>123</p>
                      </Button>    
                      <Button variant="outline">
                        <FaRegBookmark />
                        <p>123</p>
                      </Button>    
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Badge className="py-[5px] px-[10px] rounded bg-slate-100 text-slate-600">Brand New</Badge>
                    <Badge className="py-[5px] px-[10px] rounded bg-slate-100 text-slate-600">Negotiable</Badge>
                    <Badge className="py-[5px] px-[10px] rounded bg-slate-100 text-slate-600"><FaLocationDot /> Austin, Texas</Badge>
                  </div>
                  <h2 className="text-lg font-semibold leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                <div className="my-5 w-full h-[1px] bg-slate-300" />
                <div className="flex flex-col">
                  <div>
                    <h6 className="text-primary font-bold">Brand</h6>
                    <h3 className="text-xl font-semibold">Product Brand Name</h3>    
                  </div>
                  <div className="my-5 w-full h-[1px] bg-slate-300" />
                  <div>
                    <h6 className="text-primary font-bold">Date Posted</h6>
                    <h3 className="text-xl font-semibold">January 1, 2025</h3>    
                  </div>
                  <div className="my-5 w-full h-[1px] bg-slate-300" />
                  <div>
                    <h6 className="text-primary font-bold">Description</h6>
                    <h3 className="text-xl font-semibold leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam nam beatae quas, consequatur maiores quos at tempore, libero dignissimos iusto reprehenderit fugit ipsam molestias? Omnis, velit minus? Quam, reprehenderit corporis.</h3>    
                  </div>
                </div>
              </div>
            </main>
            <aside className="lg:w-[300px] w-full">
              <div className="flex flex-col gap-4">
                <VendorDisplay />
                <ChatBoxDisplay />
                <ButtonsBoxDisplay />
              </div>
            </aside>
          </div> 
        </section>
  )
}
