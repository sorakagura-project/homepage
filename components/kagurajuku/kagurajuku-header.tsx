"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"

const navLinks = [
  { href: "/kagurajuku", text: "トップ" },
  { href: "/kagurajuku/about", text: "神楽塾とは" },
  { href: "/kagurajuku/features", text: "学びの特徴" },
  { href: "/kagurajuku/program", text: "プログラム" },
  { href: "/kagurajuku/environment", text: "学習環境" },
  { href: "/kagurajuku/join", text: "参加方法" },
  { href: "/kagurajuku/contact", text: "お問い合わせ" },
];

export function KagurajukuHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/kagurajuku" className="flex items-center space-x-2 flex-shrink-0">
            <span className="inline-block font-bold text-lg sm:text-xl whitespace-nowrap">神楽塾</span>
          </Link>
        </motion.div>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
