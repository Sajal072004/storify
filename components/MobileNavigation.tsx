"use client"
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { set } from "zod";

const MobileNavigation = () => {
  const [open ,setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <div className="flex items-center gap-4">
      <Image
        src={"/logo1.png"}
        alt="logo"
        width={60}
        height={60}
        className="h-auto rounded-[30%]"
      />
      <h1 className="text-brand text-3xl font-semibold">Storify</h1>
      </div>
      

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image src={"/assets/icons/menu.svg"} alt="Search" width={30} height={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
