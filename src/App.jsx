import React, { useMemo, useState } from 'react'
import TimeCapsuleStory from './components/TimeCapsuleStory'
import { capsules as allCapsules } from './data/capsules'

function CapsuleCard({ capsule, onOpen }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{capsule.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{capsule.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => onOpen(capsule)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg"
        >
          Open
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [openCapsule, setOpenCapsule] = useState(null)

  const capsules = useMemo(() => allCapsules, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="px-6 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Time Capsules</h1>
            <p className="text-gray-600">Interactive story capsules — all accessible right now.</p>
          </div>
          <a href="/test" className="text-sm text-blue-700 hover:underline">Test Page</a>
        </div>
      </header>

      <main className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capsules.map((c) => (
            <CapsuleCard key={c.id} capsule={c} onOpen={(cap) => setOpenCapsule(cap)} />
          ))}
        </div>
      </main>

      {openCapsule && (
        <TimeCapsuleStory
          capsuleId={openCapsule.id}
          story={openCapsule.story}
          onClose={() => setOpenCapsule(null)}
        />
      )}
    </div>
  )
}
