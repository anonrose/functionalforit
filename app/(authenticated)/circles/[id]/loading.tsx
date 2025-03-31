import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Info } from "lucide-react"

export default function CircleLoading() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-5xl">
      {/* Circle Header Skeleton */}
      <div className="mb-6">
        <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-t-md"></div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-b-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-3 w-full md:w-2/3">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />

              <div className="flex flex-wrap gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-6 w-20 rounded-full" />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <div className="flex -space-x-2 mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-6 w-6 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-4 w-24 ml-2" />
          </div>
        </div>
      </div>

      {/* Circle Content Tabs Skeleton */}
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

        {/* Posts Tab Skeleton */}
        <TabsContent value="posts" className="mt-6">
          {/* Create Post Skeleton */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <Skeleton className="h-24 w-full mb-3" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-9 w-28" />
              </div>
            </CardContent>
          </Card>

          {/* Posts List Skeleton */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Post Header Skeleton */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div>
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </div>

                  {/* Post Content Skeleton */}
                  <div className="px-4 pb-3">
                    <div className="mb-3">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>

                    {/* Topics Skeleton */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {[1, 2, 3].map((j) => (
                        <Skeleton key={j} className="h-6 w-16 rounded-full" />
                      ))}
                    </div>
                  </div>

                  {/* Post Actions Skeleton */}
                  <div className="border-t dark:border-gray-800 px-4 py-2 flex justify-between">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

