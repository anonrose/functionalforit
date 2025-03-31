import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface CompletedReflectionProps {
  reflection: {
    id: string
    title: string
    category: string
    completedAt: Date
    duration: number // in seconds
    questions: {
      question: string
      answer: string
    }[]
  }
}

export function CompletedReflection({ reflection }: CompletedReflectionProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{reflection.title}</CardTitle>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDistanceToNow(reflection.completedAt, { addSuffix: true })}</span>
              <Clock className="h-4 w-4 ml-2" />
              <span>{formatTime(reflection.duration)}</span>
            </div>
          </div>
          <Badge variant="outline">{reflection.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        {reflection.questions.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="font-medium mb-2">{item.question}</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{item.answer}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

