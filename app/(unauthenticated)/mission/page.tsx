import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-sm bg-background/80">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
        </div>
      </header>

      <main className="container px-4 py-12 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-white bg-green-600 rounded-full">
            Non-Profit Organization
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Creating a digital space that prioritizes human wellbeing over profit
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Why We're a Non-Profit</h2>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              FunctionalForIt was founded on the belief that social technology should serve humanity's deeper needs for
              connection, meaning, and wellbeing. As a 501(c)(3) non-profit organization, we're able to prioritize these
              values over shareholder returns or engagement metrics that often lead to addictive design patterns.
            </p>

            <p className="text-gray-600 dark:text-gray-400">By operating as a non-profit, we can:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Design for human wellbeing rather than maximizing screen time</li>
              <li>Protect user privacy and data from being monetized</li>
              <li>Create a platform free from advertising and its influence on content</li>
              <li>Ensure all revenue goes directly toward improving the platform and expanding access</li>
              <li>Make mental health and self-reflection tools accessible to everyone, regardless of ability to pay</li>
            </ul>

            <div className="border-l-4 border-indigo-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400">
              "In a digital landscape optimized for engagement, we're creating a space optimized for human flourishing."
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Funding Model</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FunctionalForIt is supported through a combination of donations, grants, and optional subscriptions. We
              maintain complete transparency about how funds are used, with annual reports available to the public.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              While basic access to the platform is free, premium features help sustain our operations while keeping the
              core experience accessible to everyone.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Impact Initiatives</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Beyond the platform itself, we run programs that bring self-reflection and mental wellbeing tools to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Schools and educational institutions</li>
              <li>Mental health organizations</li>
              <li>Underserved communities</li>
              <li>Workplace wellness programs</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Join Our Mission</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Donate</Button>
            <Button variant="outline">Volunteer</Button>
            <Button variant="outline">Partner With Us</Button>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t border-gray-300 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            FunctionalForIt © 2025 | A 501(c)(3) Non-Profit Organization
          </p>
        </div>
      </footer>
    </div>
  )
}

