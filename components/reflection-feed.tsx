import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for reflections
const reflections = [
  {
    id: 1,
    author: "Alex Chen",
    avatar: "AC",
    experience: "Today I had a difficult conversation with a colleague about project deadlines and responsibilities.",
    reflection:
      "Initially, I felt defensive and frustrated, but after taking a step back, I realized they were offering valuable feedback. I'm learning to separate my ego from constructive criticism and see these moments as opportunities for growth rather than personal attacks.",
    timestamp: "2 hours ago",
    tags: ["work", "communication", "growth"],
  },
  {
    id: 2,
    author: "Sam Taylor",
    avatar: "ST",
    experience: "I've been meditating every morning for a month now.",
    reflection:
      "The biggest change I've noticed is how I respond to stress throughout the day. Instead of immediate reactions, I find myself pausing and choosing my response more deliberately. This small daily practice has created a noticeable shift in my emotional regulation and overall wellbeing.",
    timestamp: "5 hours ago",
    tags: ["mindfulness", "habits", "wellbeing"],
  },
  {
    id: 3,
    author: "Jordan Rivera",
    avatar: "JR",
    experience:
      "After years of avoiding confrontation, I finally expressed my boundaries to a friend who consistently shows up late.",
    reflection:
      "It was uncomfortable but necessary, and I'm proud of myself for communicating clearly without anger. I realized that setting boundaries isn't about controlling others but about honoring my own needs and time. The conversation went better than I expected, and I feel a sense of relief and empowerment.",
    timestamp: "Yesterday",
    tags: ["relationships", "boundaries", "communication"],
  },
]

export default function ReflectionFeed() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="for-you" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="for-you"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            For You
          </TabsTrigger>
          <TabsTrigger
            value="recent"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Recent
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Following
          </TabsTrigger>
        </TabsList>
        <TabsContent value="for-you" className="space-y-4 mt-4">
          {reflections.map((reflection) => (
            <ReflectionCard key={reflection.id} reflection={reflection} />
          ))}
        </TabsContent>
        <TabsContent value="recent">
          <div className="py-12 text-center text-muted-foreground">Recent reflections will appear here.</div>
        </TabsContent>
        <TabsContent value="following">
          <div className="py-12 text-center text-muted-foreground">
            Reflections from people you follow will appear here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ReflectionCard({ reflection }: { reflection: any }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-800">
            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              {reflection.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{reflection.author}</h3>
              <span className="text-sm text-muted-foreground">{reflection.timestamp}</span>
            </div>

            <div className="mt-3 space-y-4">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3 border-l-4 border-indigo-500">
                <h4 className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  Experience
                </h4>
                <p className="text-sm">{reflection.experience}</p>
              </div>

              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3 border-l-4 border-purple-500">
                <h4 className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                  Reflection
                </h4>
                <p className="text-sm">{reflection.reflection}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {reflection.tags.map((tag: string) => (
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
    </div>
  )
}

