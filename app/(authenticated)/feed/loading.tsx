export default function Loading() {
  return (
    <div className="container px-4 py-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar skeleton */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-64 animate-pulse"></div>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-80 animate-pulse"></div>
        </div>

        {/* Main content skeleton */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-40 animate-pulse"></div>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-96 animate-pulse"></div>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-96 animate-pulse"></div>
        </div>

        {/* Right sidebar skeleton */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-80 animate-pulse"></div>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 h-64 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

