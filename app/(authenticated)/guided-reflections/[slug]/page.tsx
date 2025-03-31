"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Clock, Save, CheckCircle, AlertCircle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// Mock data - in a real app, this would come from an API
const reflectionTemplates = {
  "daily-reflection": {
    title: "Daily Reflection",
    description: "End-of-day reflection on emotions, challenges, and victories",
    time: "5-10 min",
    category: "Daily Practice",
    gradient: "from-indigo-500 to-blue-600",
    questions: [
      {
        id: 1,
        question: "What emotions were most present for you today?",
        placeholder: "Consider both positive and challenging emotions...",
        tip: "Try to name specific emotions rather than general states like 'good' or 'bad'.",
      },
      {
        id: 2,
        question: "What was a moment of challenge today? How did you respond?",
        placeholder: "Describe a difficult moment and your reaction...",
        tip: "Focus on both the external situation and your internal response.",
      },
      {
        id: 3,
        question: "What was a victory or positive moment today, however small?",
        placeholder: "Reflect on something that went well...",
        tip: "Even on difficult days, try to identify small positive moments.",
      },
      {
        id: 4,
        question: "What did you learn today or what insight did you gain?",
        placeholder: "Consider new perspectives or lessons...",
        tip: "This could be about yourself, others, or the world around you.",
      },
      {
        id: 5,
        question: "What would you like to remember from today?",
        placeholder: "Note something worth carrying forward...",
        tip: "This could be a feeling, an insight, or a reminder for tomorrow.",
      },
    ],
  },
  "gratitude-practice": {
    title: "Gratitude Practice",
    description: "Focus on things you're thankful for to cultivate positivity",
    time: "5 min",
    category: "Wellbeing",
    gradient: "from-purple-500 to-pink-600",
    questions: [
      {
        id: 1,
        question: "What are three things you're grateful for today?",
        placeholder: "List three things and why they matter to you...",
        tip: "Try to be specific rather than general. For example, instead of 'my family,' perhaps 'the supportive text my sister sent me today.'",
      },
      {
        id: 2,
        question: "Who is someone that positively impacted your life recently? How did they help you?",
        placeholder: "Reflect on someone who made a difference...",
        tip: "This could be someone close to you or even a brief interaction with a stranger.",
      },
      {
        id: 3,
        question: "What is something about yourself that you're grateful for?",
        placeholder: "Consider a quality, ability, or action of yours...",
        tip: "Self-gratitude is just as important as gratitude for external things.",
      },
    ],
  },
  "future-self": {
    title: "Future Self",
    description: "Connect with and write to your future self",
    time: "15 min",
    category: "Personal Growth",
    gradient: "from-emerald-500 to-green-600",
    questions: [
      {
        id: 1,
        question: "Imagine yourself one year from now. What do you hope will be different in your life?",
        placeholder: "Consider changes in various areas of your life...",
        tip: "Think about relationships, work, personal growth, health, and other important areas.",
      },
      {
        id: 2,
        question: "What are you doing now that your future self will thank you for?",
        placeholder: "Reflect on positive habits or decisions...",
        tip: "These could be small daily habits or major life decisions.",
      },
      {
        id: 3,
        question: "What would your future self advise you to start, stop, or continue doing?",
        placeholder: "Imagine wisdom from your future perspective...",
        tip: "Your future self has perspective that you might not have right now.",
      },
      {
        id: 4,
        question: "What fears or concerns do you have that your future self might have overcome?",
        placeholder: "Consider current challenges from a future perspective...",
        tip: "Imagining these challenges as already overcome can provide hope and direction.",
      },
      {
        id: 5,
        question: "Write a letter to your present self from your future self one year from now.",
        placeholder: "Dear present me...",
        tip: "Be encouraging, wise, and compassionate as your future self.",
      },
    ],
  },
}

export default function GuidedReflectionPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [showExitDialog, setShowExitDialog] = useState(false)
  const [showCompleteDialog, setShowCompleteDialog] = useState(false)

  const template = reflectionTemplates[slug as keyof typeof reflectionTemplates]

  if (!template) {
    return (
      <div className="container px-4 py-10 mx-auto max-w-3xl text-center">
        <AlertCircle className="h-12 w-12 mx-auto text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Reflection Template Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find the reflection template you're looking for.</p>
        <Button onClick={() => router.push("/guided-reflections")}>Back to Guided Reflections</Button>
      </div>
    )
  }

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isTimerActive) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isTimerActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < template.questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    } else {
      setShowCompleteDialog(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSaveDraft = () => {
    // In a real app, this would save to a database
    console.log("Saving draft:", answers)
    // Show a success message or redirect
  }

  const handleComplete = () => {
    // In a real app, this would save to a database and mark as complete
    console.log("Completing reflection:", answers)
    setShowCompleteDialog(false)
    router.push("/journal")
  }

  const currentQuestion = template.questions[currentStep]
  const progress = ((currentStep + 1) / template.questions.length) * 100

  return (
    <main className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => setShowExitDialog(true)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guided Reflections
        </Button>

        <h1 className={`text-2xl font-bold bg-gradient-to-br ${template.gradient} bg-clip-text text-transparent`}>
          {template.title}
        </h1>

        <p className="text-muted-foreground mt-2 mb-4">{template.description}</p>

        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-muted-foreground">
            Question {currentStep + 1} of {template.questions.length}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
        </div>

        <Progress value={progress} className="h-1.5" />
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <h2 className="text-xl font-medium mb-4">{currentQuestion.question}</h2>

          <Textarea
            placeholder={currentQuestion.placeholder}
            className="min-h-[200px] mb-4"
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
          />

          {currentQuestion.tip && (
            <div className="bg-muted p-3 rounded-md text-sm text-muted-foreground">
              <strong>Tip:</strong> {currentQuestion.tip}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>

          <Button onClick={handleNext}>
            {currentStep < template.questions.length - 1 ? (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                Complete
                <CheckCircle className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Exit Reflection?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress will be lost if you leave without saving. Would you like to save a draft before exiting?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSaveDraft}>Save Draft</AlertDialogAction>
            <AlertDialogAction onClick={() => router.push("/guided-reflections")}>
              Exit Without Saving
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Completion Dialog */}
      <AlertDialog open={showCompleteDialog} onOpenChange={setShowCompleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reflection Complete</AlertDialogTitle>
            <AlertDialogDescription>
              You've completed your {template.title} reflection. Your responses will be saved to your journal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Editing</AlertDialogCancel>
            <AlertDialogAction onClick={handleComplete}>Save to Journal</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  )
}

