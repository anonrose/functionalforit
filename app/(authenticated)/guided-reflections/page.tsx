import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function GuidedReflectionsPage() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
        Guided Reflections
      </h1>

      <p className="text-muted-foreground mb-6">
        Structured templates to help deepen your reflection practice and explore specific areas of your life.
      </p>

      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="w-full p-0 h-auto bg-transparent border-b dark:border-gray-800">
          <TabsTrigger
            value="popular"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="recent"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Recent
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Categories
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 py-3"
          >
            Saved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Daily Reflection",
                description: "End-of-day reflection on emotions, challenges, and victories",
                time: "5-10 min",
                category: "Daily Practice",
                questions: 5,
                gradient: "from-indigo-500 to-blue-600",
                popular: true,
              },
              {
                title: "Gratitude Practice",
                description: "Focus on things you're thankful for to cultivate positivity",
                time: "5 min",
                category: "Wellbeing",
                questions: 3,
                gradient: "from-purple-500 to-pink-600",
                popular: true,
              },
              {
                title: "Values Exploration",
                description: "Identify and reflect on your core personal values",
                time: "15-20 min",
                category: "Personal Growth",
                questions: 7,
                gradient: "from-blue-500 to-cyan-600",
                popular: false,
              },
              {
                title: "Conflict Resolution",
                description: "Process and learn from interpersonal conflicts",
                time: "10-15 min",
                category: "Relationships",
                questions: 6,
                gradient: "from-amber-500 to-orange-600",
                popular: false,
              },
              {
                title: "Future Self",
                description: "Connect with and write to your future self",
                time: "15 min",
                category: "Personal Growth",
                questions: 5,
                gradient: "from-emerald-500 to-green-600",
                popular: true,
              },
              {
                title: "Stress Inventory",
                description: "Identify sources of stress and develop coping strategies",
                time: "10 min",
                category: "Wellbeing",
                questions: 6,
                gradient: "from-red-500 to-rose-600",
                popular: false,
              },
            ].map((template, i) => (
              <GuidedReflectionCard key={i} template={template} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Career Alignment",
                description: "Reflect on how your work aligns with your values and goals",
                time: "15 min",
                category: "Work & Career",
                questions: 8,
                gradient: "from-blue-500 to-indigo-600",
                popular: false,
                new: true,
              },
              {
                title: "Creative Block",
                description: "Work through creative challenges and mental blocks",
                time: "10 min",
                category: "Creativity",
                questions: 5,
                gradient: "from-purple-500 to-pink-600",
                popular: false,
                new: true,
              },
              {
                title: "Relationship Check-in",
                description: "Assess the health and balance of your relationships",
                time: "15 min",
                category: "Relationships",
                questions: 7,
                gradient: "from-pink-500 to-rose-600",
                popular: false,
                new: true,
              },
            ].map((template, i) => (
              <GuidedReflectionCard key={i} template={template} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Daily Practice", count: 4, gradient: "from-indigo-500 to-blue-600" },
              { name: "Wellbeing", count: 7, gradient: "from-green-500 to-emerald-600" },
              { name: "Personal Growth", count: 9, gradient: "from-purple-500 to-pink-600" },
              { name: "Relationships", count: 6, gradient: "from-pink-500 to-rose-600" },
              { name: "Work & Career", count: 5, gradient: "from-blue-500 to-indigo-600" },
              { name: "Creativity", count: 3, gradient: "from-amber-500 to-orange-600" },
              { name: "Mindfulness", count: 8, gradient: "from-cyan-500 to-blue-600" },
              { name: "Challenges", count: 4, gradient: "from-red-500 to-rose-600" },
              { name: "Goals", count: 5, gradient: "from-emerald-500 to-green-600" },
            ].map((category, i) => (
              <Card key={i} className="overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`}></div>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="font-medium">{category.name}</h3>
                  <span className="text-xs text-muted-foreground">{category.count} templates</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Gratitude Practice",
                description: "Focus on things you're thankful for to cultivate positivity",
                time: "5 min",
                category: "Wellbeing",
                questions: 3,
                gradient: "from-purple-500 to-pink-600",
                popular: true,
              },
              {
                title: "Future Self",
                description: "Connect with and write to your future self",
                time: "15 min",
                category: "Personal Growth",
                questions: 5,
                gradient: "from-emerald-500 to-green-600",
                popular: true,
              },
            ].map((template, i) => (
              <GuidedReflectionCard key={i} template={template} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

function GuidedReflectionCard({ template }: { template: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className={`h-1.5 bg-gradient-to-r ${template.gradient}`}></div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-medium">{template.title}</h2>
          {template.popular && (
            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs ml-1">Popular</span>
            </div>
          )}
          {template.new && (
            <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full px-2 py-0.5">
              New
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{template.description}</p>

        <div className="flex items-center mt-3 text-sm text-muted-foreground">
          <div className="flex items-center mr-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>{template.time}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{template.questions} questions</span>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">{template.category}</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              Preview
            </Button>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all"
              size="sm"
              asChild
            >
              <Link href={`/guided-reflections/${template.title.toLowerCase().replace(/\s+/g, "-")}`}>Start</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

