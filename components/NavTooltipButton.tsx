// import React from 'react'
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
//   } from './ui/tooltip';
//   import { Button } from './ui/button';

// export default function NavTooltipButton({ icon, title }: {icon: React.ReactNode, title: string}) {
//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger>
//           <Button className="w-[2.6em] h-[2.6em] rounded-full bg-slate-50 hover:bg-slate-200 flex items-center justify-center">  
//             { icon }
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>{title}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   )
// }


"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipButtonProps {
  label: string;  // Tooltip text
  icon: React.ReactNode;  // Button text
  link: string;  // Navigation link
}

export default function NavTooltipButton({ label, icon, link }: TooltipButtonProps) {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="w-[2.6em] h-[2.6em] rounded-full bg-slate-50 hover:bg-slate-200 flex items-center justify-center"
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
