import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
          <div className="text-center mb-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                  <div className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                      F
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <h1 className="text-2xl font-bold mt-4">Find Your Account</h1>
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Please enter your email address or mobile number to search for your account.
          </p>

          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Email or mobile number"
              className="text-base py-5 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />

            <div className="flex justify-between pt-2">
              <Button
                variant="outline"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border-0"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Cancel
                </Link>
              </Button>

              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Search</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

