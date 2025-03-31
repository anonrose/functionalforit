import type React from "react"

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-b from-background to-background/80">{children}</div>
}

