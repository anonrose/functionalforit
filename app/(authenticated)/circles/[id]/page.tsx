import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Users, Info, MessageSquare, Share2, MoreHorizontal, Heart, PlusCircle, Bell, BellOff } from "lucide-react"

// Mock data for the circle
const circleData = {
  id: 1,
  name: "Mindful Professionals",
  description: "A circle for professionals practicing mindfulness in the workplace",
  longDescription:
    "This circle is dedicated to professionals who want to incorporate mindfulness practices into their work life. We share experiences, techniques, and support each other in maintaining presence and balance in high-pressure environments.",
  members: 28,
  topics: ["mindfulness", "work", "stress-management", "productivity", "work-life-balance"],
  gradient: "from-blue-500 to-cyan-500",
  isJoined: true,
  isNotificationsEnabled: true,
  rules: [
    "Be respectful and supportive of all members",
    "Share personal experiences rather than giving unsolicited advice",
    "Keep discussions focused on mindfulness in professional contexts",
    "Respect confidentiality - what's shared here stays here",
    "No promotion of products or services without admin approval",
  ],
  posts: [
    {
      id: 1,
      author: {
        name: "Jamie Chen",
        avatar: null,
        initials: "JC",
      },
      timePosted: "2 hours ago",
      experience:
        "Today I had back-to-back meetings for 6 hours straight. I noticed my attention waning and irritability rising as the day progressed.",
      reflection:
        "I realized I hadn't built in any breaks for myself. Even 2-minute mindfulness breaks between meetings could have helped maintain my focus and emotional balance. Tomorrow I'm blocking 5-minute buffers between all meetings to reset.",
      likes: 12,
      replies: 3,
      topics: ["meetings", "attention", "boundaries"],
    },
    {
      id: 2,
      author: {
        name: "Taylor Morgan",
        avatar: null,
        initials: "TM",
      },
      timePosted: "Yesterday",
      experience:
        "My team received some difficult feedback on a project we've been working on for months. Initially, I felt defensive and disappointed.",
      reflection:
        "Instead of reacting immediately, I took a mindful pause and observed my emotions without judgment. This allowed me to respond constructively in our debrief meeting, focusing on growth opportunities rather than perceived failures.",
      likes: 24,
      replies: 7,
      topics: ["feedback", "emotions", "growth-mindset"],
    },
    {
      id: 3,
      author: {
        name: "Alex Rivera",
        avatar: null,
        initials: "AR",
      },
      timePosted: "3 days ago",
      experience: "I've been experimenting with a 10-minute meditation at my desk before starting work each morning.",
      reflection:
        "After two weeks, I've noticed I'm less reactive to emails and more intentional about prioritizing my tasks. The initial investment of time is paying off in improved focus and decision-making throughout the day.",
      likes: 18,
      replies: 5,
      topics: ["meditation", "morning-routine", "focus"],
    },
  ],
  members: [
    { name: "Jamie Chen", role: "Admin", joinedDate: "6 months ago", avatar: null, initials: "JC" },
    { name: "Taylor Morgan", role: "Moderator", joinedDate: "5 months ago", avatar: null, initials: "TM" },
    { name: "Alex Rivera", role: "Member", joinedDate: "4 months ago", avatar: null, initials: "AR" },
    { name: "Jordan Smith", role: "Member", joinedDate: "3 months ago", avatar: null, initials: "JS" },
    { name: "Casey Johnson", role: "Member", joinedDate: "2 months ago", avatar: null, initials: "CJ" },
    { name: "Riley Williams", role: "Member", joinedDate: "1 month ago", avatar: null, initials: "RW" },
    { name: "Quinn Brown", role: "Member", joinedDate: "3 weeks ago", avatar: null, initials: "QB" },
    { name: "Morgan Lee", role: "Member", joinedDate: "2 weeks ago", avatar: null, initials: "ML" },
  ],
}

