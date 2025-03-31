import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JournalPage() {
  // Sample journal entries
  const journalEntries = [
    {
      id: 1,
      title: "Finding balance in work and personal life",
      type: "structured",
      experience: "Today I had back-to-back meetings and barely had time for lunch.",
      reflection: "I'm realizing I need to be more intentional about blocking time for myself.",
      preview: "Today I had back-to-back meetings and barely had time for lunch...",
      date: "March 28, 2025",
      tags: ["work-life balance", "relationships"],
      mood: 7,
    },
    {
      id: 2,
      title: "Reflecting on my communication patterns",
      type: "structured",
      experience: "Had a difficult conversation with my partner about household responsibilities.",
      reflection: "I noticed I got defensive quickly. Need to work on listening first.",
      preview:
        "After that difficult conversation with my partner yesterday, I've been thinking about how I express my needs...",
      date: "March 25, 2025",
      tags: ["communication", "relationships"],
      mood: 5,
    },
    {
      id: 3,
      title: "Gratitude practice",
      type: "freeform",
      content:
        "Three things I'm grateful for today: 1. The supportive message from my friend 2. The peaceful morning walk 3. The delicious dinner I cooked. I'm noticing that taking time to appreciate small things is improving my overall mood.",
      preview:
        "Three things I'm grateful for today: 1. The supportive message from my friend 2. The peaceful morning walk 3...",
      date: "March 20, 2025",
      tags: ["gratitude", "mindfulness"],
      mood: 9,
    },
    {
      id: 4,
      title: "Stream of consciousness",
      type: "freeform",
      content:
        "Just writing whatever comes to mind today. Work has been stressful but I'm managing. The weather is finally improving and I'm looking forward to spending more time outside. I should call my parents this weekend.",
      preview: "Just writing whatever comes to mind today. Work has been stressful but I'm managing...",
      date: "March 18, 2025",
      tags: ["thoughts", "processing"],
      mood: 6,
    },
  ]

  const getMoodColor = (value: number) => {
    if (value <= 2) return "bg-red-500"
    if (value <= 4) return "bg-orange-500"
    if (value <= 6) return "bg-yellow-500"
    if (value <= 8) return "bg-green-500"
    return "bg-emerald-500"
  }

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Private Journal
        </h1>
        <div className="flex items-center gap-2">
          <Button
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link href="/journal/new">
              <PlusIcon className="h-4 w-4 mr-2" />
              New Entry
            </Link>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px] bg-white dark:bg-gray-950">
              <SelectValue placeholder="Entry Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entries</SelectItem>
              <SelectItem value="structured">Structured</SelectItem>
              <SelectItem value="freeform">Free-form</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="entries" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="entries"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            All Entries
          </TabsTrigger>
          <TabsTrigger
            value="templates"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Journal Templates
          </TabsTrigger>
          <TabsTrigger
            value="tags"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Tags
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entries" className="space-y-4 mt-4">
          {journalEntries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all p-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium">{entry.title}</h2>
                    <div
                      className={`h-3 w-3 rounded-full ${getMoodColor(entry.mood)}`}
                      title={`Mood: ${entry.mood}/10`}
                    ></div>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {entry.type === "structured" ? "Structured" : "Free-form"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{entry.date}</p>

                  {entry.type === "structured" ? (
                    <div className="mt-3 space-y-2">
                      <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Experience</div>
                      <p className="text-sm line-clamp-1">{entry.experience}</p>
                      <div className="text-xs font-medium text-purple-600 dark:text-purple-400">Reflection</div>
                      <p className="text-sm line-clamp-1">{entry.reflection}</p>
                    </div>
                  ) : (
                    <p className="mt-2 text-sm line-clamp-2">{entry.content}</p>
                  )}

                  <div className="flex gap-2 mt-3">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800"
                  asChild
                >
                  <Link href={`/journal/${entry.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: 1,
                title: "Daily Reflection",
                description: "End-of-day reflection on emotions, challenges, and victories",
                gradient: "from-indigo-500 to-blue-600",
              },
              {
                id: 2,
                title: "Gratitude Journal",
                description: "Focus on things you're thankful for",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                id: 3,
                title: "Problem Solving",
                description: "Work through a challenge methodically",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                id: 4,
                title: "Future Self",
                description: "Write a letter to your future self",
                gradient: "from-emerald-500 to-green-600",
              },
            ].map((template) => (
              <div
                key={template.id}
                className="rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
              >
                <div className={`h-1.5 bg-gradient-to-r ${template.gradient}`}></div>
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="font-medium">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{template.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  >
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tags" className="mt-4">
          <div className="flex flex-wrap gap-3">
            {[
              "work-life balance",
              "relationships",
              "communication",
              "gratitude",
              "mindfulness",
              "goals",
              "challenges",
              "growth",
              "health",
              "creativity",
            ].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
              >
                #{tag} <span className="ml-2 text-muted-foreground">{Math.floor(Math.random() * 5) + 1}</span>
              </Button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

