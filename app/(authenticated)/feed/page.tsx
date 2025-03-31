import { Button } from "@/components/ui/button"
import ReflectionFeed from "@/components/reflection-feed"
import { MoodTracker } from "@/components/mood-tracker"
import { RecommendedTopics } from "@/components/recommended-topics"
import { CreateReflection } from "@/components/create-reflection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <main className="container px-4 py-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <nav className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <div className="p-4">
                <h2 className="text-lg font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Your Space
                </h2>
                <div className="mt-4 space-y-1">
                  <NavItem href="/journal" icon="book-open" label="Private Journal" />
                  <NavItem href="/mood-history" icon="activity" label="Mood History" />
                  <NavItem href="/profile" icon="user" label="Profile" />
                  <NavItem href="/discover" icon="compass" label="Discover" />
                </div>
              </div>
            </nav>
            <MoodTracker />
          </div>

          {/* Main content */}
          <div className="lg:col-span-6 space-y-6">
            <CreateReflection />
            <ReflectionFeed />
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <RecommendedTopics />
            <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <div className="p-4">
                <h2 className="text-lg font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Discover Categories
                </h2>
                <div className="mt-4 space-y-2">
                  {["Personal Growth", "Mindfulness", "Relationships", "Work & Career", "Health & Wellbeing"].map(
                    (category) => (
                      <Button
                        key={category}
                        variant="outline"
                        className="w-full justify-start bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                        asChild
                      >
                        <Link href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</Link>
                      </Button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
      asChild
    >
      <Link href={href}>
        <span className="flex items-center">
          {icon === "book-open" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-indigo-500"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          )}
          {icon === "activity" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-indigo-500"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          )}
          {icon === "user" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-indigo-500"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          )}
          {icon === "compass" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-indigo-500"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          )}
          {label}
        </span>
      </Link>
    </Button>
  )
}