export default function CirclePage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the circle data based on the ID
  const circle = circleData

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      {/* Circle Header */}
      <div className="mb-6">
        <div className={`h-2 bg-gradient-to-r ${circle.gradient} rounded-t-md`}></div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-b-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{circle.name}</h1>
              <p className="text-muted-foreground mt-1">{circle.description}</p>

              <div className="flex flex-wrap gap-1 mt-3">
                {circle.topics.map((topic) => (
                  <Badge key={topic} variant="outline" className="bg-gray-50 dark:bg-gray-900">
                    #{topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              {circle.isJoined ? (
                <>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    {circle.isNotificationsEnabled ? (
                      <>
                        <BellOff className="h-4 w-4" />
                        <span>Mute</span>
                      </>
                    ) : (
                      <>
                        <Bell className="h-4 w-4" />
                        <span>Unmute</span>
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
                  >
                    Leave Circle
                  </Button>
                </>
              ) : (
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all">
                  Join Circle
                </Button>
              )}
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <div className="flex -space-x-2 mr-2">
              {circle.members.slice(0, 5).map((member, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white dark:border-gray-950">
                  {member.avatar ? (
                    <AvatarImage src={member.avatar} alt={member.name} />
                  ) : (
                    <AvatarFallback className="text-xs bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      {member.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              ))}
              {circle.members.length > 5 && (
                <Avatar className="h-6 w-6 border-2 border-white dark:border-gray-950">
                  <AvatarFallback className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    +{circle.members.length - 5}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
            <span className="text-sm text-muted-foreground">{circle.members.length} members</span>
          </div>
        </div>
      </div>

      {/* Circle Content Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="posts"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="members"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            <Users className="h-4 w-4 mr-2" />
            Members
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            <Info className="h-4 w-4 mr-2" />
            About
          </TabsTrigger>
        </TabsList>

        {/* Posts Tab */}
        <TabsContent value="posts" className="mt-6">
          {/* Create Post */}
          {circle.isJoined && (
            <Card className="mb-6">
              <CardContent className="p-4">
                <Textarea
                  placeholder="Share your experience and reflection with the circle..."
                  className="resize-none mb-3 focus-visible:ring-indigo-500"
                />
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Share mindfully with {circle.members.length} members
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                    Create Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts List */}
          <div className="space-y-6">
            {circle.posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        {post.author.avatar ? (
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        ) : (
                          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                            {post.author.initials}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <div className="font-medium">{post.author.name}</div>
                        <div className="text-xs text-muted-foreground">{post.timePosted}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Experience</h3>
                      <p>{post.experience}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Reflection</h3>
                      <p>{post.reflection}</p>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="border-t dark:border-gray-800 px-4 py-2 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.replies}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members" className="mt-6">
          <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Members ({circle.members.length})</h2>
              {circle.isJoined && (
                <Button variant="outline" size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Invite
                </Button>
              )}
            </div>

            <div className="divide-y dark:divide-gray-800">
              {circle.members.map((member, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {member.avatar ? (
                        <AvatarImage src={member.avatar} alt={member.name} />
                      ) : (
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                          {member.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span
                          className={`
                          px-1.5 py-0.5 rounded text-xs 
                          ${
                            member.role === "Admin"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              : member.role === "Moderator"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          }
                        `}
                        >
                          {member.role}
                        </span>
                        <span>Joined {member.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* About Tab */}
        <TabsContent value="about" className="mt-6">
          <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-3">About this Circle</h2>
            <p className="mb-6">{circle.longDescription}</p>

            <h3 className="text-md font-medium mb-2">Circle Rules</h3>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              {circle.rules.map((rule, i) => (
                <li key={i} className="text-sm">
                  {rule}
                </li>
              ))}
            </ul>

            <h3 className="text-md font-medium mb-2">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {circle.topics.map((topic) => (
                <Badge key={topic} variant="outline" className="bg-gray-50 dark:bg-gray-900">
                  #{topic}
                </Badge>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Circle Admins and Moderators</h3>
                  <p className="text-sm text-muted-foreground">Contact with any questions or concerns</p>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>

              <div className="mt-4 space-y-3">
                {circle.members
                  .filter((member) => member.role === "Admin" || member.role === "Moderator")
                  .map((member, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        {member.avatar ? (
                          <AvatarImage src={member.avatar} alt={member.name} />
                        ) : (
                          <AvatarFallback className="text-sm bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                            {member.initials}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

