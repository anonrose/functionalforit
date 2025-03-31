import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock } from "lucide-react"

export default function GuidedReflectionLoading() {
  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" className="mb-4" disabled>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guided Reflections
        </Button>

        <Skeleton className="h-8 w-2/3 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />

        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-4 w-24" />
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>

        <Skeleton className="h-1.5 w-full" />
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-[200px] w-full mb-4" />
          <Skeleton className="h-16 w-full rounded-md" />
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-24" />

        <div className="flex gap-2">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </main>
  )
}

