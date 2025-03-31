"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, Share2, Users, UserPlus, TrendingUp, Award, MessageCircle, BookOpen } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function InsightsPage() {
  const [viewMode, setViewMode] = useState<"personal" | "community">("personal")

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          {viewMode === "personal" ? "Personal Insights" : "Community Insights"}
        </h1>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full px-3 ${viewMode === "personal" ? "bg-white dark:bg-gray-950 shadow-sm" : ""}`}
              onClick={() => setViewMode("personal")}
            >
              Personal
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full px-3 ${viewMode === "community" ? "bg-white dark:bg-gray-950 shadow-sm" : ""}`}
              onClick={() => setViewMode("community")}
            >
              Community
            </Button>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {viewMode === "personal" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <InsightCard
              title="Total Reflections"
              value="42"
              change="+8"
              period="this month"
              gradient="from-indigo-500 to-blue-500"
            />
            <InsightCard
              title="Average Mood"
              value="7.2"
              change="+0.5"
              period="from last month"
              gradient="from-green-500 to-emerald-500"
            />
            <InsightCard
              title="Reflection Streak"
              value="12"
              change="days"
              period="current streak"
              gradient="from-purple-500 to-pink-500"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Detailed Analysis</h2>
            <Select defaultValue="3months">
              <SelectTrigger className="w-[180px] bg-white dark:bg-gray-950">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Past Month</SelectItem>
                <SelectItem value="3months">Past 3 Months</SelectItem>
                <SelectItem value="6months">Past 6 Months</SelectItem>
                <SelectItem value="year">Past Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="patterns" className="w-full">
            <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
              <TabsTrigger
                value="patterns"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Patterns & Trends
              </TabsTrigger>
              <TabsTrigger
                value="topics"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Topics & Themes
              </TabsTrigger>
              <TabsTrigger
                value="growth"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Growth Areas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="patterns" className="mt-6">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Mood Patterns</h3>
                    <p className="text-sm text-muted-foreground">How your mood has fluctuated over time</p>
                  </div>
                  <div className="p-6">
                    <div className="h-64 flex items-end justify-between">
                      {Array.from({ length: 30 }).map((_, index) => {
                        const height = Math.floor(Math.random() * 70) + 30
                        const colors = [
                          "bg-red-500",
                          "bg-orange-500",
                          "bg-yellow-500",
                          "bg-green-500",
                          "bg-emerald-500",
                        ]
                        const colorIndex = Math.floor((height - 30) / 14)
                        return (
                          <div key={index} className="flex flex-col items-center group relative">
                            <div
                              className={`w-2 ${colors[colorIndex]} rounded-t-sm hover:opacity-90 transition-opacity`}
                              style={{ height: `${height}%` }}
                            ></div>
                            {index % 5 === 0 && <span className="text-xs mt-2 text-muted-foreground">{index + 1}</span>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                    <div className="p-4 border-b dark:border-gray-800">
                      <h3 className="font-medium">Reflection Time</h3>
                      <p className="text-sm text-muted-foreground">When you tend to reflect most during the day</p>
                    </div>
                    <div className="p-6">
                      <div className="h-48">
                        <div className="flex h-full">
                          {["Morning", "Afternoon", "Evening", "Night"].map((time, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div className="flex-1 flex items-end justify-center w-full px-2">
                                <div
                                  className={`w-full bg-indigo-${i === 2 ? "500" : "200"} dark:bg-indigo-${i === 2 ? "600" : "900/30"} rounded-t-sm`}
                                  style={{ height: `${i === 2 ? "80" : i === 1 ? "40" : i === 3 ? "30" : "20"}%` }}
                                ></div>
                              </div>
                              <span className="text-xs mt-2 text-muted-foreground">{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-center mt-4 text-muted-foreground">
                        You reflect most often in the evening
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                    <div className="p-4 border-b dark:border-gray-800">
                      <h3 className="font-medium">Weekly Patterns</h3>
                      <p className="text-sm text-muted-foreground">Reflection frequency by day of week</p>
                    </div>
                    <div className="p-6">
                      <div className="h-48">
                        <div className="flex h-full items-end">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                            const heights = [40, 30, 45, 35, 60, 85, 70]
                            return (
                              <div key={day} className="flex-1 flex flex-col items-center">
                                <div
                                  className={`w-8 ${i >= 5 ? "bg-purple-500" : "bg-indigo-400"} rounded-t-sm`}
                                  style={{ height: `${heights[i]}%` }}
                                ></div>
                                <span className="text-xs mt-2 text-muted-foreground">{day}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <p className="text-sm text-center mt-4 text-muted-foreground">You reflect more on weekends</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="mt-6">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Common Themes</h3>
                    <p className="text-sm text-muted-foreground">Topics that appear frequently in your reflections</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "Relationships", count: 18, color: "bg-indigo-500" },
                        { name: "Work", count: 15, color: "bg-purple-500" },
                        { name: "Personal Growth", count: 12, color: "bg-blue-500" },
                        { name: "Mindfulness", count: 9, color: "bg-green-500" },
                        { name: "Creativity", count: 7, color: "bg-amber-500" },
                        { name: "Health", count: 5, color: "bg-red-500" },
                      ].map((theme) => (
                        <div key={theme.name} className="rounded-lg border dark:border-gray-800 p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`h-3 w-3 rounded-full ${theme.color}`}></div>
                            <span className="font-medium text-sm">{theme.name}</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${theme.color}`}
                              style={{ width: `${(theme.count / 18) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-right mt-1 text-muted-foreground">{theme.count} reflections</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Emotional Vocabulary</h3>
                    <p className="text-sm text-muted-foreground">Words you use to describe your emotions</p>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        { word: "Grateful", size: "text-2xl", color: "text-green-500" },
                        { word: "Anxious", size: "text-xl", color: "text-orange-500" },
                        { word: "Inspired", size: "text-2xl", color: "text-blue-500" },
                        { word: "Frustrated", size: "text-lg", color: "text-red-500" },
                        { word: "Peaceful", size: "text-xl", color: "text-cyan-500" },
                        { word: "Overwhelmed", size: "text-lg", color: "text-purple-500" },
                        { word: "Hopeful", size: "text-xl", color: "text-indigo-500" },
                        { word: "Confused", size: "text-base", color: "text-yellow-500" },
                        { word: "Excited", size: "text-xl", color: "text-pink-500" },
                        { word: "Tired", size: "text-base", color: "text-gray-500" },
                        { word: "Content", size: "text-lg", color: "text-emerald-500" },
                        { word: "Curious", size: "text-lg", color: "text-blue-400" },
                        { word: "Proud", size: "text-lg", color: "text-amber-500" },
                        { word: "Disappointed", size: "text-base", color: "text-red-400" },
                        { word: "Calm", size: "text-lg", color: "text-teal-500" },
                      ].map((item) => (
                        <span key={item.word} className={`${item.size} ${item.color} font-medium`}>
                          {item.word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="growth" className="mt-6">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Growth Areas</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on your reflections, these might be areas to focus on
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        {
                          area: "Setting boundaries in professional relationships",
                          description:
                            "Your reflections often mention challenges with work-life balance and difficulty saying no to colleagues.",
                          progress: 35,
                        },
                        {
                          area: "Developing consistent mindfulness practices",
                          description:
                            "You've mentioned wanting to establish a regular meditation practice several times in the past 3 months.",
                          progress: 60,
                        },
                        {
                          area: "Expressing needs more directly in personal relationships",
                          description:
                            "Your reflections show a pattern of frustration when needs aren't met, but hesitation to express them clearly.",
                          progress: 25,
                        },
                      ].map((item, i) => (
                        <div key={i} className="rounded-lg border dark:border-gray-800 p-4">
                          <h4 className="font-medium">{item.area}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <div className="mt-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{item.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Recommended Resources</h3>
                    <p className="text-sm text-muted-foreground">Personalized suggestions based on your growth areas</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Setting Healthy Boundaries",
                          type: "Article",
                          source: "Psychology Today",
                          gradient: "from-indigo-500 to-blue-500",
                        },
                        {
                          title: "10-Minute Mindfulness Meditation",
                          type: "Audio",
                          source: "Calm App",
                          gradient: "from-blue-500 to-cyan-500",
                        },
                        {
                          title: "Assertive Communication in Relationships",
                          type: "Video",
                          source: "TED Talk",
                          gradient: "from-purple-500 to-pink-500",
                        },
                        {
                          title: "The Art of Saying No",
                          type: "Book",
                          source: "Sarah Knight",
                          gradient: "from-amber-500 to-orange-500",
                        },
                      ].map((resource, i) => (
                        <div key={i} className="rounded-lg overflow-hidden border dark:border-gray-800">
                          <div className={`h-1.5 bg-gradient-to-r ${resource.gradient}`}></div>
                          <div className="p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-sm">{resource.title}</h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {resource.type} • {resource.source}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <CommunityInsightCard
              title="Active Members"
              value="12,456"
              change="+8%"
              period="this month"
              icon={<Users className="h-5 w-5 text-indigo-500" />}
            />
            <CommunityInsightCard
              title="Reflection Rate"
              value="3.2"
              change="+0.5"
              period="reflections per week"
              icon={<BookOpen className="h-5 w-5 text-purple-500" />}
            />
            <CommunityInsightCard
              title="Engagement Score"
              value="78"
              change="+12"
              period="from last month"
              icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Community Analysis</h2>
            <div className="flex gap-2">
              <Select defaultValue="global">
                <SelectTrigger className="w-[180px] bg-white dark:bg-gray-950">
                  <SelectValue placeholder="Select community" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global Community</SelectItem>
                  <SelectItem value="circles">My Circles</SelectItem>
                  <SelectItem value="local">Local Community</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <UserPlus className="h-4 w-4" />
                Find Circles
              </Button>
            </div>
          </div>

          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
              <TabsTrigger
                value="trending"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Trending Topics
              </TabsTrigger>
              <TabsTrigger
                value="reflections"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Featured Reflections
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Your Comparison
              </TabsTrigger>
              <TabsTrigger
                value="challenges"
                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
              >
                Challenges & Circles
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="mt-6">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Trending Topics</h3>
                      <p className="text-sm text-muted-foreground">What the community is reflecting on this week</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          topic: "Work-Life Balance",
                          count: 1243,
                          change: "+12%",
                          gradient: "from-indigo-500 to-blue-500",
                          description: "Finding harmony between professional responsibilities and personal well-being",
                        },
                        {
                          topic: "Mindfulness Practices",
                          count: 986,
                          change: "+8%",
                          gradient: "from-purple-500 to-pink-500",
                          description: "Techniques for staying present and aware in daily life",
                        },
                        {
                          topic: "Personal Growth",
                          count: 754,
                          change: "+5%",
                          gradient: "from-amber-500 to-orange-500",
                          description: "Journeys of self-improvement and development",
                        },
                      ].map((item, i) => (
                        <div key={i} className="rounded-lg overflow-hidden border dark:border-gray-800">
                          <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`}></div>
                          <div className="p-4">
                            <h4 className="font-medium">{item.topic}</h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                            <div className="flex justify-between items-center mt-3">
                              <span className="text-lg font-bold">{item.count}</span>
                              <span className="text-xs text-green-500 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {item.change}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              <div className="flex -space-x-2">
                                {[...Array(4)].map((_, j) => (
                                  <Avatar key={j} className="h-5 w-5 border border-white dark:border-gray-950">
                                    <AvatarImage src={`/placeholder.svg?height=20&width=20&text=${j + 1}`} />
                                    <AvatarFallback className="text-[8px]">U{j + 1}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                +{Math.floor(item.count / 10)} contributors
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Topic Engagement Over Time</h3>
                    <p className="text-sm text-muted-foreground">How community interests have evolved</p>
                  </div>
                  <div className="p-6">
                    <div className="h-64 relative">
                      {/* Simplified graph visualization */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="border-b border-dashed border-gray-200 dark:border-gray-800 h-0"></div>
                        <div className="border-b border-dashed border-gray-200 dark:border-gray-800 h-0"></div>
                        <div className="border-b border-dashed border-gray-200 dark:border-gray-800 h-0"></div>
                        <div className="border-b border-dashed border-gray-200 dark:border-gray-800 h-0"></div>
                      </div>

                      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10"></div>
                      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10"></div>

                      <div className="relative h-full flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Work-Life Balance */}
                          <path
                            d="M0,80 C10,75 20,60 30,50 C40,40 50,35 60,30 C70,25 80,20 90,15 100,10"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="2"
                          />

                          {/* Mindfulness */}
                          <path
                            d="M0,90 C10,85 20,80 30,70 C40,60 50,55 60,45 C70,40 80,35 90,30 100,25"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="2"
                          />

                          {/* Personal Growth */}
                          <path
                            d="M0,95 C10,90 20,85 30,80 C40,75 50,65 60,60 C70,55 80,45 90,40 100,35"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-indigo-500 rounded-full"></div>
                        <span className="text-xs">Work-Life Balance</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs">Mindfulness</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
                        <span className="text-xs">Personal Growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reflections" className="mt-6">
              <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Featured Community Reflections</h3>
                    <p className="text-sm text-muted-foreground">Insightful reflections shared by the community</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800"
                  >
                    <Award className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="divide-y dark:divide-gray-800">
                  {[
                    {
                      title: "Finding Balance in a Busy World",
                      excerpt:
                        "After months of burnout, I've discovered that setting clear boundaries and prioritizing self-care has transformed my relationship with work...",
                      author: "Alex Morgan",
                      avatar: "/placeholder.svg?height=40&width=40&text=AM",
                      likes: 128,
                      comments: 32,
                      tags: ["Work-Life Balance", "Self-Care"],
                    },
                    {
                      title: "My Journey to Mindfulness",
                      excerpt:
                        "What started as a simple 5-minute daily meditation has evolved into a profound practice that has changed how I respond to stress and uncertainty...",
                      author: "Jamie Chen",
                      avatar: "/placeholder.svg?height=40&width=40&text=JC",
                      likes: 95,
                      comments: 24,
                      tags: ["Mindfulness", "Meditation"],
                    },
                    {
                      title: "Rebuilding Connections After Isolation",
                      excerpt:
                        "The pandemic changed how I view relationships. I've learned to value deeper connections over casual interactions and to be more intentional about...",
                      author: "Taylor Wilson",
                      avatar: "/placeholder.svg?height=40&width=40&text=TW",
                      likes: 87,
                      comments: 19,
                      tags: ["Relationships", "Personal Growth"],
                    },
                  ].map((reflection, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={reflection.avatar} />
                          <AvatarFallback>
                            {reflection.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium">{reflection.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{reflection.excerpt}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {reflection.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-1"
                              >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                              </svg>
                              {reflection.likes}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MessageCircle className="h-3.5 w-3.5 mr-1" />
                              {reflection.comments}
                            </div>
                            <div className="text-xs text-muted-foreground">By {reflection.author}</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t dark:border-gray-800 flex justify-center">
                  <Button variant="outline" size="sm">
                    View More Reflections
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Community Mood Comparison</h3>
                    <p className="text-sm text-muted-foreground">How your mood compares to the community average</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Your Average Mood</span>
                          <span className="text-sm font-bold">7.2</span>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                            style={{ width: "72%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Community Average</span>
                          <span className="text-sm font-bold">6.8</span>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Your Circles Average</span>
                          <span className="text-sm font-bold">7.5</span>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t dark:border-gray-800">
                      <h4 className="text-sm font-medium mb-3">Mood Fluctuation</h4>
                      <div className="relative h-32">
                        <div className="absolute inset-0 flex items-center justify-between">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className="h-full w-px bg-gray-100 dark:bg-gray-800"></div>
                          ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100 dark:bg-gray-800"></div>

                        <div className="relative h-full flex items-end">
                          <div className="flex-1 h-full flex items-end">
                            <div className="w-full h-[65%] border-t-2 border-indigo-500 border-dashed relative">
                              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950"></div>
                              <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950"></div>
                            </div>
                          </div>

                          <div className="flex-1 h-full flex items-end">
                            <div className="w-full h-[72%] border-t-2 border-purple-500 border-dashed relative">
                              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-purple-500 border-2 border-white dark:border-gray-950"></div>
                              <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-purple-500 border-2 border-white dark:border-gray-950"></div>
                            </div>
                          </div>

                          <div className="flex-1 h-full flex items-end">
                            <div className="w-full h-[68%] border-t-2 border-cyan-500 border-dashed relative">
                              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-950"></div>
                              <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-950"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>You</span>
                        <span>Your Circles</span>
                        <span>Global</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Reflection Topic Comparison</h3>
                    <p className="text-sm text-muted-foreground">How your reflection topics compare to the community</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        { topic: "Relationships", you: 35, community: 28, circles: 32 },
                        { topic: "Work & Career", you: 25, community: 32, circles: 28 },
                        { topic: "Personal Growth", you: 20, community: 18, circles: 22 },
                        { topic: "Health & Wellness", you: 12, community: 15, circles: 10 },
                        { topic: "Creativity", you: 8, community: 7, circles: 8 },
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{item.topic}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                {item.you}%
                              </span>
                              <span className="text-xs px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                {item.circles}%
                              </span>
                              <span className="text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                {item.community}%
                              </span>
                            </div>
                          </div>
                          <div className="flex h-2 rounded-full overflow-hidden">
                            <div className="bg-indigo-500" style={{ width: `${item.you}%` }}></div>
                            <div className="bg-purple-500" style={{ width: `${item.circles}%` }}></div>
                            <div className="bg-blue-500" style={{ width: `${item.community}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t dark:border-gray-800">
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-indigo-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">You</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">Your Circles</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">Global Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Community Challenges</h3>
                    <p className="text-sm text-muted-foreground">Join others in reflection challenges</p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {[
                        {
                          title: "30 Days of Gratitude",
                          participants: 1243,
                          days: 30,
                          progress: 12,
                          gradient: "from-indigo-500 to-blue-500",
                          description: "Reflect on something you're grateful for each day",
                        },
                        {
                          title: "Mindful Communication",
                          participants: 876,
                          days: 14,
                          progress: 5,
                          gradient: "from-purple-500 to-pink-500",
                          description: "Practice mindful listening and speaking in daily interactions",
                        },
                        {
                          title: "Self-Compassion Journey",
                          participants: 654,
                          days: 21,
                          progress: 0,
                          gradient: "from-amber-500 to-orange-500",
                          description: "Develop a kinder relationship with yourself",
                        },
                      ].map((challenge, i) => (
                        <div key={i} className="rounded-lg border dark:border-gray-800 overflow-hidden">
                          <div className={`h-1 bg-gradient-to-r ${challenge.gradient}`}></div>
                          <div className="p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">{challenge.title}</h4>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                  {challenge.description}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {challenge.participants} participants • {challenge.days} days
                                </p>
                              </div>
                              <Button variant="outline" size="sm" className="h-7 text-xs bg-white dark:bg-gray-950">
                                {challenge.progress > 0 ? "Continue" : "Join"}
                              </Button>
                            </div>
                            {challenge.progress > 0 && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs mb-1">
                                  <span>Progress</span>
                                  <span>{Math.round((challenge.progress / challenge.days) * 100)}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${challenge.gradient}`}
                                    style={{ width: `${(challenge.progress / challenge.days) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="p-4 border-b dark:border-gray-800">
                    <h3 className="font-medium">Recommended Circles</h3>
                    <p className="text-sm text-muted-foreground">Connect with like-minded reflectors</p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {[
                        {
                          name: "Mindfulness Practitioners",
                          members: 1243,
                          description: "A community dedicated to mindfulness meditation and present-moment awareness",
                          avatar: "/placeholder.svg?height=40&width=40&text=MP",
                          gradient: "from-blue-500 to-cyan-500",
                        },
                        {
                          name: "Creative Journalers",
                          members: 876,
                          description: "Explore creative approaches to journaling and self-expression",
                          avatar: "/placeholder.svg?height=40&width=40&text=CJ",
                          gradient: "from-purple-500 to-pink-500",
                        },
                        {
                          name: "Work-Life Balancers",
                          members: 654,
                          description: "Strategies for maintaining balance between career and personal life",
                          avatar: "/placeholder.svg?height=40&width=40&text=WB",
                          gradient: "from-amber-500 to-orange-500",
                        },
                      ].map((circle, i) => (
                        <div key={i} className="rounded-lg border dark:border-gray-800 overflow-hidden">
                          <div className={`h-1 bg-gradient-to-r ${circle.gradient}`}></div>
                          <div className="p-3">
                            <div className="flex gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={circle.avatar} />
                                <AvatarFallback>
                                  {circle.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="text-sm font-medium">{circle.name}</h4>
                                  <Button variant="outline" size="sm" className="h-7 text-xs bg-white dark:bg-gray-950">
                                    Join
                                  </Button>
                                </div>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {circle.description}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {circle.members} members
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </main>
  )
}

function InsightCard({
  title,
  value,
  change,
  period,
  gradient,
}: { title: string; value: string; change: string; period: string; gradient: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <div className="mt-2 flex items-center">
          <span className="text-3xl font-bold">{value}</span>
          <span className="ml-2 text-sm text-green-500">{change}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{period}</p>
      </div>
    </div>
  )
}

function CommunityInsightCard({
  title,
  value,
  change,
  period,
  icon,
}: { title: string; value: string; change: string; period: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
          {icon}
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-3xl font-bold">{value}</span>
          <span className="ml-2 text-sm text-green-500">{change}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{period}</p>
      </div>
    </div>
  )
}

