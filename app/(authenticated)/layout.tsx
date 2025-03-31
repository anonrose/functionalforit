import type React from "react"
import { MainNavigation, MobileNavigation } from "@/components/main-navigation"
import { UserNav } from "@/components/user-nav"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 pb-16 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-sm bg-background/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text">
                    🙇
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                FunctionalForIt
              </span>
            </div>
            <MainNavigation />
          </div>
          <UserNav />
        </div>
      </header>

      {children}

      <MobileNavigation />
    </div>
  )
}

