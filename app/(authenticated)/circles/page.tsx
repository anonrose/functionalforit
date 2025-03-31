import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Users } from "lucide-react"
import Link from "next/link"

export default function CirclesPage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-indigo-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Circles
          </h1>
        </div>
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
          <PlusCircle className="h-4 w-4 mr-2" />
          Create Circle
        </Button>
      </div>

      <Tabs defaultValue="my-circles" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="my-circles"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            My Circles
          </TabsTrigger>
          <TabsTrigger
            value="discover"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Discover
          </TabsTrigger>
          <TabsTrigger
            value="invites"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Invites
            <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full px-2 py-0.5">
              2
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-circles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Mindful Professionals",
                members: 28,
                description: "A circle for professionals practicing mindfulness in the workplace",
                topics: ["mindfulness", "work", "stress-management"],
                gradient: "from-blue-500 to-cyan-500",
                lastActive: "2 hours ago",
                newPosts: 3,
              },
              {
                name: "Creative Expression",
                members: 42,
                description: "Share reflections on your creative process and artistic journey",
                topics: ["creativity", "art", "expression"],
                gradient: "from-purple-500 to-pink-500",
                lastActive: "Yesterday",
                newPosts: 0,
              },
              {
                name: "Healing & Recovery",
                members: 19,
                description: "For those navigating personal healing and recovery processes",
                topics: ["healing", "mental-health", "support"],
                gradient: "from-emerald-500 to-green-500",
                lastActive: "3 days ago",
                newPosts: 0,
              },
            ].map((circle, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${circle.gradient}`}></div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-medium">{circle.name}</h2>
                    {circle.newPosts > 0 && (
                      <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full px-2 py-0.5">
                        {circle.newPosts} new
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{circle.description}</p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {circle.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0\.5 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <Avatar key={i} className="h-6 w-6 border-2 border-white dark:border-gray-950">
                            <AvatarFallback className="text-xs bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                              {String.fromCharCode(65 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">
                        {circle.members} members • Active {circle.lastActive}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                      asChild
                    >
                      <Link href={`/circles/${i + 1}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discover" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Parenting Reflections",
                members: 35,
                description: "A supportive space for parents to reflect on their parenting journey",
                topics: ["parenting", "family", "growth"],
                gradient: "from-amber-500 to-orange-500",
              },
              {
                name: "Nature Connection",
                members: 47,
                description: "Exploring our relationship with the natural world",
                topics: ["nature", "environment", "mindfulness"],
                gradient: "from-green-500 to-emerald-500",
              },
              {
                name: "Career Transitions",
                members: 29,
                description: "Support for those navigating career changes and professional growth",
                topics: ["career", "change", "growth"],
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                name: "Mindful Reading",
                members: 23,
                description: "Reflections on books and mindful reading practices",
                topics: ["reading", "books", "learning"],
                gradient: "from-purple-500 to-indigo-500",
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

                  <div className="mt-4 flex items-center justify-between">
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

        <TabsContent value="invites" className="mt-6">
          <div className="space-y-4">
            {[
              {
                name: "Creative Expression",
                inviter: "Sam Taylor",
                inviterAvatar: "ST",
                description: "Share reflections on your creative process and artistic journey",
                members: 42,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Mindful Reading",
                inviter: "Alex Chen",
                inviterAvatar: "AC",
                description: "Reflections on books and mindful reading practices",
                members: 23,
                gradient: "from-blue-500 to-indigo-500",
              },
            ].map((invite, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800"
              >
                <div className={`h-2 bg-gradient-to-r ${invite.gradient}`}></div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-800">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        {invite.inviterAvatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{invite.inviter}</span> invited you to join{" "}
                        <span className="font-medium">{invite.name}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{invite.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{invite.members} members</p>
                      <div className="mt-3 flex gap-2">
                        <Button
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all"
                          size="sm"
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
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

