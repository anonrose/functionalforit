import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search } from "lucide-react"

export default function DiscoverPage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
        Discover
      </h1>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search topics, people, or reflections..."
          className="pl-10 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <Tabs defaultValue="topics" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="topics"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Topics
          </TabsTrigger>
          <TabsTrigger
            value="people"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            People
          </TabsTrigger>
          <TabsTrigger
            value="circles"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Circles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Mindfulness",
                description: "Practices for staying present and aware",
                count: 1243,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Work-Life Balance",
                description: "Finding harmony between career and personal life",
                count: 856,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Personal Growth",
                description: "Journey of self-improvement and development",
                count: 1892,
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Relationships",
                description: "Navigating connections with others",
                count: 1567,
                gradient: "from-pink-500 to-rose-500",
              },
              {
                title: "Creativity",
                description: "Exploring artistic expression and innovation",
                count: 743,
                gradient: "from-amber-500 to-orange-500",
              },
              {
                title: "Mental Health",
                description: "Supporting psychological wellbeing",
                count: 1129,
                gradient: "from-emerald-500 to-green-500",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${topic.gradient}`}></div>
                <div className="p-4">
                  <h2 className="text-lg font-medium">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-muted-foreground">{topic.count} reflections</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="people" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Alex Chen",
                avatar: "AC",
                bio: "Mindfulness practitioner, software engineer, amateur photographer",
                topics: ["mindfulness", "technology", "creativity"],
              },
              {
                name: "Maya Johnson",
                avatar: "MJ",
                bio: "Psychologist exploring the intersection of emotions and behavior",
                topics: ["psychology", "emotions", "relationships"],
              },
              {
                name: "Sam Taylor",
                avatar: "ST",
                bio: "Writer and meditation teacher focused on daily practice",
                topics: ["meditation", "writing", "habits"],
              },
              {
                name: "Jordan Rivera",
                avatar: "JR",
                bio: "Life coach helping others navigate personal and professional growth",
                topics: ["growth", "coaching", "purpose"],
              },
            ].map((person, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all p-4"
              >
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 border-2 border-indigo-100 dark:border-gray-800">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      {person.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="font-medium">{person.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{person.bio}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {person.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="circles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Mindful Professionals",
                members: 28,
                description: "A circle for professionals practicing mindfulness in the workplace",
                topics: ["mindfulness", "work", "stress-management"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Creative Expression",
                members: 42,
                description: "Share reflections on your creative process and artistic journey",
                topics: ["creativity", "art", "expression"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Parenting Reflections",
                members: 35,
                description: "A supportive space for parents to reflect on their parenting journey",
                topics: ["parenting", "family", "growth"],
                gradient: "from-amber-500 to-orange-500",
              },
              {
                name: "Healing & Recovery",
                members: 19,
                description: "For those navigating personal healing and recovery processes",
                topics: ["healing", "mental-health", "support"],
                gradient: "from-emerald-500 to-green-500",
              },
            ].map((circle, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${circle.gradient}`}></div>
                <div className="p-4">
                  <h2 className="text-lg font-medium">{circle.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{circle.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {circle.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-muted-foreground">{circle.members} members</span>
                    <Button
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all"
                      size="sm"
                    >
                      Join Circle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

