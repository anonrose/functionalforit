import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            About FunctionalForIt
          </h1>
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-white bg-green-600 rounded-full">
            Non-Profit Organization
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A social platform designed for meaningful connection and personal growth
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Our Story</h2>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              FunctionalForIt began in 2023 when a group of technologists, mental health professionals, and community
              builders came together with a shared concern: social media was becoming increasingly harmful to mental
              health and authentic human connection.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              We asked ourselves: What if we built a social platform that was intentionally designed to foster wellbeing
              rather than maximize engagement? What if we removed the metrics that drive comparison and anxiety? What if
              we created a space that encouraged depth rather than breadth?
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              The result is FunctionalForIt - a non-profit social platform focused on introspection, emotional
              processing, and mindful sharing. We've removed likes, follower counts, and other metrics that drive
              unhealthy social comparison, replacing them with features that encourage reflection, authentic expression,
              and meaningful connection.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Team</h3>
            <p className="text-gray-600 dark:text-gray-400">
              FunctionalForIt is led by a diverse team of technologists, mental health professionals, designers, and
              community builders united by a shared vision of technology that serves human flourishing.
            </p>
            <Button variant="link" className="mt-2 p-0 h-auto text-indigo-600 hover:text-indigo-700">
              Meet our team
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Values</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Human wellbeing over engagement</li>
              <li>Depth over breadth</li>
              <li>Privacy by design</li>
              <li>Inclusivity and accessibility</li>
              <li>Transparency and accountability</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Impact</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Since our launch, we've helped thousands of people develop deeper self-awareness, process emotions more
              effectively, and build more meaningful connections with others.
            </p>
            <Button variant="link" className="mt-2 p-0 h-auto text-indigo-600 hover:text-indigo-700">
              See our impact report
            </Button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Join Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a more meaningful social experience, want to support our mission, or are
            interested in bringing our tools to your community, we'd love to connect with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/onboarding">Create an Account</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/mission">Learn About Our Mission</Link>
            </Button>
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

