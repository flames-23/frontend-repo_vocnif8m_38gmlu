import React, { useEffect, useMemo, useState } from 'react'

// Media renderer supporting image, video, and 3D model via <model-viewer>
function MediaViewer({ media }) {
  if (!media) return null
  const { type, src, autoplay } = media

  if (type === 'image') {
    return (
      <img
        src={src}
        alt=""
        className="w-full h-64 object-cover rounded-lg shadow-sm"
        loading="lazy"
      />
    )
  }

  if (type === 'video') {
    return (
      <video
        src={src}
        className="w-full h-64 rounded-lg shadow-sm bg-black"
        controls
        playsInline
        muted={autoplay}
        autoPlay={autoplay}
        loop={autoplay}
      />
    )
  }

  if (type === 'model') {
    return (
      <model-viewer
        src={src}
        camera-controls
        autoplay={autoplay ? '' : undefined}
        ar
        exposure="0.9"
        shadow-intensity="0.8"
        style={{ width: '100%', height: '320px', background: 'linear-gradient(to bottom, #fafafa, #f0f4ff)', borderRadius: '0.5rem' }}
      />
    )
  }

  return null
}

export default function TimeCapsuleStory({ capsuleId, story, onClose }) {
  const storageKey = useMemo(() => `capsule_progress:${capsuleId}`,[capsuleId])
  const [currentId, setCurrentId] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const parsed = JSON.parse(saved)
        return parsed.currentId || story.start?.id || 'start'
      }
    } catch {}
    return story.start?.id || 'start'
  })

  const node = story[currentId] || story[story.start?.id || 'start']

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ currentId }))
    } catch {}
  }, [currentId, storageKey])

  const restart = () => {
    const startId = story.start?.id || 'start'
    setCurrentId(startId)
  }

  const onChoose = (nextId) => {
    if (story[nextId]) {
      setCurrentId(nextId)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden animate-in">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">{story.title || 'Capsule'}</h3>
          <div className="flex items-center gap-2">
            <button onClick={restart} className="text-sm px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">Restart</button>
            <button onClick={onClose} className="text-sm px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-black">Close</button>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {node?.media && <MediaViewer media={node.media} />}

          <div className="space-y-2">
            <div className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
              {node?.text}
            </div>
          </div>

          <div className="pt-2 grid sm:grid-cols-2 gap-3">
            {(node?.choices || []).map((c) => (
              <button
                key={c.label + c.nextId}
                onClick={() => onChoose(c.nextId)}
                className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                {c.label}
              </button>
            ))}
            {(!node?.choices || node.choices.length === 0) && (
              <div className="text-sm text-gray-500">No further choices. You can close or restart.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
