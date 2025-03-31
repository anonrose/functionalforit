import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Settings } from "lucide-react"

export default function NotificationsPage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-indigo-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Notifications
          </h1>
        </div>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="all"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="mentions"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Mentions
          </TabsTrigger>
          <TabsTrigger
            value="circles"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Circles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-2">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-4">
              <h2 className="text-sm font-medium text-muted-foreground mb-2">Today</h2>
              <div className="space-y-4">
                <NotificationItem
                  avatar="AC"
                  content={
                    <>
                      <span className="font-medium">Alex Chen</span> shared a new reflection on mindfulness in the
                      workplace
                    </>
                  }
                  time="2 hours ago"
                  isNew={true}
                />
                <NotificationItem
                  avatar="MJ"
                  content={
                    <>
                      <span className="font-medium">Mindful Professionals</span> circle has 3 new reflections since your
                      last visit
                    </>
                  }
                  time="4 hours ago"
                  isNew={true}
                />
                <NotificationItem
                  system={true}
                  content={<>Your reflection streak is now at 7 days! Keep it up!</>}
                  time="8 hours ago"
                  isNew={false}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-4">
              <h2 className="text-sm font-medium text-muted-foreground mb-2">Yesterday</h2>
              <div className="space-y-4">
                <NotificationItem
                  avatar="JR"
                  content={
                    <>
                      <span className="font-medium">Jordan Rivera</span> mentioned you in a reflection about team
                      collaboration
                    </>
                  }
                  time="1 day ago"
                  isNew={false}
                />
                <NotificationItem
                  system={true}
                  content={
                    <>
                      New guided reflection template <span className="font-medium">"Finding Work-Life Balance"</span> is
                      now available
                    </>
                  }
                  time="1 day ago"
                  isNew={false}
                />
                <NotificationItem
                  avatar="ST"
                  content={
                    <>
                      <span className="font-medium">Sam Taylor</span> invited you to join the{" "}
                      <span className="font-medium">Creative Expression</span> circle
                    </>
                  }
                  time="1 day ago"
                  isNew={false}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-4">
              <h2 className="text-sm font-medium text-muted-foreground mb-2">This Week</h2>
              <div className="space-y-4">
                <NotificationItem
                  system={true}
                  content={
                    <>Your weekly reflection digest is ready. View insights from your past week's reflections.</>
                  }
                  time="2 days ago"
                  isNew={false}
                />
                <NotificationItem
                  system={true}
                  content={
                    <>
                      Based on your reflections, we've suggested some resources on{" "}
                      <span className="font-medium">mindfulness practices</span>
                    </>
                  }
                  time="3 days ago"
                  isNew={false}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mentions" className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-4">
              <div className="space-y-4">
                <NotificationItem
                  avatar="JR"
                  content={
                    <>
                      <span className="font-medium">Jordan Rivera</span> mentioned you in a reflection about team
                      collaboration
                    </>
                  }
                  time="1 day ago"
                  isNew={false}
                />
                <NotificationItem
                  avatar="MK"
                  content={
                    <>
                      <span className="font-medium">Morgan Kim</span> mentioned you in their reflection on group
                      meditation experiences
                    </>
                  }
                  time="5 days ago"
                  isNew={false}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="circles" className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-4">
              <div className="space-y-4">
                <NotificationItem
                  avatar="MJ"
                  content={
                    <>
                      <span className="font-medium">Mindful Professionals</span> circle has 3 new reflections since your
                      last visit
                    </>
                  }
                  time="4 hours ago"
                  isNew={true}
                />
                <NotificationItem
                  avatar="ST"
                  content={
                    <>
                      <span className="font-medium">Sam Taylor</span> invited you to join the{" "}
                      <span className="font-medium">Creative Expression</span> circle
                    </>
                  }
                  time="1 day ago"
                  isNew={false}
                />
                <NotificationItem
                  avatar="CE"
                  content={
                    <>
                      <span className="font-medium">Creative Expression</span> circle has a new weekly prompt:{" "}
                      <span className="font-medium">"Overcoming Creative Blocks"</span>
                    </>
                  }
                  time="4 days ago"
                  isNew={false}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

function NotificationItem({
  avatar,
  content,
  time,
  isNew,
  system = false,
}: {
  avatar?: string
  content: React.ReactNode
  time: string
  isNew: boolean
  system?: boolean
}) {
  return (
    <div className={`flex gap-3 p-2 rounded-lg ${isNew ? "bg-indigo-50 dark:bg-indigo-900/20" : ""}`}>
      {system ? (
        <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
          <Bell className="h-5 w-5 text-indigo-500" />
        </div>
      ) : (
        <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-800 flex-shrink-0">
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            {avatar}
          </AvatarFallback>
        </Avatar>
      )}
      <div className="flex-1">
        <p className="text-sm">{content}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
      {isNew && <div className="h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2"></div>}
    </div>
  )
}

