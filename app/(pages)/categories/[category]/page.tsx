import CategoriesSection from '@/app/sections/CategoriesSection'
import HorizontalAds from '@/components/ads/HorizontalAds'
import React from 'react'
import CategoryHeroSection from './components/CategoryHeroSection'
import CategoriesProductsSection from './components/CategoriesProductsSection'

export default function page() {
  return (
    <div className="min-h-[80vh] w-auto bg-slate-50">
      <HorizontalAds />
      <CategoryHeroSection />
      <CategoriesSection />
      <CategoriesProductsSection />
    </div>
  )
}
