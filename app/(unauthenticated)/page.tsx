import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">
          {/* Left side - Platform description */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div className="absolute inset-[3px] rounded-full bg-white dark:bg-gray-950 flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text ">
                    🙇
                  </span>
                </div>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                functionalforit
              </span>
            </div>
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-green-600 rounded-full">
              Non-Profit Organization
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800 dark:text-gray-200">
              FunctionalForIt helps you connect with yourself and share meaningful experiences.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              A social platform centered on introspection, emotional processing, and mindful sharing.
            </p>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">What Makes Us Different</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
                <li>No popularity contests - we encourage genuine connections</li>
                <li>No ads - we prioritize user experience over profits</li>
                <li>No pictures - we focus on experiences, not appearances</li>
                <li>No names - we value anonymity and privacy</li>
                <li>No notion of gender - we believe in inclusivity and equality</li>
                <li>No race - we promote unity and diversity</li>
                <li>No income - we strive for accessibility and fairness</li>
                <li>No data selling - we respect your personal data</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                This is a place for human experiences to be shared and reflected upon without judgement of the superficial.
              </p>
              <Button
                className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                asChild
              >
                <Link href="/mission">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Login form */}
          {/* <div className="flex-1 w-full max-w-md">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Email or phone number"
                  className="text-base py-6 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="text-base py-6 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
                <Button className="w-full py-6 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                  <Link href="/feed">Log In</Link>
                </Button>
                <div className="text-center">
                  <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-700 text-sm">
                    Forgot password?
                  </Link>
                </div>
                <hr className="my-4 border-gray-300 dark:border-gray-700" />
                <div className="flex justify-center">
                  <Button
                    className="py-3 px-6 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                    asChild
                  >
                    <Link href="/onboarding">Create new account</Link>
                  </Button>
                </div>
              </form>
            </div>
            <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
              <span className="font-bold">Create a Page</span> for a public figure, group, or organization.
            </p>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-gray-300 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-400">
            <Link href="#" className="hover:underline">
              English (US)
            </Link>
            <Link href="#" className="hover:underline">
              Español
            </Link>
            <Link href="#" className="hover:underline">
              Français (France)
            </Link>
            <Link href="#" className="hover:underline">
              中文(简体)
            </Link>
            <Link href="#" className="hover:underline">
              العربية
            </Link>
            <Link href="#" className="hover:underline">
              Português (Brasil)
            </Link>
            <Link href="#" className="hover:underline">
              Italiano
            </Link>
            <Link href="#" className="hover:underline">
              한국어
            </Link>
            <Link href="#" className="hover:underline">
              Deutsch
            </Link>
            <Link href="#" className="hover:underline">
              हिन्दी
            </Link>
            <Link href="#" className="hover:underline">
              日本語
            </Link>
          </div>
          <hr className="my-2 border-gray-300 dark:border-gray-800" />
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-400">
            <Link href="#" className="hover:underline">
              Sign Up
            </Link>
            <Link href="#" className="hover:underline">
              Log In
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Help
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Careers
            </Link>
            <Link href="#" className="hover:underline">
              Developers
            </Link>
            <Link href="#" className="hover:underline">
              Cookies
            </Link>
            <Link href="#" className="hover:underline">
              Ad choices
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
            FunctionalForIt © 2025 | A 501(c)(3) Non-Profit Organization
          </p>
        </div>
      </footer>
    </div>
  )
}

