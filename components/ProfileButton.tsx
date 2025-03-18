"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LuUserRound } from 'react-icons/lu';
import { MdLogout } from "react-icons/md";

export default function ProfileButton() {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              {/* Hide Tooltip when button is clicked */}
              <Button
                className="w-[2.6em] h-[2.6em] rounded-full bg-slate-50 hover:bg-slate-200 flex items-center justify-center"
                onClick={() => setOpen((prev) => !prev)}
                onMouseEnter={() => setOpen(false)} // Ensures dropdown closes tooltip
              >
                <LuUserRound className="text-primary" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          {!open && ( // Prevent tooltip from showing when dropdown is open
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          )}
        </Tooltip>

        <DropdownMenuContent align="center" side="bottom">
          <DropdownMenuItem className="cursor-pointer" onSelect={() => alert("Option 1 clicked")}>
            <LuUserRound className="text-primary" />
            <p>My Account</p>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert("Option 2 clicked")}>
            <MdLogout />
            <p>Log Out</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}