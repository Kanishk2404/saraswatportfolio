import { useState, useEffect, useRef } from 'react'

export default function ImageGallery({ images, title }) {
  const [selected, setSelected] = useState(0)
  const timeoutRef = useRef(null)
  if (!images || images.length === 0) return null

  // Auto-shift images every 3 seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setSelected((selected + 1) % images.length)
    }, 3000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [selected, images.length])

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setSelected((selected + 1) % images.length)
      } else if (e.key === 'ArrowLeft') {
        setSelected((selected - 1 + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected, images.length])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4 relative">
        <img
          src={images[selected]}
          alt={title + ' main'}
          loading="lazy" width="640" height="384"
          className="rounded-xl border border-zinc-700 bg-zinc-900/50 object-cover w-full max-w-2xl h-96"
          style={{ maxHeight: '24rem' }}
        />
        {/* Arrow buttons */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-900/70 text-cyan-400 rounded-full p-2 shadow-lg hover:bg-cyan-600 hover:text-white transition"
          style={{zIndex:2}}
          onClick={() => setSelected((selected - 1 + images.length) % images.length)}
          aria-label="Previous image"
        >&#8592;</button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-900/70 text-cyan-400 rounded-full p-2 shadow-lg hover:bg-cyan-600 hover:text-white transition"
          style={{zIndex:2}}
          onClick={() => setSelected((selected + 1) % images.length)}
          aria-label="Next image"
        >&#8594;</button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setSelected(idx)}
            className={`border-2 rounded-lg overflow-hidden focus:outline-none ${selected === idx ? 'border-cyan-400' : 'border-zinc-700'}`}
            style={{ padding: 0, background: 'none' }}
          >
            <img
              src={img}
              alt={title + ' thumbnail ' + (idx + 1)}
              loading="lazy" width="128" height="80"
              className="h-20 w-32 object-cover"
              style={{ display: 'block' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
