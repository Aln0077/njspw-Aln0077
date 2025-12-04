import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-300/40 via-stone-100 to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-gray-700 font-normal mb-12">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project Card Example - Duplicate this 3 times */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Image
                src="/bloompath.png"
                alt="AI Career Navigator"
                width={2000}
                height={2000}
                className='object-cover'
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-gray-700 font-bold mb-2">BloomPath</h3>
              <p className="text-gray-600 mb-4">
                React-based web app that helps users match resumes to jobs, identify skills 
                gaps, and receive personalized career guidance through AI integration.
              </p>
              <div className="flex gap-2">
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">ReactJS</span>
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">CSS</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Image
                src="/daplatform.png"
                alt="Data Analysis Platform"
                width={2000}
                height={2000}
                className='object-cover'
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-gray-700 font-bold mb-2">Data Analysis Platform</h3>
              <p className="text-gray-600 mb-4">
                AI-powered web app built with Next.js and React that analyzes CSV, JSON, 
                and Excel files, delivering instant quality scores, interactive 
                dashboards, and actionable recommendations
              </p>
              <div className="flex gap-2">
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">NextJS</span>
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">CSS</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Image
                src="/gigforge.png"
                alt="GigForge (Coming Soon)"
                width={3000}
                height={3000}
                className='object-cover'
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-gray-700 font-bold mb-2">GigForge</h3>
              <p className="text-gray-600 mb-4">
                Connects creatives with micro-gigs. Browse, post, and apply to fun 
                tasks, all in a sleek, interactive frontend experience. (Coming Soon)
              </p>
              <div className="flex gap-2">
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">NextJS</span>
                <span className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">Tech 2</span>
              </div>
            </div>
          </div>

          {/* TODO: Add 2 more project cards */}
          
        </div>

      </div>
    </div>
  )
}
