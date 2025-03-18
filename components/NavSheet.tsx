"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function NavSheet() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Button to open the sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>  
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4">
            {["Notifications", "Wishlist", "Chat", "Sell Now", "My Account"].map((item) => (
              <Button key={item} variant="ghost" className="w-full text-left" onClick={handleClose}>
                {item}
              </Button>
            ))}
          </div>

          {/* Footer - Log Out Button */}
          <SheetFooter className="absolute bottom-4 left-0 w-full flex justify-center">
            <Button variant="destructive" className="w-3/4" onClick={handleClose}>
              Log Out
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
