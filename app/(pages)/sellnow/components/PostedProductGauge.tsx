import { Button } from '@/components/ui/button'
import React from 'react'

export default function PostedProductGauge() {
  return (
    <div className="flex justify-center w-full">
    <div className="flex flex-col gap-3 w-[700px] p-5">
      <h5 className="font-semibold text-[1.5em] text-center text-primary">1 product posted out of 3 free products this month</h5>
      <div className="border-2 border-primary w-full h-[10px] rounded-full">
        <div className="w-[33%] h-full rounded-full bg-primary" />
      </div>
      <div className="w-full flex justify-center">
        <Button className="rounded bg-primary ">
          Upgrade Account
        </Button>
      </div>  
    </div>
    </div>
  )
}
