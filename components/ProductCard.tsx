"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  badgeText?: string;
  onClick: () => void;
}

export default function ProductCard({
  image,
  title,
  price,
  badgeText,
  onClick,
}: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      className="w-full cursor-pointer transition-transform hover:scale-105 shadow-none border-none p-0 gap-[10px]"
      onClick={onClick}
    >
      {/* Image Wrapper with Background Color */}
      <div className="relative w-full h-[150px] bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        {/* Product Image */}
        <img src={image} alt={'.'} className="w-full h-full object-cover" />

        {/* Badge (Top Left) */}
        {badgeText && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            {badgeText}
          </Badge>
        )}

        {/* Like Button (Top Right) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2"
          onClick={(e) => {
            e.stopPropagation(); // Prevents card click trigger
            setLiked(!liked);
          }}
        >
          <Heart
            className={`w-5 h-5 ${
              liked ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </Button>
      </div>

      {/* Card Content */}
      <CardContent className="px-2 pb-2">
        {/* Product Title (Truncated) */}
        <p className="text-sm font-medium truncate">{title}</p>

        {/* Price */}
        <p className="text-lg font-semibold text-primary">${price}</p>
      </CardContent>
    </Card>
  );
}
