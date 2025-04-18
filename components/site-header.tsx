"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Youtube, MessageSquare, MessageCircle, Eye, BookOpen, Wrench, Plane } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'
import React from 'react'

const enjoyLinks = [
  {
    title: "実演鑑賞",
    href: "/enjoy/watch",
    description: "光の物語を体験する",
    icon: Eye
  },
  {
    title: "学ぶ",
    href: "/enjoy/learn",
    description: "知識と技術を習得する",
    icon: BookOpen
  },
  {
    title: "作る",
    href: "/enjoy/create",
    description: "創造の喜びを分かち合う",
    icon: Wrench
  },
  {
    title: "旅をする",
    href: "/enjoy/travel",
    description: "各地の文化と出会う",
    icon: Plane
  }
]

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  titleContent: React.ReactNode;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, titleContent, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{titleContent}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <span className="inline-block font-bold text-lg sm:text-xl whitespace-nowrap">空神楽</span>
          </Link>
        </motion.div>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center space-x-4">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-primary">
                    Enjoy
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {enjoyLinks.map((link) => (
                        <ListItem
                          key={link.title}
                          titleContent={
                            <div className="flex items-center gap-2">
                              <link.icon className="h-4 w-4" />
                              <span>{link.title}</span>
                            </div>
                          }
                          href={link.href}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/tool" className="text-sm font-medium transition-colors hover:text-primary">
              Tool
            </Link>
            <Link href="/join" className="text-sm font-medium transition-colors hover:text-primary">
              Join
            </Link>
            <Link href="/collab" className="text-sm font-medium transition-colors hover:text-primary">
              Collab
            </Link>
          </nav>
          <div className="flex items-center space-x-3 border-l pl-6">
            <a
              href="https://instagram.com/sorakagura_project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjLozgVf2zJ3iyyaRVUnA8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            
          </div>
        </div>
      </div>
    </header>
  )
}