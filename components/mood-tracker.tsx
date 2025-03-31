"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function MoodTracker() {
  const [mood, setMood] = useState<number>(5)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleMoodChange = (value: number[]) => {
    setMood(value[0])
  }

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const getMoodLabel = (value: number) => {
    if (value <= 2) return "Challenging"
    if (value <= 4) return "Difficult"
    if (value <= 6) return "Neutral"
    if (value <= 8) return "Good"
    return "Excellent"
  }

  const getMoodColor = (value: number) => {
    if (value <= 2) return "from-red-500 to-red-600"
    if (value <= 4) return "from-orange-500 to-orange-600"
    if (value <= 6) return "from-yellow-500 to-yellow-600"
    if (value <= 8) return "from-green-500 to-green-600"
    return "from-emerald-500 to-emerald-600"
  }

  const getMoodTextColor = (value: number) => {
    if (value <= 2) return "text-red-500"
    if (value <= 4) return "text-orange-500"
    if (value <= 6) return "text-yellow-500"
    if (value <= 8) return "text-green-500"
    return "text-emerald-500"
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Today's Mood
        </h2>
        <div className="mt-4 space-y-4">
          <div className="text-center">
            <div className="inline-block rounded-full p-[3px] bg-gradient-to-br from-indigo-500 to-purple-600">
              <div className="bg-white dark:bg-gray-950 rounded-full p-1">
                <div
                  className={`rounded-full bg-gradient-to-br ${getMoodColor(mood)} h-16 w-16 flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-xl">{mood}</span>
                </div>
              </div>
            </div>
            <p className={`mt-2 font-semibold ${getMoodTextColor(mood)}`}>{getMoodLabel(mood)}</p>
          </div>

          <Slider defaultValue={[5]} max={10} step={1} onValueChange={handleMoodChange} className="my-4" />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Challenging</span>
            <span>Excellent</span>
          </div>

          <textarea
            className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm"
            placeholder="What's contributing to your mood today? (optional)"
            rows={3}
          />

          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            {showSuccess ? "Mood Tracked!" : "Track Mood"}
          </Button>
        </div>
      </div>
    </div>
  )
}

