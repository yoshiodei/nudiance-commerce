import HorizontalAds from '@/components/ads/HorizontalAds'
import React from 'react'
import SearchProductsSection from './components/SearchProductsSection'

export default function page() {
  return (
    <div className="min-h-[80vh] w-auto bg-slate-50">
      <HorizontalAds />
      <SearchProductsSection />
    </div>
  )
}
