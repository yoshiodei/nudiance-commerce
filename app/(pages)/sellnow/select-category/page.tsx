import React from 'react'
import PostedProductGauge from '../components/PostedProductGauge'
import HorizontalAds from '@/components/ads/HorizontalAds'
import CategoryList from '../components/CategoryList'

export default function page() {
  return (
    <div className="min-h-[80vh] w-full bg-slate-50">
      <div className="w-full flex justify-center">
        <div className="h-full xl:w-[1400px] sm:px-[50px] px-[5vw] w-full">
          <HorizontalAds />
          <PostedProductGauge />
          <CategoryList />
        </div>
      </div>
    </div>
  )
}
