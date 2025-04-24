'use client'

import React from 'react'
import PostedProductGauge from '../components/PostedProductGauge'
import HorizontalAds from '@/components/ads/HorizontalAds'
import PostItemForm from '../components/PostItemForm'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation';
// import { categoriesArray } from '@/lib/categoriesArray'
// import { topBrands } from '@/lib/topBrandsArray'

// type CategoryKey = keyof typeof topBrands

export default function PostItemPage() {
  const validCategories = [
    "electronics",
    "vehicles",
    "clothing",
    "toys",
    "home",
    "fitness",
  ] as const;
  
  type Category = typeof validCategories[number];

  function isValidCategory(value: string): value is Category {
    return validCategories.includes(value as Category);
  }

  const { categories } = useParams();

  const category = Array.isArray(categories) ? categories[0] : categories;
  
  if (!category || !isValidCategory(category)) {
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
          <PostItemForm category={category} />
        </div>
      </div>
    </div>
  )
}
