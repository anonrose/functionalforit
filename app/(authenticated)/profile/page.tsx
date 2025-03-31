import type React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="px-6 pb-6">
              <div className="flex flex-col items-center text-center -mt-12">
                <div className="rounded-full p-1 bg-white dark:bg-gray-950 shadow-md">
                  <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h1 className="text-xl font-bold mt-4">Jamie Doe</h1>
                <p className="text-sm text-muted-foreground mt-1">Member since March 2025</p>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                >
                  Edit Profile
                </Button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Profile Visibility</span>
                  <Switch id="profile-visibility" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email Notifications</span>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Dark Mode</span>
                  <Switch id="dark-mode" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <Tabs defaultValue="reflections" className="w-full">
            <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
              <TabsTrigger
                value="reflections"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                My Reflections
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Insights
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Account Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reflections" className="mt-4">
              <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="p-6">
                  <h2 className="text-lg font-medium mb-4">Your Reflection History</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Learning to listen more effectively",
                        date: "March 29, 2025",
                        preview: "I've been working on my active listening skills this week...",
                      },
                      {
                        title: "Handling criticism constructively",
                        date: "March 25, 2025",
                        preview: "Today's feedback session was challenging but enlightening...",
                      },
                      {
                        title: "Finding joy in small moments",
                        date: "March 20, 2025",
                        preview: "I've been practicing mindfulness by noticing the little things...",
                      },
                    ].map((reflection, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0 dark:border-gray-800">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{reflection.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{reflection.date}</p>
                            <p className="mt-2 text-sm">{reflection.preview}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  >
                    View All Reflections
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-4">
              <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="p-6">
                  <h2 className="text-lg font-medium mb-4">Your Personal Insights</h2>
                  <div className="space-y-6">
                    <InsightCard
                      title="Common Themes"
                      description="Based on your reflections, these topics appear frequently:"
                      gradient="from-indigo-500 to-blue-600"
                    >
                      <div className="flex flex-wrap gap-2">
                        {["Communication", "Work-life balance", "Personal growth", "Relationships", "Mindfulness"].map(
                          (theme) => (
                            <span
                              key={theme}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                            >
                              #{theme}
                            </span>
                          ),
                        )}
                      </div>
                    </InsightCard>

                    <InsightCard
                      title="Mood Patterns"
                      description="Your mood tends to be highest on weekends and lowest on Wednesdays."
                      gradient="from-purple-500 to-pink-600"
                    >
                      <div className="h-20 flex items-end justify-between">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                          const heights = [60, 50, 30, 45, 55, 80, 75]
                          const colors = [
                            "bg-yellow-500",
                            "bg-yellow-500",
                            "bg-orange-500",
                            "bg-yellow-500",
                            "bg-yellow-500",
                            "bg-green-500",
                            "bg-green-500",
                          ]
                          return (
                            <div key={day} className="flex flex-col items-center">
                              <div
                                className={`w-8 ${colors[i]} rounded-t-sm`}
                                style={{ height: `${heights[i]}%` }}
                              ></div>
                              <span className="text-xs mt-2 text-muted-foreground">{day}</span>
                            </div>
                          )
                        })}
                      </div>
                    </InsightCard>

                    <InsightCard
                      title="Growth Areas"
                      description="Based on your reflections, these might be areas to focus on:"
                      gradient="from-blue-500 to-cyan-600"
                    >
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Setting clearer boundaries in professional relationships
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Developing consistent mindfulness practices
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Expressing needs more directly in personal relationships
                        </li>
                      </ul>
                    </InsightCard>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="p-6">
                  <h2 className="text-lg font-medium mb-4">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <input
                            id="name"
                            className="w-full p-2 border rounded-md mt-1 bg-background focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            defaultValue="Jamie Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <input
                            id="email"
                            className="w-full p-2 border rounded-md mt-1 bg-background focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            defaultValue="jamie@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Privacy Settings</h3>
                      <div className="space-y-3">
                        <SettingsToggle
                          id="public-profile"
                          label="Public Profile"
                          description="Allow others to view your profile"
                        />
                        <SettingsToggle
                          id="show-reflections"
                          label="Show Public Reflections"
                          description="Share your public reflections on your profile"
                        />
                        <SettingsToggle
                          id="allow-responses"
                          label="Allow Responses"
                          description="Let others respond to your public reflections"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Notification Preferences</h3>
                      <div className="space-y-3">
                        <SettingsToggle
                          id="email-responses"
                          label="Email for Responses"
                          description="Get notified when someone responds to your reflection"
                        />
                        <SettingsToggle
                          id="email-digest"
                          label="Weekly Digest"
                          description="Receive a weekly summary of your reflections and insights"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                      >
                        Cancel
                      </Button>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

function InsightCard({
  title,
  description,
  gradient,
  children,
}: { title: string; description: string; gradient: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-4 bg-gray-50 dark:bg-gray-900">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-3">{description}</p>
        {children}
      </div>
    </div>
  )
}

function SettingsToggle({ id, label, description }: { id: string; label: string; description: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Label htmlFor={id}>{label}</Label>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} />
    </div>
  )
}

