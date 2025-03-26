import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AuthNav() {
  return (
    <div className="w-full flex justify-center min-h-[10vh] bg-primary">
      <div className="flex items-center bg-primary h-[10vh] w-full 2xl:w-[1400px] xl:w-[1400px] sm:px-[50px] px-[5vw]">
      
        <Link href="/" className=""> 
          <Image 
            className="w-auto 2xl:h-[6.5vh] xl:h-[6.5vh] h-[5.5vh]"
            alt="nudiance logo"
            src="/images/nudiance_logo.png"
            width={1000}
            height={800}
          />
        </Link>

      </div>    
    </div>
  )
}
