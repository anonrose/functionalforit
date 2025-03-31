"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BookOpen, Users, BarChart2, Compass, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const routes = [
  {
    name: "Feed",
    path: "/feed",
    icon: Home,
  },
  {
    name: "Journal",
    path: "/journal",
    icon: BookOpen,
  },
  {
    name: "Circles",
    path: "/circles",
    icon: Users,
  },
  {
    name: "Guided",
    path: "/guided-reflections",
    icon: MessageSquare,
  },
  {
    name: "Discover",
    path: "/discover",
    icon: Compass,
  },
  {
    name: "Insights",
    path: "/insights",
    icon: BarChart2,
  },
  {
    name: "Mood",
    path: "/mood-history",
    icon: Calendar,
  },
]

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {routes.map((route) => {
        const isActive = pathname === route.path || pathname.startsWith(`${route.path}/`)
        const Icon = route.icon

        return (
          <Button
            key={route.path}
            variant="ghost"
            size="sm"
            asChild
            className={cn("gap-1 text-muted-foreground", isActive && "bg-muted text-foreground font-medium")}
          >
            <Link href={route.path}>
              <Icon className="h-4 w-4" />
              <span>{route.name}</span>
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

export function MobileNavigation() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-40">
      <div className="flex items-center justify-around h-16">
        {routes.slice(0, 5).map((route) => {
          const isActive = pathname === route.path || pathname.startsWith(`${route.path}/`)
          const Icon = route.icon

          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xs gap-1",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{route.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

