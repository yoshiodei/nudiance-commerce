'use client'

import HorizontalAds from "@/components/ads/HorizontalAds"
import HeroSection from "../sections/HeroSection";
import CategoriesSection from "../sections/CategoriesSection";
import ProductsSection from "../sections/ProductsSection";

export default function Main() {
  return (
    <div className="min-h-[80vh] w-auto bg-slate-50">
      <HorizontalAds />
      <HeroSection />   
      <CategoriesSection />
      <ProductsSection />
    </div>  
  );
}
  