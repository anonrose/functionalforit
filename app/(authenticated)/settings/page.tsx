import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
        Settings
      </h1>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="account"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Privacy
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Account Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue="Jamie Doe"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      defaultValue="jamiedoe"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="jamie@example.com"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    defaultValue="Mindfulness practitioner, software engineer, and amateur photographer. Exploring the intersection of technology and wellbeing."
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 mt-6">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Password</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      className="bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                    Update Password
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 mt-6 border-red-200 dark:border-red-900/30">
            <div className="p-6">
              <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Export Your Data</h3>
                    <p className="text-sm text-muted-foreground">Download all your reflections and journal entries</p>
                  </div>
                  <Button variant="outline">Export</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Delete Account</h3>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive">Delete</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="mt-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Privacy Settings</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Profile Visibility</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="public-profile">Public Profile</Label>
                        <p className="text-xs text-muted-foreground">Allow others to view your profile</p>
                      </div>
                      <Switch id="public-profile" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="searchable">Searchable</Label>
                        <p className="text-xs text-muted-foreground">Allow others to find you in search results</p>
                      </div>
                      <Switch id="searchable" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-reflections">Show Public Reflections</Label>
                        <p className="text-xs text-muted-foreground">Share your public reflections on your profile</p>
                      </div>
                      <Switch id="show-reflections" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Content Privacy</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="default-visibility">Default Reflection Visibility</Label>
                      <Select defaultValue="public">
                        <SelectTrigger id="default-visibility" className="w-full mt-1 bg-gray-50 dark:bg-gray-900">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public - Anyone can view</SelectItem>
                          <SelectItem value="circles">Circles Only - Only members of your circles</SelectItem>
                          <SelectItem value="private">Private - Only you can view</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="ai-analysis">AI Content Analysis</Label>
                        <p className="text-xs text-muted-foreground">
                          Allow AI to analyze your reflections for personalized insights
                        </p>
                      </div>
                      <Switch id="ai-analysis" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Data Usage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="usage-data">Usage Data</Label>
                        <p className="text-xs text-muted-foreground">
                          Allow anonymous usage data to improve the platform
                        </p>
                      </div>
                      <Switch id="usage-data" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="third-party">Third-Party Integrations</Label>
                        <p className="text-xs text-muted-foreground">Allow connections with third-party services</p>
                      </div>
                      <Switch id="third-party" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                    Save Privacy Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Notification Preferences</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-mentions">Mentions</Label>
                        <p className="text-xs text-muted-foreground">When someone mentions you in a reflection</p>
                      </div>
                      <Switch id="email-mentions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-circles">Circle Activity</Label>
                        <p className="text-xs text-muted-foreground">Updates from circles you're a member of</p>
                      </div>
                      <Switch id="email-circles" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-digest">Weekly Digest</Label>
                        <p className="text-xs text-muted-foreground">Weekly summary of your reflections and insights</p>
                      </div>
                      <Switch id="email-digest" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-product">Product Updates</Label>
                        <p className="text-xs text-muted-foreground">New features and improvements to the platform</p>
                      </div>
                      <Switch id="email-product" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">In-App Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-mentions">Mentions</Label>
                        <p className="text-xs text-muted-foreground">When someone mentions you in a reflection</p>
                      </div>
                      <Switch id="app-mentions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-circles">Circle Activity</Label>
                        <p className="text-xs text-muted-foreground">Updates from circles you're a member of</p>
                      </div>
                      <Switch id="app-circles" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-streaks">Streaks & Milestones</Label>
                        <p className="text-xs text-muted-foreground">
                          Updates on your reflection streaks and achievements
                        </p>
                      </div>
                      <Switch id="app-streaks" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-recommendations">Recommendations</Label>
                        <p className="text-xs text-muted-foreground">Personalized content and circle recommendations</p>
                      </div>
                      <Switch id="app-recommendations" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                    Save Notification Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Appearance Settings</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:border-indigo-500 transition-colors">
                      <div className="h-20 w-full rounded-md bg-white border mb-2"></div>
                      <span className="text-sm">Light</span>
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:border-indigo-500 transition-colors">
                      <div className="h-20 w-full rounded-md bg-gray-900 border border-gray-700 mb-2"></div>
                      <span className="text-sm">Dark</span>
                    </div>
                    <div className="border border-indigo-500 rounded-lg p-4 flex flex-col items-center cursor-pointer">
                      <div className="h-20 w-full rounded-md bg-gradient-to-b from-white to-gray-900 border mb-2"></div>
                      <span className="text-sm font-medium text-indigo-500">System</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Font Size</h3>
                  <div className="space-y-3">
                    <div>
                      <Select defaultValue="medium">
                        <SelectTrigger className="w-full bg-gray-50 dark:bg-gray-900">
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="xlarge">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Accent Color</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {[
                      { name: "Indigo", class: "bg-indigo-500", selected: true },
                      { name: "Purple", class: "bg-purple-500", selected: false },
                      { name: "Blue", class: "bg-blue-500", selected: false },
                      { name: "Emerald", class: "bg-emerald-500", selected: false },
                      { name: "Rose", class: "bg-rose-500", selected: false },
                    ].map((color) => (
                      <div key={color.name} className="flex flex-col items-center">
                        <div
                          className={`h-10 w-10 rounded-full ${color.class} cursor-pointer ${
                            color.selected ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600" : ""
                          }`}
                        ></div>
                        <span className="text-xs mt-1">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all">
                    Save Appearance Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

