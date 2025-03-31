import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RecommendedTopics() {
  const topics = [
    {
      id: 1,
      title: "Practicing Self-Compassion",
      description: "Based on your recent reflections on self-criticism",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: 2,
      title: "Mindful Communication",
      description: "Recommended for your interest in workplace relationships",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Building Resilience",
      description: "Personalized for your growth journey",
      gradient: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Recommended for You
        </h2>
        <div className="mt-4 space-y-3">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
            >
              <div className={`h-1.5 bg-gradient-to-r ${topic.gradient}`}></div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-medium text-sm">{topic.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-2">{topic.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  asChild
                >
                  <Link href={`/topic/${topic.id}`}>Explore</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

