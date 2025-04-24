'use client'

import React from 'react'
import PostedProductGauge from '../components/PostedProductGauge'
import HorizontalAds from '@/components/ads/HorizontalAds'
import PostItemForm from '../components/PostItemForm'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation';
import { categoriesArray } from '@/lib/categoriesArray'


export default function PostItemPage() {
  const { categories } = useParams();
  

  if (typeof categories !== 'string' || !categoriesArray.includes(categories)) {
    return notFound();
  }

  return (
    <div className="min-h-[80vh] w-full bg-slate-50">
      <div className="w-full flex justify-center">
        <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
          <HorizontalAds />
          <PostedProductGauge />
          <div className="my-5">
            <h1 className="md:text-[2em] sm:text-[1.8em] text-[1.7em] md:text-left text-center font-semibold">Post new item under category &ldquo;<span className="capitalize">{categories}</span>&rdquo;</h1>
            <div className="h-[1px] w-full bg-slate-400 my-5 leading-tight" />
          </div>
          <PostItemForm category={categories} />
        </div>
      </div>
    </div>
  )
}
