"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function JournalEntryPage({ params }: { params: { id: string } }) {
  // This would normally fetch the entry from an API
  // For demo purposes, we'll use mock data
  const entryId = Number.parseInt(params.id)

  const [entry] = useState(() => {
    // Mock data - in a real app, this would be fetched from an API
    const entries = [
      {
        id: 1,
        title: "Finding balance in work and personal life",
        type: "structured",
        experience:
          "Today I had back-to-back meetings and barely had time for lunch. I noticed I was getting irritable by the end of the day, and I snapped at my partner when I got home. This isn't the first time this has happened after a particularly busy workday.",
        reflection:
          "I'm realizing I need to be more intentional about blocking time for myself during the workday. Even just 15 minutes between meetings to decompress could make a big difference. I also need to create a better transition ritual between work and home life - maybe a short walk or a few minutes of meditation. My partner deserves better than to bear the brunt of my work stress.",
        date: "March 28, 2025",
        tags: ["work-life balance", "relationships"],
        mood: 7,
      },
      {
        id: 2,
        title: "Reflecting on my communication patterns",
        type: "structured",
        experience:
          "Had a difficult conversation with my partner about household responsibilities. They brought up that they feel they're doing more than their fair share, which immediately made me defensive. I listed all the things I do that often go unnoticed, and the conversation became tense.",
        reflection:
          "I noticed I got defensive quickly. Need to work on listening first before responding. Looking back, I can see that my partner was just expressing a feeling, not attacking me. I tend to jump to self-defense instead of trying to understand their perspective first. Next time, I'll try to take a breath and ask questions before explaining my side.",
        date: "March 25, 2025",
        tags: ["communication", "relationships"],
        mood: 5,
      },
      {
        id: 3,
        title: "Gratitude practice",
        type: "freeform",
        content:
          "Three things I'm grateful for today:\n\n1. The supportive message from my friend when I was feeling down\n\n2. The peaceful morning walk where I noticed the first spring flowers\n\n3. The delicious dinner I cooked - I'm getting better at trying new recipes!\n\nI'm noticing that taking time to appreciate small things is improving my overall mood. Even on difficult days, I can find moments of joy if I look for them. This practice is becoming a helpful anchor in my daily routine.",
        date: "March 20, 2025",
        tags: ["gratitude", "mindfulness"],
        mood: 9,
      },
      {
        id: 4,
        title: "Stream of consciousness",
        type: "freeform",
        content:
          "Just writing whatever comes to mind today. Work has been stressful but I'm managing. The project deadline got moved up and everyone's feeling the pressure. I'm trying to stay focused and take things one task at a time.\n\nThe weather is finally improving and I'm looking forward to spending more time outside. Maybe I'll start having my morning coffee on the balcony again.\n\nI should call my parents this weekend. It's been a couple of weeks and I miss them. Maybe we can plan that summer visit we've been talking about.",
        date: "March 18, 2025",
        tags: ["thoughts", "processing"],
        mood: 6,
      },
    ]

    return entries.find((e) => e.id === entryId) || entries[0]
  })

  const getMoodLabel = (value: number) => {
    if (value <= 2) return "Challenging"
    if (value <= 4) return "Difficult"
    if (value <= 6) return "Neutral"
    if (value <= 8) return "Good"
    return "Excellent"
  }

  const getMoodColor = (value: number) => {
    if (value <= 2) return "bg-red-500"
    if (value <= 4) return "bg-orange-500"
    if (value <= 6) return "bg-yellow-500"
    if (value <= 8) return "bg-green-500"
    return "bg-emerald-500"
  }

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" asChild>
            <Link href="/journal">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Journal
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{entry.title}</h1>
            <div className="flex items-center gap-2">
              <div className={`h-4 w-4 rounded-full ${getMoodColor(entry.mood)}`}></div>
              <span className="text-sm">{getMoodLabel(entry.mood)}</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-6">
            {entry.date} • {entry.type === "structured" ? "Structured Reflection" : "Free-form Journal"}
          </div>

          {entry.type === "structured" ? (
            <div className="space-y-6">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border-l-4 border-indigo-500">
                <h2 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                  Experience
                </h2>
                <p className="whitespace-pre-line">{entry.experience}</p>
              </div>

              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border-l-4 border-purple-500">
                <h2 className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                  Reflection
                </h2>
                <p className="whitespace-pre-line">{entry.reflection}</p>
              </div>
            </div>
          ) : (
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4">
              <p className="whitespace-pre-line">{entry.content}</p>
            </div>
          )}

          <div className="mt-6 pt-4 border-t dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

