import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MoodHistoryPage() {
  // Sample mood data
  const moodData = [
    { date: "Mar 30", value: 8, note: "Productive day, finished a big project" },
    { date: "Mar 29", value: 7, note: "Good energy, but some stress about deadlines" },
    { date: "Mar 28", value: 5, note: "Neutral day, nothing special" },
    { date: "Mar 27", value: 3, note: "Difficult conversation with team member" },
    { date: "Mar 26", value: 6, note: "Feeling better after yesterday's challenges" },
    { date: "Mar 25", value: 2, note: "Very stressful day, multiple issues at work" },
    { date: "Mar 24", value: 7, note: "Relaxing weekend, spent time in nature" },
    { date: "Mar 23", value: 8, note: "Great day with friends" },
    { date: "Mar 22", value: 6, note: "Productive but tired" },
    { date: "Mar 21", value: 5, note: "Average day" },
    { date: "Mar 20", value: 9, note: "Excellent news about project funding" },
    { date: "Mar 19", value: 7, note: "Good progress on personal goals" },
    { date: "Mar 18", value: 6, note: "Steady day" },
    { date: "Mar 17", value: 4, note: "Feeling under the weather" },
  ]

  const getMoodColor = (value: number) => {
    if (value <= 2) return "bg-red-500"
    if (value <= 4) return "bg-orange-500"
    if (value <= 6) return "bg-yellow-500"
    if (value <= 8) return "bg-green-500"
    return "bg-emerald-500"
  }

  const getMoodGradient = (value: number) => {
    if (value <= 2) return "from-red-500 to-red-600"
    if (value <= 4) return "from-orange-500 to-orange-600"
    if (value <= 6) return "from-yellow-500 to-yellow-600"
    if (value <= 8) return "from-green-500 to-green-600"
    return "from-emerald-500 to-emerald-600"
  }

  const getMoodLabel = (value: number) => {
    if (value <= 2) return "Challenging"
    if (value <= 4) return "Difficult"
    if (value <= 6) return "Neutral"
    if (value <= 8) return "Good"
    return "Excellent"
  }

  // Calculate average mood
  const averageMood = moodData.reduce((acc, curr) => acc + curr.value, 0) / moodData.length

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
        Mood History
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Average Mood"
          value={averageMood.toFixed(1)}
          label={getMoodLabel(averageMood)}
          gradient={getMoodGradient(averageMood)}
        />

        <StatCard title="Highest Mood" value="9" label="Excellent" gradient="from-emerald-500 to-emerald-600" />

        <StatCard title="Lowest Mood" value="2" label="Challenging" gradient="from-red-500 to-red-600" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Mood Visualization
        </h2>
        <Select defaultValue="2weeks">
          <SelectTrigger className="w-[180px] bg-white dark:bg-gray-950">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="2weeks">Past 2 Weeks</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="3months">Past 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="graph" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="graph"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Graph View
          </TabsTrigger>
          <TabsTrigger
            value="calendar"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Calendar View
          </TabsTrigger>
          <TabsTrigger
            value="list"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            List View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graph" className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6">
            <div className="h-64 flex items-end justify-between">
              {moodData.map((day, index) => (
                <div key={index} className="flex flex-col items-center group relative">
                  <div
                    className={`w-8 ${getMoodColor(day.value)} rounded-t-sm hover:opacity-90 transition-opacity`}
                    style={{ height: `${day.value * 10}%` }}
                  ></div>
                  <span className="text-xs mt-2 text-muted-foreground">{day.date}</span>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`h-3 w-3 rounded-full ${getMoodColor(day.value)}`}></div>
                      <span className="font-medium">
                        {getMoodLabel(day.value)} ({day.value}/10)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{day.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="text-center py-12 text-muted-foreground">Calendar view will be implemented here</div>
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
            <div className="divide-y dark:divide-gray-800">
              {moodData.map((day, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className={`w-4 h-4 rounded-full ${getMoodColor(day.value)} mr-3`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{day.date}</span>
                      <span className="text-muted-foreground">
                        {getMoodLabel(day.value)} ({day.value}/10)
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{day.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

function StatCard({
  title,
  value,
  label,
  gradient,
}: { title: string; value: string; label: string; gradient: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">{title}</h2>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold mr-3`}
          >
            {value}
          </div>
          <span className="text-lg">{label}</span>
        </div>
      </div>
    </div>
  )
}

