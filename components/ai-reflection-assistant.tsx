"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Bot, Send, Sparkles, X } from "lucide-react"

export function AIReflectionAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your FunctionalForIt assistant. I can help you process your thoughts and deepen your reflections. What's on your mind today?",
    },
  ])

  const handleSubmit = () => {
    if (!input.trim()) return

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: input }])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's an interesting perspective. Have you considered how this experience might be connected to your values?",
        "I notice you mentioned feeling frustrated. Can you explore what specific aspects triggered that emotion?",
        "It sounds like this was meaningful to you. How does this experience relate to your broader life goals?",
        "That's a thoughtful reflection. What patterns do you notice between this and similar past experiences?",
        "I'm curious - if you could go back, would you approach the situation differently? Why or why not?",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setConversation([
        ...conversation,
        { role: "user", content: input },
        { role: "assistant", content: randomResponse },
      ])

      setInput("")
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 p-0 flex items-center justify-center"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 flex justify-between items-center">
            <div className="flex items-center text-white">
              <Bot className="h-5 w-5 mr-2" />
              <h3 className="font-medium">FunctionalForIt Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto max-h-96 bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {conversation.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-indigo-500 text-white"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce delay-75"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 border-t dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="flex items-end gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask for guidance on your reflection..."
                className="min-h-10 resize-none bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Button
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 rounded-full p-0 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

