"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { ReactNode, useState } from "react";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex">
        <span className="font-bold hidden sm:inline-block">Blog App</span>
      </Link>
      <nav className="md:flex gap-6 hidden items-center space-x-2">
        {items?.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-lg sm:text-am font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
