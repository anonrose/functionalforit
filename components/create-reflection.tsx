"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function CreateReflection() {
  const [experience, setExperience] = useState("")
  const [reflection, setReflection] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFocus = () => {
    setIsExpanded(true)
  }

  const handleCancel = () => {
    setIsExpanded(false)
    setExperience("")
    setReflection("")
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 transition-all">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-800">
            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <div className="text-sm text-muted-foreground mb-2">
              Share a reflection with the community. All reflections include both an experience and your thoughts about
              it.
            </div>
            <div
              className={`transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-70"}`}
              onClick={handleFocus}
            >
              <div className="relative">
                <textarea
                  placeholder="What experience would you like to reflect on?"
                  className="w-full p-3 pr-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  rows={isExpanded ? 3 : 2}
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  onFocus={handleFocus}
                />
                <div className="absolute top-3 right-3">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    E
                  </div>
                </div>
              </div>
            </div>

            {isExpanded && (
              <>
                <div className="space-y-4">
                  <div className="flex items-center w-full gap-3 py-1">
                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">🙇</span>
                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
                  </div>
                </div>
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="relative">
                    <textarea
                      placeholder="How did this experience make you feel? What did you learn?"
                      className="w-full p-3 pr-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      rows={4}
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                    />
                    <div className="absolute top-3 right-3">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                      Share Public Reflection
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

