"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 5

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col">
      <header className="border-b backdrop-blur-sm bg-background/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  F
                </span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              FunctionalForIt
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Step {step} of {totalSteps}
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-3xl mx-auto px-4 py-8 flex flex-col">
        <div className="mb-8">
          <Progress value={(step / totalSteps) * 100} className="h-2 bg-gray-100 dark:bg-gray-800" />
        </div>

        <div className="flex-1 flex flex-col">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {step === 1 && <WelcomeStep />}
            {step === 2 && <PurposeStep />}
            {step === 3 && <TopicsStep />}
            {step === 4 && <ProfileStep />}
            {step === 5 && <FinalStep />}
          </motion.div>

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep} className="bg-white dark:bg-gray-950">
                Back
              </Button>
            ) : (
              <div></div>
            )}
            {step < totalSteps ? (
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                Continue
              </Button>
            ) : (
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link href="/">Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function WelcomeStep() {
  return (
    <div className="text-center space-y-6">
      <div className="h-40 w-40 mx-auto">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 animate-pulse"></div>
          <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">F</span>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold">Welcome to FunctionalForIt</h1>
      <p className="text-muted-foreground max-w-md mx-auto">
        A space for introspection, emotional processing, and mindful sharing. Let's set up your experience.
      </p>
    </div>
  )
}

function PurposeStep() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">What Makes Reflect Different</h1>
      <div className="grid gap-4">
        {[
          {
            title: "Introspection Over Validation",
            description: "No likes, comments, or follower counts. Focus on your journey, not external validation.",
            icon: "🧠",
          },
          {
            title: "Experience + Reflection",
            description: "Share what happened and what you learned from it, creating deeper meaning.",
            icon: "💭",
          },
          {
            title: "Mindful Consumption",
            description: "Content is recommended based on your interests, not engagement metrics.",
            icon: "🌱",
          },
          {
            title: "Private & Public Spaces",
            description: "Keep personal reflections private or share insights with the community.",
            icon: "🔐",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-4 bg-white dark:bg-gray-950 shadow-sm border border-gray-100 dark:border-gray-800 flex gap-4"
          >
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopicsStep() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic))
    } else {
      setSelectedTopics([...selectedTopics, topic])
    }
  }

  const topics = [
    "Personal Growth",
    "Mindfulness",
    "Relationships",
    "Work & Career",
    "Health & Wellbeing",
    "Creativity",
    "Spirituality",
    "Learning",
    "Challenges",
    "Gratitude",
    "Nature",
    "Travel",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">What interests you?</h1>
        <p className="text-muted-foreground">
          Select topics you'd like to explore. This helps us personalize your experience.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => toggleTopic(topic)}
            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
              selectedTopics.includes(topic)
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProfileStep() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create Your Profile</h1>
        <p className="text-muted-foreground">Tell us a bit about yourself. You can always edit this later.</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-md">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Display Name
            </label>
            <input
              id="name"
              className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              rows={3}
              className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="A brief description about yourself"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

function FinalStep() {
  return (
    <div className="text-center space-y-6">
      <div className="h-40 w-40 mx-auto flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-6xl">
          ✓
        </div>
      </div>
      <h1 className="text-3xl font-bold">You're All Set!</h1>
      <p className="text-muted-foreground max-w-md mx-auto">
        Your Reflect journey begins now. Start by exploring reflections from others or share your own experience.
      </p>
      <div className="pt-4">
        <p className="text-sm text-muted-foreground">
          Remember, Reflect is about introspection, not validation. Take your time and be authentic.
        </p>
      </div>
    </div>
  )
}

