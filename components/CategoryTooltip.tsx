"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipButtonProps {
  label: string;  // Tooltip text
  icon: React.ReactNode;  // Button text
  link: string;  // Navigation link
}

export default function CategoryTooltip({ label, icon, link }: TooltipButtonProps) {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="w-[2.6em] h-[2.6em] rounded flex items-center justify-center"
            onClick={() => router.push(link)}
          >
            { icon }
        
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}