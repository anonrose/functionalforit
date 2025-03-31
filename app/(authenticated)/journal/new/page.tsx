"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewJournalEntryPage() {
  const [mood, setMood] = useState<number>(5)
  const [tags, setTags] = useState<string>("")
  const [currentTag, setCurrentTag] = useState<string>("")
  const [tagsList, setTagsList] = useState<string[]>([])

  const handleMoodChange = (value: number[]) => {
    setMood(value[0])
  }

  const handleAddTag = () => {
    if (currentTag.trim() && !tagsList.includes(currentTag.trim())) {
      setTagsList([...tagsList, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTagsList(tagsList.filter((tag) => tag !== tagToRemove))
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

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-2" asChild>
          <Link href="/journal">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          New Journal Entry
        </h1>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
        <div className="p-6">
          <Tabs defaultValue="freeform" className="w-full">
            <TabsList className="w-full mb-6 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
              <TabsTrigger
                value="freeform"
                className="flex-1 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
              >
                Free-form Journal
              </TabsTrigger>
              <TabsTrigger
                value="structured"
                className="flex-1 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
              >
                Structured Reflection
              </TabsTrigger>
            </TabsList>

            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Give your entry a title"
                  className="mt-1 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <Label>Today's Mood</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div
                    className={`rounded-full bg-gradient-to-br ${getMoodColor(mood)} h-10 w-10 flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold">{mood}</span>
                  </div>
                  <div className="flex-1">
                    <Slider defaultValue={[5]} max={10} step={1} onValueChange={handleMoodChange} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Challenging</span>
                      <span>{getMoodLabel(mood)}</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TabsContent value="freeform">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="content">Journal Entry</Label>
                  <textarea
                    id="content"
                    placeholder="Write freely about your thoughts, feelings, and experiences..."
                    className="w-full p-3 border rounded-lg mt-1 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[200px]"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="structured">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="experience">Experience</Label>
                  <textarea
                    id="experience"
                    placeholder="What experience would you like to reflect on?"
                    className="w-full p-3 border rounded-lg mt-1 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="reflection">Reflection</Label>
                  <textarea
                    id="reflection"
                    placeholder="How did this experience make you feel? What did you learn from it?"
                    className="w-full p-3 border rounded-lg mt-1 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[150px]"
                  />
                </div>
              </div>
            </TabsContent>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="tags">Tags</Label>
                <div className="flex mt-1">
                  <Input
                    id="tags"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add tags (press Enter)"
                    className="rounded-r-none bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Button
                    onClick={handleAddTag}
                    className="rounded-l-none bg-gradient-to-r from-indigo-500 to-purple-600"
                  >
                    Add
                  </Button>
                </div>
                {tagsList.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tagsList.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        #{tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                  asChild
                >
                  <Link href="/journal">Cancel</Link>
                </Button>
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                  Save Entry
                </Button>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

